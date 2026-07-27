# Autobank Setup Audit Report

## Executive result

**Status:** READY WITH BLOCKERS

**Overall scope:** Initial `/task-auto` setup audit and runtime boundary verification for `setup` control state.

**Date (UTC):** 2026-07-27

## Scope and constraints

- Repository: `C:\Projects\autobank`
- Allowed external mutation during this run: commits and pushes only to `flipjam/autobank`
- External actions in effect: disabled
- Spending limit: `$0`
- Revenue campaign: not active

## Repository synchronization and state

- Working directory confirmed: `C:\Projects\autobank`
- Git checkout target: `https://github.com/flipjam/autobank.git`
- Branch: `main`
- Local HEAD: `f3f200088cf5f361b4d9c47df2c680910a287621`
- Remote HEAD (`origin/main`): `f3f200088cf5f361b4d9c47df2c680910a287621`
- Working tree before/after edits: clean at checkpoints (verified with `git status --short --branch`)
- Fast-forward synchronization policy was followed (no force-push/rebase/clean/restore used)

## Checks and outcomes

| Check | Command/result | Result |
|---|---|---|
| Checkout truth | `git status --short --branch`, `git rev-parse`, `git rev-list --left-right` | PASS |
| Deterministic validator | `npm test` | PASS |
| Strict validator | `npm run validate:strict` | PASS |
| Document/operator refresh | README, RUNBOOK reviewed/updated; required files reviewed | PASS |
| Inference availability | `pi --list-models` + local call with explicit `--provider minipc` | PARTIAL (uncertain default) |
| Inference boundary lock | `PI_PROVIDER=...` and environment inspection | **UNCERTAIN / BLOCKER** |
| Web-access boundary | `~/.pi/web-search.json` + `pi-web-access` code-path review | **UNCERTAIN / BLOCKER** |
| Agent Browser smoke | `agent_browser` open `https://example.com`, `snapshot -i` | PASS |
| Statusline + remote visibility | package/command registration evidence and config inspection | PASS |
| Final checkpoint behavior | report/plan prepared, changes staged for commit | PASS |

## Documentation-freshness audit

Reviewed all tracked Markdown documents plus required JSON/script/CSV controls:

- `README.md`
- `AGENTS.md`
- `AUTOBANK_POLICY.md`
- `CONTROL.json`
- `MISSION.md`
- `AUTHORIZED_RESOURCES.md`
- `STATE.json`
- `OWNER_REQUESTS.md`
- `DECISION_LOG.md`
- `EXTERNAL_ACTIONS.md`
- `EVIDENCE_INDEX.md`
- `RUNBOOK.md`
- `SETUP_AUDIT_PROMPT.md`
- `OPPORTUNITIES.md`
- `EXPERIMENT_LOG.md`
- `LEDGER.csv`
- `SETUP_AUDIT_REPORT.md` (new)
- `RESUME_TEST_PLAN.md` (new)

### Operator-maintained updates made

- Updated `README.md` to reflect completed setup audit and current blocked readiness state.
- Updated `RUNBOOK.md` next-operation text to reflect blocker-driven next action.
- Added/updated durable operational records:
  - `OWNER_REQUESTS.md`
  - `STATE.json`
  - `EVIDENCE_INDEX.md`
  - `DECISION_LOG.md`

## Runtime inventory (public-safe)

- Node: `v24.18.0`
- npm: `11.16.0`
- Git: `2.55.0.windows.3`
- Pi: `0.82.1`
- `pi-agent-browser-native`: `0.2.72` (available)
- `@ifi/pi-remote-tailscale`: `0.5.1`
- `@mjasnikovs/pi-task`: `0.21.9`
- `@narumitw/pi-statusline`: `0.34.0`
- `pi-web-access`: `0.14.0`
- Agent Browser smoke test output: `Example Domain` page with refs to heading/link on `example.com`.

## Inference and web-access audit (required)

### Inference boundary

- `pi --print --list-models` shows both local (`minipc`) and external (`openai-codex`) models.
- Current env-driven defaults in this session are:
  - `PI_PROVIDER=openai-codex`
  - `PI_MODEL=gpt-5.3-codex-spark`
- Local inference is reachable via explicit call:
  - `pi --provider minipc --model qwen3.6-35b-a3b-xl --print "Reply with exactly: INFERENCE_LOCAL_OK"`
  - output: `INFERENCE_LOCAL_OK`
- Because defaults still point to Codex and no repository-owned runtime policy was changed in this audit, the routine unattended path is **not yet proven to be locked to non-metered/local-only behavior**.

### `pi-web-access` boundary

- `~/.pi/web-search.json` has no explicit provider routing fields beyond legacy shortcuts.
- `pi-web-access` auto chain includes `openai` fallback before MCP alternatives.
- No paid/metered-safe classification was possible without explicit owner-approved config changes.
- Initial report period had no web-search nor fetch-content calls executed before this calibration decision; afterward, one explicit temporary openai call was logged under controlled calibration conditions.

## Agent Browser, statusline, and Tailscale checks

- Confirmed Agent Browser invocation works in fresh session and can open/read a public page; session was closed afterward (`agent_browser` `close` returned `closed: true`).
- Confirmed statusline extension is installed and configured (`~/.pi/agent/pi-statusline.json`, extension settings include status segments).
- Confirmed Tailscale remote package installed and commands are registered:
  - `/remote`
  - `/remote stop`
  - `/remote:widget [on|off]`

No owner-facing remote service was started during this audit.

## Defects found and repairs

### Repaired/updated

1. Added missing setup state artifacts from this audit run:
   - `SETUP_AUDIT_REPORT.md`
   - `RESUME_TEST_PLAN.md`
2. Updated operational records to keep the repository state truthful.
3. Removed a spurious empty path artifact outside tracked workspace naming.

### Open blockers / owner-only items

- **`REQ-20260727-001`**: treated as answered for temporary web-search calibration only; see post-decision update.
- **`REQ-20260727-002`**: pending verification and lock for unattended inference to default local `minipc` with no metered fallback.

## Evidence references

- `EVD-20260727-001` — validation and repository sync outputs
- `EVD-20260727-002` — local inference smoke-test output
- `EVD-20260727-003` — agent-browser smoke-test output
- `EVD-20260727-004` — temporary web-access calibration run (openai workflow none)

## Post-decision operational update (2026-07-27T23:17:35Z)

Owner authorized a temporary web-access calibration for startup auditing under explicit limits:

- explicit `provider: "openai"`
- `workflow: "none"`
- no OpenAI API key configuration
- no fallback to other providers
- usage logging in `WEB_ACCESS_CALIBRATION_LOG.md`
- one successful call completed and recorded

`REQ-20260727-001` is treated as answered for this temporary calibration authorization only.

`REQ-20260727-002` remains open for routine inference lock verification.

## Recommended next step

Resolve `REQ-20260727-002` by proving routine unattended inference remains on local `minipc` defaults without automatic metered fallback; then re-run setup runtime checks from a clean tree and re-verify local/remote commit alignment.
