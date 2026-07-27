# First Pi `/task-auto` Prompt — Self-Bootstrapping Setup Audit

Use this only while `CONTROL.json` remains in `setup`. This is a framework, documentation, and runtime audit—not a revenue campaign.

The prompt below is intentionally self-contained. The owner can start Pi from any PowerShell directory, invoke `/task-auto`, and paste the complete prompt. Pi must perform the repository synchronization, validation, documentation review, audit, checkpoint, and push itself.

---

You are operating the owner-authorized Autobank setup audit for the public GitHub repository `flipjam/autobank`, whose local checkout must be `C:\Projects\autobank`.

This is a **bounded setup, documentation, and runtime audit only**. It is not authorization to start earning money, select or activate a live revenue experiment, create accounts, authenticate to new services, publish, submit, message, purchase, accept terms, or mutate external data outside the Autobank repository.

Do not ask the owner to perform routine repository, validation, documentation, or audit steps that you can perform yourself. Continue independently until the completion criteria are met or only genuine owner-only blockers remain. When an owner-only blocker exists, record it precisely and continue unrelated safe work.

## 0. Safely establish and synchronize the checkout

Perform these steps yourself before relying on local repository contents:

1. Change to `C:\Projects\autobank`.
2. Verify that the directory exists and is a Git checkout for `flipjam/autobank`.
3. Inspect the current branch, upstream, HEAD, remotes, and working-tree status.
4. Never discard, overwrite, reset, clean, stash, rebase, force-push, or otherwise hide uncommitted work merely to obtain a clean tree.
5. If the tree is unexpectedly dirty, inspect the changes, preserve them, and determine whether they are legitimate Autobank work. Create an owner request if safe ownership or intent cannot be established. Continue only work that will not overwrite those changes.
6. Fetch the authorized remote and synchronize `main` using fast-forward-only behavior. Do not resolve divergence by rewriting history. A divergence or authentication failure is a blocker to pushing, not permission to reset or force.
7. Verify the local checkout now contains the latest remote `main` before proceeding.

Repository commits and pushes to `flipjam/autobank` are the only external mutations authorized by this audit.

## Governing authority

After synchronization, read and obey, in this order:

1. `AUTOBANK_POLICY.md`
2. `CONTROL.json`
3. `MISSION.md`
4. `AUTHORIZED_RESOURCES.md`
5. `AGENTS.md`
6. `STATE.json`
7. `OWNER_REQUESTS.md`
8. `RUNBOOK.md`
9. This setup-audit specification

Treat `AUTOBANK_POLICY.md`, `CONTROL.json`, `MISSION.md`, and `AUTHORIZED_RESOURCES.md` as owner-controlled. Do not change their policy, authority, permissions, milestone order, spending limit, run state, external-action switch, or resource boundaries. The owner's request to refresh documentation does not authorize substantive policy changes. When an owner-controlled change appears necessary, create a structured request in `OWNER_REQUESTS.md` instead.

The repository is public. Never expose or commit credentials, tokens, cookies, authenticated session state, private account details, personal data, secret configuration values, local inference secrets, or unredacted private evidence.

## Objective

Prove, with evidence, whether this machine and repository are ready for a later bounded autonomous revenue campaign using Pi and the approved local inference box. Repair safe, local, non-governing setup defects when possible. Audit and refresh all operator-maintained documentation so current status, tools, procedures, and next steps are accurate and mutually consistent. Preserve durable state, commit and push meaningful checkpoints, and continue around owner-only blockers.

Do not perform revenue work or any external mutation except commits and pushes to the authorized `flipjam/autobank` repository.

## Required work

### 1. Establish repository truth

Verify rather than assume:

- Working directory and repository identity
- Remote URL and default branch
- Current branch, upstream, and HEAD
- Working-tree cleanliness before and after changes
- Ability to fetch from and push to the authorized remote
- No tracked secret, session, download, browser-profile, or private-evidence paths
- Local and remote history are not being rewritten

Do not inspect unrelated repositories or files.

### 2. Run deterministic validation and self-tests

Run:

```powershell
npm test
npm run validate:strict
```

If a validator or self-test defect exists, diagnose and repair it without weakening any approved invariant. Add or improve tests when needed. Do not change policy or authorization merely to make a test pass.

After every material repair and before the final commit, rerun both commands. Record exact pass/fail results in the audit report.

If validation fails because owner-controlled documents conflict or require a policy decision, create an owner request and continue other safe work.

### 3. Perform a complete documentation-freshness audit

Review every tracked Markdown document plus `CONTROL.json`, `STATE.json`, `package.json`, `LEDGER.csv`, and the deterministic scripts that define documented behavior.

Verify and reconcile, without changing owner authority:

- Current project phase and `CONTROL.json` state
- The single current next operation
- Revenue totals and first-dollar status
- Repository name, local path, remote, and branch
- Installed/expected package names and command names
- Startup, synchronization, validation, checkpoint, recovery, resume, and emergency-stop instructions
- Which documents are owner-controlled versus operator-maintained
- Allowed and prohibited setup actions
- External-action and accounting protocols
- File names, cross-references, headings, templates, and command examples
- Any dates, versions, status statements, completed steps, or future-tense statements that have become stale
- Contradictions or duplication between `README.md`, `AGENTS.md`, `RUNBOOK.md`, `MISSION.md`, `AUTHORIZED_RESOURCES.md`, `STATE.json`, and this prompt

Update all operator-maintained documentation and records needed to make the repository current, internally consistent, and restartable. Correct harmless wording, broken references, stale status, obsolete commands, or missing operational details.

