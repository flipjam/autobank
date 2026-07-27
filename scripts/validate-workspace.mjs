import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const strict = process.argv.includes('--strict');
const errors = [];
const warnings = [];

const requiredFiles = [
  '.gitignore',
  'README.md',
  'AGENTS.md',
  'AUTOBANK_POLICY.md',
  'MISSION.md',
  'CONTROL.json',
  'STATE.json',
  'AUTHORIZED_RESOURCES.md',
  'OWNER_REQUESTS.md',
  'OPPORTUNITIES.md',
  'EXPERIMENT_LOG.md',
  'DECISION_LOG.md',
  'EXTERNAL_ACTIONS.md',
  'EVIDENCE_INDEX.md',
  'LEDGER.csv',
  'RUNBOOK.md',
  'package.json',
  'scripts/validate-workspace.mjs'
];

function relative(file) {
  return path.relative(root, file).replaceAll('\\', '/');
}

function readText(relativePath) {
  const value = fs.readFileSync(path.join(root, relativePath), 'utf8');
  return value.replace(/^\uFEFF/, '');
}

function readJson(relativePath) {
  try {
    return JSON.parse(readText(relativePath));
  } catch (error) {
    errors.push(`${relativePath} is not valid JSON: ${error.message}`);
    return null;
  }
}

function requireString(object, key, file) {
  if (typeof object?.[key] !== 'string' || object[key].trim() === '') {
    errors.push(`${file}.${key} must be a non-empty string.`);
  }
}

function requireBoolean(object, key, file) {
  if (typeof object?.[key] !== 'boolean') {
    errors.push(`${file}.${key} must be a boolean.`);
  }
}

function requireFiniteNumber(value, label) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    errors.push(`${label} must be a finite number.`);
  }
}

function approximatelyEqual(a, b) {
  return Math.abs(a - b) < 0.000001;
}

