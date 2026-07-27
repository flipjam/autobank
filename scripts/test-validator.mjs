import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'autobank-validator-test-'));
let failures = 0;

function run(command, args, cwd) {
  return spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    windowsHide: true
  });
}

function copyWorkspace(destination) {
  fs.cpSync(root, destination, {
    recursive: true,
    filter(source) {
      const relative = path.relative(root, source).replaceAll('\\', '/');
      if (relative === '') return true;
      return !(
        relative === '.git' ||
        relative.startsWith('.git/') ||
        relative === 'node_modules' ||
        relative.startsWith('node_modules/') ||
        relative === 'private-evidence' ||
        relative.startsWith('private-evidence/')
      );
    }
  });

  const init = run('git', ['init', '-q'], destination);
  if (init.status !== 0) {
    throw new Error(`Unable to initialize temporary Git repository: ${init.stderr}`);
  }
  const add = run('git', ['add', '-A'], destination);
  if (add.status !== 0) {
    throw new Error(`Unable to stage temporary workspace: ${add.stderr}`);
  }
}

function executeValidator(workspace) {
  return run(process.execPath, ['scripts/validate-workspace.mjs'], workspace);
}

function expect(name, result, expectedStatus, expectedText = '') {
  const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;
  const statusMatches = expectedStatus === 0 ? result.status === 0 : result.status !== 0;
  const textMatches = expectedText === '' || output.includes(expectedText);
  if (statusMatches && textMatches) {
    console.log(`PASS: ${name}`);
  } else {
    failures += 1;
    console.error(`FAIL: ${name}`);
    console.error(`Expected status ${expectedStatus === 0 ? 'success' : 'failure'} and text ${JSON.stringify(expectedText)}.`);
    console.error(output.trim());
  }
}

function freshCase(name) {
  const destination = path.join(temporaryRoot, name);
  copyWorkspace(destination);
  return destination;
}

try {
  {
    const workspace = freshCase('baseline');
    expect('approved baseline passes', executeValidator(workspace), 0, 'Autobank validation PASSED');
  }

  {
    const workspace = freshCase('spending');
    const file = path.join(workspace, 'CONTROL.json');
    const control = JSON.parse(fs.readFileSync(file, 'utf8'));
    control.autonomous_spending_limit_usd = 1;
    fs.writeFileSync(file, `${JSON.stringify(control, null, 2)}\n`);
    expect('nonzero autonomous spending fails', executeValidator(workspace), 1, 'Autonomous spending limit must remain exactly $0');
  }

  {
    const workspace = freshCase('setup-external');
    const file = path.join(workspace, 'CONTROL.json');
    const control = JSON.parse(fs.readFileSync(file, 'utf8'));
    control.external_actions_allowed = true;
    fs.writeFileSync(file, `${JSON.stringify(control, null, 2)}\n`);
    expect('external actions in setup fail', executeValidator(workspace), 1, 'External actions must be disabled');
  }

  {
    const workspace = freshCase('active-without-campaign');
    const file = path.join(workspace, 'CONTROL.json');
    const control = JSON.parse(fs.readFileSync(file, 'utf8'));
    control.run_state = 'active';
    control.external_actions_allowed = true;
    control.active_campaign_id = null;
    fs.writeFileSync(file, `${JSON.stringify(control, null, 2)}\n`);
    expect('active state without campaign fails', executeValidator(workspace), 1, 'requires a non-empty active_campaign_id');
  }

  {
    const workspace = freshCase('emergency-mismatch');
    const file = path.join(workspace, 'CONTROL.json');
    const control = JSON.parse(fs.readFileSync(file, 'utf8'));
    control.emergency_stop = true;
    fs.writeFileSync(file, `${JSON.stringify(control, null, 2)}\n`);
    expect('inconsistent emergency stop fails', executeValidator(workspace), 1, 'Emergency stop requires');
  }

  {
    const workspace = freshCase('financial-mismatch');
    const file = path.join(workspace, 'STATE.json');
    const state = JSON.parse(fs.readFileSync(file, 'utf8'));
    state.verified_financials_usd.gross_revenue = 10;
    fs.writeFileSync(file, `${JSON.stringify(state, null, 2)}\n`);
    expect('inconsistent financial totals fail', executeValidator(workspace), 1, 'net_revenue should be 10');
  }

  {
    const workspace = freshCase('ledger-header');
    fs.writeFileSync(path.join(workspace, 'LEDGER.csv'), 'wrong,header\n');
    expect('invalid ledger schema fails', executeValidator(workspace), 1, 'LEDGER.csv header does not match');
  }

  {
    const workspace = freshCase('tracked-secret');
    const fakeToken = `gh${'p_'}${'A'.repeat(30)}`;
    fs.writeFileSync(path.join(workspace, 'leak.txt'), `${fakeToken}\n`);
    run('git', ['add', 'leak.txt'], workspace);
    expect('obvious tracked token fails', executeValidator(workspace), 1, 'Possible GitHub token found');
  }
} finally {
  fs.rmSync(temporaryRoot, { recursive: true, force: true });
}

if (failures > 0) {
  console.error(`Validator self-test FAILED: ${failures} case(s) did not behave as expected.`);
  process.exit(1);
}

console.log('Validator self-test PASSED: all positive and negative cases behaved as expected.');