Do not silently revise an owner-controlled rule or authorization. For any owner-controlled document that appears substantively stale or contradictory, record the exact issue and proposed change in `OWNER_REQUESTS.md`; do not make the substantive change yourself.

Document the files reviewed, files changed, and reasons in `SETUP_AUDIT_REPORT.md`.

### 4. Inventory the approved runtime

Record public-safe versions and availability for:

- Pi
- Node.js and npm
- Git
- `agent-browser`
- `pi-agent-browser-native`
- `@ifi/pi-remote-tailscale`
- `@mjasnikovs/pi-task:dist`
- `@narumitw/pi-statusline:src`
- `pi-web-access`

Confirm that Pi Agent Browser is actually callable through Pi, not merely installed on `PATH`.

Identify duplicate or conflicting extension commands when practical. Do not install, remove, upgrade, or reconfigure packages during this audit unless a purely local, non-privileged repair is clearly required and already authorized. Otherwise create an owner request.

### 5. Verify the inference boundary

Determine, without exposing secrets:

- Which model and provider Pi is currently using
- That routine inference is reaching the approved local inference box
- That only one model request is active at a time
- Whether any automatic fallback could use OpenAI, Codex, Anthropic, Gemini, or another paid or metered provider
- Whether any supervisor, subagent, or retry loop could create overlapping model requests

Do not make paid test calls. Redact endpoints if they contain sensitive information. If the zero-cost boundary cannot be proven, mark it failed or uncertain and create an owner request with exact remediation.

### 6. Verify `pi-web-access` safely

Inspect its effective provider and configuration before issuing a search. Determine whether the configured search path is free, self-hosted, subscription-backed, paid, metered, or uncertain, and whether silent fallback exists.

Only after a non-metered path is proven may you perform one harmless read-only search and one page retrieval as a smoke test. Do not use OpenAI, Codex, or another metered provider. If cost status is uncertain, do not search; create an owner request and continue.

Record provider name, cost classification, fallback behavior, test result, and redacted evidence without recording API keys or secret values.

### 7. Verify Agent Browser read-only operation

Using only the native Agent Browser integration:

- Report its version
- Open `https://example.com` in a fresh unauthenticated session
- Take an interactive snapshot
- Record the page title and main visible sentence
- Close the browser session

Do not log in, submit forms, download files, create an account, or change external data.

### 8. Verify monitoring and remote visibility

Confirm that the statusline and Tailscale remote extension are available. Identify the exact safe command or workflow the owner should use to monitor, steer, pause, or interrupt Pi.

Do not open public inbound access, weaken network protections, expose tokens, or reconfigure Tailscale during this audit.

### 9. Verify durable checkpoint and push behavior

Create or fully refresh `SETUP_AUDIT_REPORT.md` containing:

- Executive result: `READY`, `READY WITH BLOCKERS`, or `NOT READY`
- Scope and constraints
- Repository synchronization result
- Exact checks performed
- Pass/fail/uncertain table
- Documentation-freshness audit and files changed
- Public-safe versions and configuration summary
- Evidence and command results
- Defects found and repairs made
- Open owner requests
- Remaining risks
- Exact recommended next step

Update only operator-maintained records as needed, including `STATE.json`, `OWNER_REQUESTS.md`, `DECISION_LOG.md`, and `EVIDENCE_INDEX.md`.

Run `npm test` and `npm run validate:strict` again. Review the complete diff for secrets, private data, unintended policy changes, inaccurate claims, stale documentation, and unrelated changes.

Commit every public-safe intended change with clear commit messages and push to `main`. Do not leave intended documentation, tests, reports, or operational records uncommitted. Verify that:

- The working tree is clean
- The local branch is not ahead or behind its upstream
- Local and remote `main` resolve to the same commit SHA
- The final commit is visible on the authorized remote

The final report commit and successful remote verification are the evidence for repository write capability.

### 10. Prepare, but do not run, the resume test

Create or fully refresh `RESUME_TEST_PLAN.md` describing a short controlled test in which the owner will later stop/restart Pi and ask it to reconstruct state from the repository. Include exact commands, state to preserve, duplicate-action safeguards, pass/fail criteria, and expected final records.

Do not intentionally crash processes, activate a revenue campaign, or change `CONTROL.json` during this audit.

## Blocker behavior

When owner action is genuinely required:

1. Add a complete, unique `REQ-...` entry to `OWNER_REQUESTS.md`.
2. Update `STATE.json` with the blocker and request ID.
3. Notify the owner through the approved remote interface when available.
4. Continue unrelated productive work.

Do not wait for the owner while safe work remains. Never request secrets through Git, chat, or the report. Specify the exact owner-side action instead.

## Completion criteria

The task is complete only when:

- The local checkout has been safely synchronized without history rewriting or lost work
- `npm test` passes
- `npm run validate:strict` passes
- All tracked documentation has been reviewed for freshness and operator-maintained stale content has been corrected
- Owner-controlled documents have not been substantively changed without explicit authorization
- The local inference and paid-fallback boundary has an evidence-based result
- `pi-web-access` cost/fallback status has an evidence-based result, even if blocked or uncertain
- Agent Browser read-only smoke testing has a result
- Remote/status visibility has a result
- `SETUP_AUDIT_REPORT.md` and `RESUME_TEST_PLAN.md` exist and are current
- Durable records are updated truthfully
- Every intended public-safe change is committed and pushed
- The working tree is clean
- Local and remote `main` are verified equal

Do not activate a campaign, edit owner authority, start revenue work, or claim Autobank is ready when a required check failed or remains materially uncertain.

At the end, give the owner a concise summary containing:

- Overall result
- Final commit SHA
- Validation results
- Documentation files changed
- Open owner request IDs
- Any material blocker
- The single next owner action needed

---
