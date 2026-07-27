# Evidence Index

Evidence supports decisions, external actions, experiment results, financial claims, and financial claims without exposing secrets or unnecessary personal information.

## Evidence records

### EVD-20260727-001 — Repository sync and validation checks completed

- **Created at (UTC):** 2026-07-27T19:58:00Z
- **Evidence type:** test_output
- **Supports:** setup-audit pass/fail matrix, repository synchronization
- **Public-safe summary:** Ran `git status`, remote/branch checks, `npm test`, and `npm run validate:strict`; all completed successfully with clean working tree and local/remote `main` aligned.
- **Source/account alias:** autobank-local
- **Source date/time:** 2026-07-27T19:58:00Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Command outputs in session records; files unchanged during validation except generated report artifacts (this audit run).
- **Redactions applied:** None required (no secrets or sensitive paths).
- **Private original location:** none
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** deterministic command outputs (`git`, `npm`)
- **Notes:** This entry covers checkout identity and deterministic test evidence.

### EVD-20260727-002 — Local inference smoke test on local endpoint

- **Created at (UTC):** 2026-07-27T20:03:00Z
- **Evidence type:** test_output
- **Supports:** inference-boundary verification
- **Public-safe summary:** Invoked Pi with explicit local provider (`pi --provider minipc --model qwen3.6-35b-a3b-xl --print "Reply with exactly: INFERENCE_LOCAL_OK"`) and received exact expected output `INFERENCE_LOCAL_OK`.
- **Source/account alias:** local
- **Source date/time:** 2026-07-27T20:03:00Z
- **Repository path or external reference:** `C:/Users/Administrator/AppData/Local/pi-node/current/pi`
- **Integrity information:** Deterministic local command output.
- **Redactions applied:** None required.
- **Private original location:** none
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** local CLI test
- **Notes:** This confirms local model path is reachable, but does not yet prove the default unattended provider chain.

### EVD-20260727-003 — Agent Browser read-only smoke test

- **Created at (UTC):** 2026-07-27T20:05:00Z
- **Evidence type:** test_output
- **Supports:** agent-browser availability and safe read-only smoke testing
- **Public-safe summary:** Opened `https://example.com` in fresh Agent Browser session and captured snapshot: title `Example Domain`, main refs `heading "Example Domain"` and `link "Learn more"`.
- **Source/account alias:** local
- **Source date/time:** 2026-07-27T20:05:00Z
- **Repository path or external reference:** `C:/Users/Administrator/.pi/config/pi-agent-browser-native/config.json`
- **Integrity information:** Command outputs from `agent_browser` tool session in this audit run.
- **Redactions applied:** None required.
- **Private original location:** none
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** native `agent_browser` tool, open+snapshot
- **Notes:** No form submission, login, or external mutation performed.


### EVD-YYYYMMDD-NNN — Template

- **Created at (UTC):**
- **Evidence type:** transaction | platform_record | screenshot | test_output | commit | email_reference | document | other
- **Supports:** experiment, action, decision, or ledger IDs
- **Public-safe summary:**
- **Source/account alias:**
- **Source date/time:**
- **Repository path or external reference:**
- **Integrity information:** commit SHA, file hash, transaction/reference ID, or equivalent
- **Redactions applied:**
- **Private original location:** local alias only; never credentials or sensitive path details
- **Retention/review date:**
- **Verification result:** verified | partially_verified | unverified | superseded
- **Verifier and method:**
- **Notes:**

## Evidence rules

- This repository is public. Commit only evidence that is safe for public disclosure.
- Never commit credentials, MFA data, recovery codes, banking details, tax identifiers, private customer information, browser cookies, authenticated session data, or unredacted personal records.
- Store sensitive originals only in an approved ignored local location such as `private-evidence/`; record only a safe alias and redacted summary here.
- A screenshot is not automatically trustworthy. Record the source, timestamp, context, and what it actually proves.
- For revenue, evidence must show that payment was credited to an approved account and is withdrawable or subject only to normal payout timing.
- Keep revenue and external commitments to a single source of truth (`LEDGER.csv` plus evidence IDs).
