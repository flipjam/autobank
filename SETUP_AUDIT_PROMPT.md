# First Pi `/task-auto` Prompt — Bounded Setup Audit

Use this only while `CONTROL.json` remains in `setup`. This is a framework and runtime audit, not a revenue campaign.

Paste the text below into Pi using `/task-auto` from `C:\Projects\autobank`.

---

You are operating in the `flipjam/autobank` repository at `C:\Projects\autobank`.

This is a **bounded setup audit only**. It is not authorization to start earning money, select a live revenue experiment, create accounts, authenticate to new services, publish, submit, message, purchase, accept terms, or mutate external data outside the Autobank repository.

## Governing authority

Read and obey, in this order:

1. `AUTOBANK_POLICY.md`
2. `CONTROL.json`
3. `MISSION.md`
4. `AUTHORIZED_RESOURCES.md`
5. `AGENTS.md`
6. `STATE.json`
7. `OWNER_REQUESTS.md`
8. `RUNBOOK.md`

Treat `AUTOBANK_POLICY.md`, `CONTROL.json`, `MISSION.md`, and `AUTHORIZED_RESOURCES.md` as owner-controlled. Do not modify them. When a change appears necessary, create a structured request in `OWNER_REQUESTS.md` instead.

The repository is public. Never expose or commit credentials, tokens, cookies, authenticated session state, private account details, personal data, secret configuration values, or unredacted private evidence.

## Objective

Prove, with evidence, whether this machine and repository are ready to run a later bounded autonomous revenue campaign using Pi and the approved local inference box. Repair safe, local, non-governing setup defects when possible. Preserve durable state, commit and push meaningful checkpoints, and continue around owner-only blockers.

Do not perform any revenue work or external mutation except commits and pushes to the authorized `flipjam/autobank` repository.

## Required work

### 1. Establish repository truth

Verify rather than assume:

- Working directory and repository identity
- Remote URL and default branch
- Current branch and HEAD
- Working-tree cleanliness before changes
- Ability to fetch from the authorized remote
- No tracked secret/session/private-evidence paths

Do not inspect unrelated repositories or files.

### 2. Run deterministic validation

Run:

```powershell
npm test
npm run validate:strict
```

If a validator or self-test defect exists, diagnose and repair it without weakening any approved invariant. Add or improve tests when needed. Do not change policy or authorization to make a test pass.

If validation fails because owner-controlled documents conflict or require a policy decision, create an owner request and continue other safe work.

### 3. Inventory the approved runtime

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

Identify duplicate or conflicting extension commands when practical. Do not install, remove, upgrade, or reconfigure packages during this audit unless a purely local non-privileged repair is clearly required and already authorized. Otherwise create an owner request.

### 4. Verify the inference boundary

Determine, without exposing secrets:

- Which model/provider Pi is currently using
- That routine inference is reaching the approved local inference box
- That only one model request is active at a time
- Whether any automatic fallback could use OpenAI, Codex, Anthropic, Gemini, or another paid or metered provider

Do not make paid test calls. Redact endpoints if they contain sensitive information. If the zero-cost boundary cannot be proven, mark it failed or uncertain and create an owner request with exact remediation.

### 5. Verify `pi-web-access` safely

Inspect its effective provider/configuration before issuing a search. Determine whether the configured search path is free, self-hosted, subscription-backed, paid, metered, or uncertain and whether silent fallback exists.

Only after a non-metered path is proven may you perform one harmless read-only search and one page retrieval as a smoke test. Do not use OpenAI, Codex, or another metered provider. If cost status is uncertain, do not search; create an owner request and continue.

Record provider name, test result, and redacted evidence without recording API keys or secret values.

### 6. Verify Agent Browser read-only operation

Using only the native Agent Browser integration:

- Report its version
- Open `https://example.com` in a fresh unauthenticated session
- Take an interactive snapshot
- Record the page title and main visible sentence
- Close the browser session

Do not log in, submit forms, download files, create an account, or change external data.

### 7. Verify monitoring and remote visibility

Confirm that the statusline and Tailscale remote extension are available and identify the safe command or workflow the owner should use to monitor or interrupt Pi. Do not open public inbound access, weaken network protections, or expose tokens.

### 8. Verify durable checkpoint and push behavior

Create `SETUP_AUDIT_REPORT.md` containing:

- Executive result: READY, READY WITH BLOCKERS, or NOT READY
- Scope and constraints
- Exact checks performed
- Pass/fail/uncertain table
- Public-safe versions and configuration summary
- Evidence and command results
- Defects found and repairs made
- Open owner requests
- Remaining risks
- Exact recommended next step

Update only operator-maintained records as needed, including `STATE.json`, `OWNER_REQUESTS.md`, `DECISION_LOG.md`, and `EVIDENCE_INDEX.md`.

Run validation again, commit all public-safe changes with a clear message, and push to `main`. Verify that local and remote HEAD match. The report commit and successful remote verification are the evidence for repository write capability.

### 9. Prepare, but do not run, the resume test

Create `RESUME_TEST_PLAN.md` describing a short controlled test in which the owner will later stop/restart Pi and ask it to reconstruct state from the repository. Include exact pass/fail criteria. Do not intentionally crash processes or change `CONTROL.json` during this audit.

## Blocker behavior

When owner action is required, add a complete `REQ-...` entry to `OWNER_REQUESTS.md`, update `STATE.json`, and continue unrelated productive work. Do not wait on an optional blocker when safe work remains.

Never request secrets through Git or chat. Specify the exact owner-side action instead.

## Completion criteria

The task is complete only when:

- `npm test` passes
- `npm run validate:strict` passes
- The local inference and paid-fallback boundary has an evidence-based result
- `pi-web-access` cost/fallback status has an evidence-based result, even if the result is blocked or uncertain
- Agent Browser read-only smoke test has a result
- Remote/status visibility has a result
- `SETUP_AUDIT_REPORT.md` and `RESUME_TEST_PLAN.md` exist
- Durable records are updated truthfully
- A public-safe checkpoint is committed and pushed
- Local and remote HEAD are verified equal

Do not activate a campaign, edit owner-controlled authority, start revenue work, or claim that Autobank is ready when a required check failed or remains materially uncertain.

At the end, give the owner a concise summary of the overall result, commit SHA, open request IDs, and the single next action needed.

---
