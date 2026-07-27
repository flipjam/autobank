# Autobank Runbook

This runbook defines deterministic startup, recovery, checkpoint, owner-request, and emergency-stop behavior. `AUTOBANK_POLICY.md`, `CONTROL.json`, and `AUTHORIZED_RESOURCES.md` take precedence over this document.

## 1. Start or resume a session

From PowerShell:

```powershell
cd C:\Projects\autobank
git status --short --branch
git pull --ff-only
npm run validate
pi
```

Inside Pi, follow the read order in `AGENTS.md`.

Before doing work, reconcile:

- `CONTROL.json` run state and owner directive
- `STATE.json` active task, blocker list, and next action
- Open entries in `OWNER_REQUESTS.md`
- Active experiment, if any
- Latest entries in `EXTERNAL_ACTIONS.md`, `DECISION_LOG.md`, `EVIDENCE_INDEX.md`, and `LEDGER.csv`
- Git working tree and most recent pushed commit

If repository state and external reality disagree, preserve both observations, stop the affected action, and investigate before changing records or retrying anything.

## 2. Behavior by control state

### `setup`

Allowed:

- Local repository work
- Deterministic tests
- Runtime and recovery testing
- Read-only public web research
- Agent Browser smoke tests without authentication or external mutation
- Drafting proposed experiments and owner requests

Not allowed:

- Revenue experiments
- Account creation or login to newly authorized services
- Forms, submissions, messages, listings, deployments, purchases, or external repository mutations
- Any action that changes external data or creates a commitment

### `active`

Proceed only within the active campaign, policy, resource authorization, and experiment boundaries. Re-check control before every external action.

### `paused`

Do not start new work or external actions. Safely finish only the minimum local step needed to preserve integrity, update state, checkpoint, and wait.

### `emergency_stop`

Stop affected processes and all external actions immediately. Preserve logs and evidence. Do not resume merely because the original issue appears resolved. Explicit owner authorization and a committed control change are required.

### `completed`

Reconcile records, close sessions, preserve evidence, and wait for a new owner-approved campaign.

## 3. Deterministic validation

Run:

```powershell
npm run validate
```

Validation checks required files, JSON structure, control invariants, ledger headers, ignored secret locations, and obvious tracked-secret indicators.

A validation failure affecting authority, spending, credentials, financial truth, or emergency control is a stop condition. Record a blocker or owner request when it cannot be corrected safely within existing authority.

## 4. Begin a campaign

A campaign may begin only after the owner commits all of the following:

1. `CONTROL.json` has `run_state: "active"`, `external_actions_allowed: true`, no emergency stop, and an active campaign ID.
2. `MISSION.md` still supports the campaign objective.
3. Required accounts, tools, platforms, and permissions appear in `AUTHORIZED_RESOURCES.md`.
4. An experiment in `EXPERIMENT_LOG.md` is approved with scope, payment path, effort budget, success condition, and stop/continue/pivot criteria.
5. Any unavoidable owner actions or legal terms are resolved.
6. Deterministic validation passes.

Pi cannot activate its own campaign.

## 5. Before an external action

1. Pull and re-read `CONTROL.json`.
2. Confirm the active campaign and experiment.
3. Confirm the exact platform, account alias, and action are authorized.
4. Confirm no spending or metered service will be triggered.
5. Re-check current platform rules, terms, licensing, and required disclosure when relevant.
6. Search `EXTERNAL_ACTIONS.md` and the external platform for a duplicate or prior partial attempt.
7. Reserve an `ACT-...` ID and document planned intent.
8. Check that rollback or recovery is understood.
9. Perform only the minimum action necessary.
10. Record actual result and evidence immediately.
11. Update experiment and state, then commit and push.

A timeout, crash, or ambiguous response is not permission to retry. Verify external state first.

## 6. Checkpointing

Checkpoint and push:

- After each meaningful verified unit of work
- Before and after each external action
- After each financial event
- Before a long or failure-prone operation
- Before yielding, ending, restarting, or compacting a session
- When a blocker, owner request, or material decision is created

A checkpoint should update the relevant durable records and leave the tree clean. If it cannot, document the exact uncommitted state and reason in `STATE.json`.

Never commit secrets, private evidence, browser profiles, downloads, authenticated session state, or personal data.

## 7. Owner-only blocker

1. Create a structured `REQ-...` entry in `OWNER_REQUESTS.md`.
2. Update `STATE.json` blocker and open-request fields.
3. Notify the owner through the approved remote interface.
4. Do not expose or request secrets through prompts or Git.
5. Continue unrelated productive work when safe.
6. Do not treat the request as approved until an explicit owner response and any required authorization commit exist.

## 8. Revenue verification and accounting

For every financial event:

1. Create an evidence record with a safe public summary.
2. Store sensitive originals only in an approved ignored location.
3. Add one ledger row using a unique `FIN-...` entry ID.
4. Use the actual transaction currency; do not silently convert amounts.
5. Compute:
   - `net_revenue = gross_revenue - platform_fees - processing_fees - approved_expenses - refunds_chargebacks`
   - `net_cash_after_withholding = net_revenue - taxes_withheld`
6. Update aggregate verified financials in `STATE.json`.
7. Commit and push.

Pending invoices, proposals, promised bounties, views, downloads, or platform estimates must not be entered as verified revenue.

## 9. Recovery after interruption

1. Do not repeat the last intended action automatically.
2. Pull the latest repository state and run validation.
3. Read the last external action and active experiment entries.
4. Inspect the relevant platform or artifact to determine whether the action occurred.
5. Record the verification result.
6. Retry only when non-occurrence is confirmed and retry remains authorized.
7. If external truth cannot be determined, stop the affected path and create an owner request.

## 10. Emergency stop

The owner may issue `STOP AUTOBANK`, terminate Pi, or commit `CONTROL.json` with:

```json
{
  "run_state": "emergency_stop",
  "external_actions_allowed": false,
  "emergency_stop": true
}
```

On receiving or detecting an emergency stop, Pi must:

1. Stop all external actions and spending-capable processes.
2. Avoid destructive cleanup that could remove evidence.
3. Close authenticated browser activity when safe.
4. Record current state, suspected issue, accounts or actions affected, and last known external mutation.
5. Commit only public-safe records; preserve sensitive incident data locally in ignored storage.
6. Notify the owner.
7. Remain stopped until the owner explicitly commits a resume decision.

## 11. Close an experiment or campaign

- Reconcile every planned, attempted, and completed external action.
- Reconcile ledger and evidence records.
- Resolve customer/platform obligations and pending owner requests.
- Remove temporary data and credentials according to retention requirements.
- Record the result and invalidated assumptions honestly.
- Identify reusable assets and the next recommended bounded experiment.
- Update `STATE.json` and, when owner-directed, `CONTROL.json`.
- Run validation and push a clean final checkpoint.

## 12. Current next operation

The current authorized operation is a bounded setup audit only. It must prove that Pi can read the framework, validate it, update durable state, commit and push a harmless checkpoint, survive a controlled interruption, and resume without taking an external action.
