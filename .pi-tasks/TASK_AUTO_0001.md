---
id: TASK_AUTO_0001
state: in_progress
phase: done
created_at: 2026-07-27T23:48:03.751Z
updated_at: 2026-07-28T01:04:41Z
title: You are executing the owner-authorized controlled Autobank restart and resume test.
---

## feature prompt

You are executing the owner-authorized controlled Autobank restart and resume test.

Repository:
- Local checkout: C:\Projects\autobank
- GitHub repository: flipjam/autobank
- Expected branch: main

This is bounded setup/testing only.

Do not begin revenue work, activate a campaign, create accounts, submit work, publish, message third parties, purchase anything, accept terms, or mutate external data outside commits and pushes to flipjam/autobank.

Faster subscription-backed models are authorized for this bounded setup/testing task under Rule 7. Use one active model request at a time. REQ-20260727-002 remains a production-readiness gate and does not block this test.

Perform the entire test yourself. Do not ask the owner to run routine Git, validation, documentation, or checkpoint commands.

## Objective

Prove that a fresh Pi session can reconstruct Autobank’s current state entirely from the repository, identify the correct boundaries and pending production gate, safely resume setup/testing, and leave a truthful clean checkpoint.

## Required procedure

1. Change to C:\Projects\autobank.

2. Inspect before changing anything:
   - repository identity;
   - current branch and upstream;
   - remotes;
   - local HEAD;
   - origin/main HEAD;
   - working-tree status;
   - ahead/behind count.

3. Preserve unexpected local work.
   - Do not reset, clean, stash, rebase, force-push, restore, discard, or overwrite changes merely to obtain a clean tree.
   - If unexpected work exists and its intent cannot be determined safely, document the condition and continue only work that will not overwrite it.

4. Fetch and synchronize using fast-forward-only behavior. Do not rewrite history.

5. Read these files in order:
   1. AUTOBANK_POLICY.md
   2. CONTROL.json
   3. MISSION.md
   4. AUTHORIZED_RESOURCES.md
   5. AGENTS.md
   6. STATE.json
   7. OWNER_REQUESTS.md
   8. RUNBOOK.md
   9. SETUP_AUDIT_REPORT.md
   10. RESUME_TEST_PLAN.md
   11. DECISION_LOG.md
   12. EVIDENCE_INDEX.md
   13. WEB_ACCESS_CALIBRATION_LOG.md

6. Without relying on prior conversation context, determine and record:
   - current control state;
   - whether external actions are allowed;
   - whether a revenue campaign is active;
   - current setup/testing task;
   - current revenue stage;
   - verified revenue total;
   - open owner requests;
   - which requests block setup/testing;
   - which requests block only campaign production;
   - current model authorization during setup/testing;
   - production inference requirement;
   - temporary OpenAI web-search calibration limits;
   - the next safe operation.

7. Specifically reconcile durable-record consistency.
   - Verify whether STATE.json.open_owner_request_ids accurately reflects every request whose status is open.
   - Verify that current-status documentation distinguishes historical audit-time commit values from present repository state.
   - Verify that README.md, STATE.json, OWNER_REQUESTS.md, SETUP_AUDIT_REPORT.md, RESUME_TEST_PLAN.md, RUNBOOK.md, and DECISION_LOG.md agree on the current boundary.
   - Correct operator-maintained inconsistencies or stale current-status statements.
   - Do not substantively modify AUTOBANK_POLICY.md, CONTROL.json, MISSION.md, or AUTHORIZED_RESOURCES.md.
   - Put any required owner-controlled change into OWNER_REQUESTS.md instead.

8. Run:
   npm test
   npm run validate:strict

9. Create RESUME_TEST_REPORT.md containing:
   - overall PASS or FAIL;
   - fresh-session reconstruction result;
   - repository synchronization evidence;
   - reconstructed current state;
   - validation results;
   - discrepancies detected;
   - corrections made;
   - open requests and whether each is blocking now or later;
   - confirmation that no revenue or unauthorized external action occurred;
   - exact next recommended setup task.

10. Update RESUME_TEST_PLAN.md to indicate that this controlled test was executed, including its date, result, and report reference.

11. Update operator-maintained durable records as needed:
   - STATE.json
   - OWNER_REQUESTS.md
   - DECISION_LOG.md
   - EVIDENCE_INDEX.md
   - README.md
   - SETUP_AUDIT_REPORT.md
   - RUNBOOK.md

Only change files when needed for truthfulness, consistency, or durable evidence. Do not manufacture changes merely to create activity.

12. Rerun:
   npm test
   npm run validate:strict

13. Review the complete diff for:
   - credentials or secrets;
   - personal information;
   - authenticated state;
   - unsupported claims;
   - accidental authority changes;
   - stale status;
   - unrelated changes.

14. Commit and push every intended public-safe change to main.

15. Verify:
   - working tree is clean;
   - local main is not ahead or behind origin/main;
   - local and remote main resolve to the same final SHA;
   - the final commit is visible on flipjam/autobank.

## Pass criteria

The test passes only if:

- A fresh session reconstructed the correct setup boundary from repository files.
- CONTROL.json remains in setup with external actions disabled.
- No campaign or revenue work occurred.
- REQ-20260727-002 is correctly understood as non-blocking for setup/testing and blocking for production activation.
- All open-request records are internally consistent.
- npm test passes.
- npm run validate:strict passes.
- RESUME_TEST_REPORT.md exists.
- All intended changes are committed and pushed.
- The final working tree is clean.
- Local and remote main match.

At completion report:

- PASS or FAIL;
- final commit SHA;
- validation results;
- reconstructed current boundary;
- discrepancies corrected;
- open request IDs;
- the single next setup action.

