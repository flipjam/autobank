# Resume Test Plan

## Objective

Validate that Pi can be stopped/restarted and safely reconstruct the remaining setup state from repository records without losing truth or violating control limits.

## Preconditions

- `CONTROL.json` remains in `setup`
- `external_actions_allowed` remains `false`
- Working tree is clean after checkpoint
- Network access is available for read-only docs/repo operations
- No active revenue campaign

## Trigger

Use this plan after a restart event, transient failure, or owner-requested review.

## Steps

### 1) Recover state and verify source of truth

1. Start a new Pi session in `C:\Projects\autobank`.
2. Read in required order:
   - `AUTOBANK_POLICY.md`
   - `CONTROL.json`
   - `MISSION.md`
   - `AUTHORIZED_RESOURCES.md`
   - `STATE.json`
   - `OWNER_REQUESTS.md`
3. Verify state fields match expectations:
   - `STATE.json.workspace_status`
   - `STATE.json.active_task`
   - `STATE.json.next_intended_action`
   - `STATE.json.blockers`

### 2) Reconcile repository baseline

1. Run:
   ```powershell
   cd C:\Projects\autobank
   git status --short --branch
   git pull --ff-only
   ```
2. Confirm:
   - clean status or only known checkpoint diff
   - current branch is `main`
   - remote is `origin=flipjam/autobank`

### 3) Re-run mandatory validations

1. Run:
   ```powershell
   npm test
   npm run validate:strict
   ```
2. Fail any run if authoritative files or financial invariants are violated.

### 4) Resume from checkpoint artifact

1. Inspect:
   - `SETUP_AUDIT_REPORT.md`
   - `OWNER_REQUESTS.md`
   - `DECISION_LOG.md`
   - `EVIDENCE_INDEX.md`
2. Confirm last blockers remain open/closed and that all pending records are consistent with repository state.

### 5) Continue only if safe

- If `REQ-20260727-002` remains open, stop at safe setup boundary and notify owner.
- If no blockers and routine inference defaults are explicitly verified non-metered, continue with remaining setup tasks in `SETUP_AUDIT_PROMPT.md`. If only temporary web-search calibration remains constrained, continue only within its documented cap and logging constraints.

## Pass/fail criteria

- **Pass:** `SETUP_AUDIT_REPORT.md` and `STATE.json` align with current `git status`, validation outputs, and blocker state.
- **Fail:** Missing required records, divergence from `origin/main`, validation failure, or unresolved open owner request that blocks safe continuation.

## Duplicate-action safeguards

- Do not re-run expensive external actions unless explicitly required by `SETUP_AUDIT_PROMPT.md`.
- Rebuild no side-effect work from scratch if state indicates unresolved blocker.
- For each boundary-sensitive task, record one source-of-truth artifact (`EVIDENCE_INDEX.md` + command output) before continuing.

## Expected final state

- Working tree clean
- `SETUP_AUDIT_REPORT.md` and `RESUME_TEST_PLAN.md` exist and are up to date
- `git status --short --branch` indicates clean tree and no unexpected divergence
- `origin/main` is the intended remote with explicit intent in `OWNER_REQUESTS.md` and `STATE.json`
