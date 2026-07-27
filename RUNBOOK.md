# Autobank Runbook

This runbook defines deterministic startup, recovery, checkpoint, owner-request, and emergency-stop behavior. `AUTOBANK_POLICY.md`, `CONTROL.json`, `MISSION.md`, and `AUTHORIZED_RESOURCES.md` take precedence over this document.

## 1. Start or resume a normal session

From PowerShell:

```powershell
cd C:\Projects\autobank
git status --short --branch
git pull --ff-only
npm run validate
pi
```

Never reset, clean, stash, rebase, force-push, or discard unexpected local changes merely to make synchronization succeed. Inspect and preserve them; create an owner request when their intent cannot be established safely.

Inside Pi, follow the read order in `AGENTS.md`.

Before doing work, reconcile:

- `CONTROL.json` run state and owner directive
- `STATE.json` active task, blocker list, and next action
- Open entries in `OWNER_REQUESTS.md`
- Active experiment, if any
- Latest entries in `EXTERNAL_ACTIONS.md`, `DECISION_LOG.md`, `EVIDENCE_INDEX.md`, and `LEDGER.csv`
- Git working tree and most recent pushed commit

If repository state and external reality disagree, preserve both observations, stop the affected action, and investigate before changing records or retrying anything.

### Owner one-paste setup-audit entry

For the current initial setup audit, the owner may start Pi, invoke `/task-auto`, and paste the complete prompt from `SETUP_AUDIT_PROMPT.md`. The prompt makes Pi perform checkout synchronization, validation, documentation review, runtime auditing, reporting, commit, push, and remote-HEAD verification itself. No manual preparation is required unless Pi records a genuine owner-only blocker.

## 2. Behavior by control state

### `setup`

Allowed:

- Local repository work
- Deterministic tests
- Documentation-freshness review and operator-document corrections
- Runtime and recovery testing
- Read-only public web research through a proven non-metered path
- Agent Browser smoke tests without authentication or external mutation
- Drafting proposed experiments and owner requests
- Commits and pushes to the authorized Autobank repository

Not allowed:

- Revenue experiments
- Account creation or login to newly authorized services
- Forms, submissions, messages, listings, deployments, purchases, or external repository mutations outside `flipjam/autobank`
- Any action that changes other external data or creates a commitment

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
npm test
npm run validate:strict
```

`npm test` exercises positive and negative validator behavior. Strict validation checks required files, JSON structure, control invariants, ledger headers, ignored secret locations, duplicate record identifiers, tracked sensitive paths, and common tracked-secret indicators.

A validation failure affecting authority, spending, credentials, financial truth, or emergency control is a stop condition. Record a blocker or owner request when it cannot be corrected safely within existing authority.

## 4. Documentation freshness

At meaningful setup and campaign boundaries, review tracked documentation and operational records for:

- Current control state, phase, next action, and revenue totals
- Repository, path, branch, package, and command accuracy
- Internal cross-reference consistency
- Stale completion or future-tense statements
- Agreement between documented procedures and deterministic scripts
- Clear separation of owner-controlled and operator-maintained documents

Pi may update operator-maintained documentation and records. It must not silently change policy, authority, permissions, milestone order, spending limits, campaign activation, or authorized resources. Proposed owner-controlled changes belong in `OWNER_REQUESTS.md` until explicitly approved.

## 5. Begin a campaign

A campaign may begin only after the owner commits all of the following:

1. `CONTROL.json` has `run_state: "active"`, `external_actions_allowed: true`, no emergency stop, and an active campaign ID.
2. `MISSION.md` still supports the campaign objective.
3. Required accounts, tools, platforms, and permissions appear in `AUTHORIZED_RESOURCES.md`.
4. An experiment in `EXPERIMENT_LOG.md` is approved with scope, payment path, effort budget, success condition, and stop/continue/pivot criteria.
5. Any unavoidable owner actions or legal terms are resolved.
6. Deterministic validation passes.

Pi cannot activate its own campaign.

## 6. Before an external action

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

## 7. Checkpointing

Checkpoint and push:

- After each meaningful verified unit of work
- Before and after each external action
- After each financial event
- Before a long or failure-prone operation
- Before yielding, ending, restarting, or compacting a session
- When a blocker, owner request, or material decision is created
- After a documentation-freshness pass that changes tracked files

A checkpoint should update the relevant durable records and leave the tree clean. If it cannot, document the exact uncommitted state and reason in `STATE.json`.

Never commit secrets, private evidence, browser profiles, downloads, authenticated session state, or personal data.

## 8. Owner-only blocker

1. Create a structured `REQ-...` entry in `OWNER_REQUESTS.md`.
2. Update `STATE.json` blocker and open-request fields.
3. Notify the owner through the approved remote interface.
4. Do not expose or request secrets through prompts or Git.
5. Continue unrelated productive work when safe.
6. Do not treat the request as approved until an explicit owner response and any required repository policy or authorization update exist.

## 9. Revenue verification and accounting

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

## 10. Recovery after interruption

1. Do not repeat the last intended action automatically.
2. Pull the latest repository state and run validation.
3. Read the last external action and active experiment entries.
4. Inspect the relevant platform or artifact to determine whether the action occurred.
5. Record the verification result.
6. Retry only when non-occurrence is confirmed and retry remains authorized.
7. If external truth cannot be determined, stop the affected path and create an owner request.

## 11. Emergency stop

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

## 12. Close an experiment or campaign

- Reconcile every planned, attempted, and completed external action.
- Reconcile ledger and evidence records.
- Resolve customer/platform obligations and pending owner requests.
- Remove temporary data and credentials according to retention requirements.
- Record the result and invalidated assumptions honestly.
- Identify reusable assets and the next recommended bounded experiment.
- Update `STATE.json` and, when owner-directed, `CONTROL.json`.
- Refresh affected documentation.
- Run validation and push a clean final checkpoint.

## 13. Current next operation

The current authorized operation is the self-bootstrapping bounded setup audit in `SETUP_AUDIT_PROMPT.md`. It must synchronize the checkout safely; run deterministic tests; review all tracked documentation for freshness; verify the approved local inference, `pi-web-access`, Agent Browser, statusline, and Tailscale boundaries; produce `SETUP_AUDIT_REPORT.md` and `RESUME_TEST_PLAN.md`; commit and push every intended public-safe change; and verify local and remote `main` match.

It must not activate a campaign, begin revenue work, change owner authority, or mutate external data outside the Autobank repository.