Do not stop for an optional issue while safe setup work remains.

## clarifications

Q1: Should the first implementation task be a dedicated durable-record reconciliation pass (including STATE.json.open_owner_request_ids and boundary wording consistency) before running npm test/run validate:strict? This decides whether we split the work into a preflight state-accuracy task plus verification, or run validation first and do cleanup afterward.
A1: yes—perform a dedicated preflight durable-record reconciliation pass first (STATE.json.open_owner_request_ids plus boundary wording consistency), then run npm test and npm run validate:strict. (auto-resolved — already settled by the spec)

## tasks

- [x] TASK_0001  Change to `C:\Projects\autobank` and run this only as bounded setup/testing work.
- [x] TASK_0002  Use the authorized faster subscription-backed model for this bounded test.
- [x] TASK_0003  Use one active model request at a time.
- [ ] Perform the entire test yourself and do not ask the owner to run routine Git, validation, documentation, or checkpoint commands.
- [ ] Prohibit campaign/revenue/external side effects beyond commits and pushes to flipjam/autobank.
- [ ] Inspect before changing anything: repository identity, current branch/upstream, remotes, local HEAD, origin/main HEAD, working-tree status, and ahead/behind count.
- [ ] Preserve unexpected local work; do not reset/clean/stash/rebase/force-push/restore/discard/overwrite just to get a clean tree.
- [ ] Fetch and synchronize using fast-forward-only behavior without rewriting history.
- [ ] Read files in exact order: `AUTOBANK_POLICY.md`, `CONTROL.json`, `MISSION.md`, `AUTHORIZED_RESOURCES.md`, `AGENTS.md`, `STATE.json`, `OWNER_REQUESTS.md`, `RUNBOOK.md`, `SETUP_AUDIT_REPORT.md`, `RESUME_TEST_PLAN.md`, `DECISION_LOG.md`, `EVIDENCE_INDEX.md`, `WEB_ACCESS_CALIBRATION_LOG.md`.
- [ ] Reconstruct current state from repository files and record control state, action permissions, setup task, revenue stage, verified revenue total, open requests, production gate status, model authorization, and web-search limits.
- [ ] Perform a dedicated preflight durable-record reconciliation pass before running tests. | decisions (explicit user choices — these OVERRIDE the spec doc wherever they conflict; follow them exactly): "yes—perform a dedicated preflight durable-record reconciliation pass first (STATE.json.open_owner_request_ids and boundary wording consistency), then run npm test and npm run validate:strict. (auto-resolved — already settled by the spec)"
- [ ] Verify `STATE.json.open_owner_request_ids` exactly matches all requests with open status.
- [ ] Verify current-status documentation distinguishes historical audit-time commit values from present repository state.
- [ ] Verify `README.md`, `STATE.json`, `OWNER_REQUESTS.md`, `SETUP_AUDIT_REPORT.md`, `RESUME_TEST_PLAN.md`, `RUNBOOK.md`, and `DECISION_LOG.md` agree on current boundary and correct stale wording.
- [ ] Correct operator-maintained inconsistencies or stale current-status statements.
- [ ] Do not substantively modify `AUTOBANK_POLICY.md`, `CONTROL.json`, `MISSION.md`, or `AUTHORIZED_RESOURCES.md`.
- [ ] Put required owner-controlled changes into `OWNER_REQUESTS.md` rather than policy/control files.
- [ ] Classify open requests by whether they block setup/testing or only block campaign production, and verify `REQ-20260727-002` is non-blocking for setup/testing but blocking for production activation.
- [ ] Run `npm test` and `npm run validate:strict` (initial verification run). | decisions (explicit user choices — these OVERRIDE the spec doc wherever they conflict; follow them exactly): "yes—perform a dedicated preflight durable-record reconciliation pass first (STATE.json.open_owner_request_ids and boundary wording consistency), then run npm test and npm run validate:strict. (auto-resolved — already settled by the spec)"
- [ ] Create `RESUME_TEST_REPORT.md` including PASS/FAIL, reconstruction result, synchronization evidence, validation results, discrepancies, corrections, request blocking status, no unauthorized actions, and exact next setup task.
- [ ] Update `RESUME_TEST_PLAN.md` with test date, result, and report reference.
- [ ] Update durable operator records (`STATE.json`, `OWNER_REQUESTS.md`, `DECISION_LOG.md`, `EVIDENCE_INDEX.md`, `README.md`, `SETUP_AUDIT_REPORT.md`, `RUNBOOK.md`) only where needed for truthful consistency.
- [ ] Re-run `npm test` and `npm run validate:strict` after all corrections.
- [ ] Review the complete diff for credentials/secrets, personal information, authenticated state, unsupported claims, authority changes, stale status, and unrelated edits; also confirm no revenue work happened.
- [ ] Confirm `CONTROL.json` remains in setup with external actions disabled.
- [ ] Confirm no campaign or revenue work occurred during the run.
- [ ] Commit and push every intended public-safe change to `main` on flipjam/autobank.
- [ ] Verify final checkpoint: clean working tree, no ahead/behind divergence, identical local/remote `main` SHA, and final commit visibility on `flipjam/autobank`.
- [ ] Validate all pass criteria and report PASS/FAIL, final SHA, validation outcomes, reconstructed boundary, discrepancies corrected, open request IDs, and the next setup action.

## coverage

40 grounded requirement(s): 39 task-mapped, 1 cross-cutting (carried into every task via .pi-tasks/requirements.md), 0 unowned
- carried: "Prove that a fresh Pi session can reconstruct Autobank’s current state entirely from the repository, identify the correct boundaries and pending production gate, safely resume setup/testing, and leave a truthful clean checkpoint."