function parseCsvLine(line) {
  const values = [];
  let value = '';
  let quoted = false;

  for (let i = 0; i < line.length; i += 1) {
    const character = line[i];
    if (character === '"') {
      if (quoted && line[i + 1] === '"') {
        value += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === ',' && !quoted) {
      values.push(value);
      value = '';
    } else {
      value += character;
    }
  }

  values.push(value);
  if (quoted) {
    throw new Error('unclosed quoted field');
  }
  return values;
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

const control = fs.existsSync(path.join(root, 'CONTROL.json')) ? readJson('CONTROL.json') : null;
if (control) {
  if (control.schema_version !== 1) {
    errors.push('CONTROL.json.schema_version must be 1.');
  }

  const allowedStates = new Set(['setup', 'active', 'paused', 'emergency_stop', 'completed']);
  if (!allowedStates.has(control.run_state)) {
    errors.push(`CONTROL.json.run_state is invalid: ${String(control.run_state)}`);
  }

  requireBoolean(control, 'external_actions_allowed', 'CONTROL.json');
  requireBoolean(control, 'emergency_stop', 'CONTROL.json');
  requireFiniteNumber(control.autonomous_spending_limit_usd, 'CONTROL.json.autonomous_spending_limit_usd');
  requireString(control, 'owner_directive', 'CONTROL.json');

  if (control.autonomous_spending_limit_usd !== 0) {
    errors.push('Autonomous spending limit must remain exactly $0 unless the owner changes policy and validation together.');
  }

  if (control.run_state !== 'active' && control.external_actions_allowed !== false) {
    errors.push('External actions must be disabled unless CONTROL.json.run_state is active.');
  }

  if (control.run_state === 'active') {
    if (control.external_actions_allowed !== true) {
      errors.push('Active control state requires external_actions_allowed=true.');
    }
    if (typeof control.active_campaign_id !== 'string' || control.active_campaign_id.trim() === '') {
      errors.push('Active control state requires a non-empty active_campaign_id.');
    }
  }

  if (control.emergency_stop && (control.run_state !== 'emergency_stop' || control.external_actions_allowed)) {
    errors.push('Emergency stop requires run_state=emergency_stop and external_actions_allowed=false.');
  }

  if (control.run_state === 'emergency_stop' && !control.emergency_stop) {
    errors.push('run_state=emergency_stop requires emergency_stop=true.');
  }
}

const state = fs.existsSync(path.join(root, 'STATE.json')) ? readJson('STATE.json') : null;
if (state) {
  if (state.schema_version !== 1) {
    errors.push('STATE.json.schema_version must be 1.');
  }
  requireString(state, 'workspace_status', 'STATE.json');
  requireString(state, 'revenue_stage', 'STATE.json');
  requireString(state, 'active_task', 'STATE.json');
  requireString(state, 'next_intended_action', 'STATE.json');

  if (!Array.isArray(state.blockers)) {
    errors.push('STATE.json.blockers must be an array.');
  }
  if (!Array.isArray(state.open_owner_request_ids)) {
    errors.push('STATE.json.open_owner_request_ids must be an array.');
  }

  const financials = state.verified_financials_usd;
  if (!financials || typeof financials !== 'object' || Array.isArray(financials)) {
    errors.push('STATE.json.verified_financials_usd must be an object.');
  } else {
    const financialKeys = [
      'gross_revenue',
      'platform_fees',
      'processing_fees',
      'approved_expenses',
      'refunds_chargebacks',
      'taxes_withheld',
      'net_revenue',
      'net_cash_after_withholding'
    ];
    for (const key of financialKeys) {
      requireFiniteNumber(financials[key], `STATE.json.verified_financials_usd.${key}`);
    }

    if (financialKeys.every((key) => typeof financials[key] === 'number' && Number.isFinite(financials[key]))) {
      const expectedNet = financials.gross_revenue
        - financials.platform_fees
        - financials.processing_fees
        - financials.approved_expenses
        - financials.refunds_chargebacks;
      const expectedCash = expectedNet - financials.taxes_withheld;
      if (!approximatelyEqual(financials.net_revenue, expectedNet)) {
        errors.push(`STATE.json net_revenue should be ${expectedNet}, not ${financials.net_revenue}.`);
      }
      if (!approximatelyEqual(financials.net_cash_after_withholding, expectedCash)) {
        errors.push(`STATE.json net_cash_after_withholding should be ${expectedCash}, not ${financials.net_cash_after_withholding}.`);
      }
    }
  }
}

const expectedLedgerHeader = [
  'entry_id',
  'occurred_at_utc',
  'recorded_at_utc',
  'experiment_id',
  'entry_type',
  'status',
  'currency',
  'gross_revenue',
  'platform_fees',
  'processing_fees',
  'approved_expenses',
  'refunds_chargebacks',
  'taxes_withheld',
  'net_revenue',
  'net_cash_after_withholding',
  'payout_account_alias',
  'evidence_id',
  'notes'
];

if (fs.existsSync(path.join(root, 'LEDGER.csv'))) {
  const lines = readText('LEDGER.csv').split(/\r?\n/).filter((line) => line.length > 0);
  try {
    const header = parseCsvLine(lines[0] ?? '');
    if (header.join(',') !== expectedLedgerHeader.join(',')) {
      errors.push('LEDGER.csv header does not match the approved schema.');
    }
    for (let index = 1; index < lines.length; index += 1) {
      const row = parseCsvLine(lines[index]);
      if (row.length !== expectedLedgerHeader.length) {
        errors.push(`LEDGER.csv row ${index + 1} has ${row.length} columns; expected ${expectedLedgerHeader.length}.`);
      }
    }
  } catch (error) {
    errors.push(`LEDGER.csv could not be parsed: ${error.message}`);
  }
}

if (fs.existsSync(path.join(root, '.gitignore'))) {
  const ignored = new Set(readText('.gitignore').split(/\r?\n/).map((line) => line.trim()));
  const requiredIgnoreRules = [
    '.env',
    '.env.*',
    'secrets/',
    'browser-profile/',
    'downloads/',
    'private-evidence/'
  ];
  for (const rule of requiredIgnoreRules) {
    if (!ignored.has(rule)) {
      errors.push(`.gitignore must contain: ${rule}`);
    }
  }
}

const gitResult = spawnSync('git', ['ls-files', '-z'], {
  cwd: root,
  encoding: 'utf8',
  windowsHide: true
});

if (gitResult.status !== 0) {
  warnings.push(`Could not inspect tracked files with git ls-files: ${(gitResult.stderr || '').trim()}`);
} else {
  const trackedFiles = gitResult.stdout.split('\0').filter(Boolean);
  const forbiddenTracked = [
    /^\.env(?:\.|$)/i,
    /^secrets\//i,
    /^browser-profile\//i,
    /^downloads\//i,
    /^private-evidence\//i,
    /(?:^|\/)cookies[^/]*\.json$/i,
    /(?:^|\/)storage-state[^/]*\.json$/i,
    /(?:^|\/)auth-state[^/]*\.json$/i,
    /\.(?:pem|p12|pfx|key)$/i
  ];

  for (const file of trackedFiles) {
    const normalized = file.replaceAll('\\', '/');
    if (forbiddenTracked.some((pattern) => pattern.test(normalized))) {
      errors.push(`Sensitive or generated path is tracked: ${normalized}`);
    }
  }

  const secretPatterns = [
    ['GitHub token', /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g],
    ['GitHub fine-grained token', /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g],
    ['OpenAI-style API key', /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/g],
    ['AWS access key', /\bAKIA[0-9A-Z]{16}\b/g],
    ['private key block', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g]
  ];

  for (const file of trackedFiles) {
    const absolute = path.join(root, file);
    let stat;
    try {
      stat = fs.statSync(absolute);
    } catch {
      continue;
    }
    if (!stat.isFile() || stat.size > 2_000_000) {
      continue;
    }

    let text;
    try {
      text = fs.readFileSync(absolute, 'utf8');
    } catch {
      continue;
    }

    if (text.includes('\u0000')) {
      continue;
    }

    for (const [name, pattern] of secretPatterns) {
      pattern.lastIndex = 0;
      if (pattern.test(text)) {
        errors.push(`Possible ${name} found in tracked file: ${relative(absolute)}`);
      }
    }
  }

  const idPattern = /\b(?:REQ|OPP|EXP|ACT|EVD|DEC|FIN)-\d{8}-\d{3}\b/g;
  const idOwners = new Map();
  for (const file of trackedFiles.filter((item) => item.endsWith('.md') || item.endsWith('.csv') || item.endsWith('.json'))) {
    const absolute = path.join(root, file);
    let text;
    try {
      text = fs.readFileSync(absolute, 'utf8');
    } catch {
      continue;
    }
    for (const id of text.match(idPattern) ?? []) {
      const previous = idOwners.get(id);
      if (previous && previous !== file) {
        errors.push(`Duplicate record ID ${id} appears in both ${previous} and ${file}.`);
      } else {
        idOwners.set(id, file);
      }
    }
  }
}

if (strict && warnings.length > 0) {
  errors.push(...warnings.map((warning) => `Strict mode warning: ${warning}`));
}

for (const warning of warnings) {
  console.warn(`WARN: ${warning}`);
}

if (errors.length > 0) {
  console.error(`Autobank validation FAILED with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Autobank validation PASSED (${requiredFiles.length} required files checked${strict ? ', strict mode' : ''}).`);
console.log(`Control state: ${control?.run_state ?? 'unavailable'}; external actions allowed: ${String(control?.external_actions_allowed)}`);
console.log(`Revenue stage: ${state?.revenue_stage ?? 'unavailable'}; verified net revenue: $${state?.verified_financials_usd?.net_revenue ?? 'unavailable'}`);
