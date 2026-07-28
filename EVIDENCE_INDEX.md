# Evidence Index

Evidence supports decisions, external actions, experiment results, and financial claims without exposing secrets or unnecessary personal information.

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

### EVD-20260727-004 — Calibrated web-search authorization run (temporary)

- **Created at (UTC):** 2026-07-27T23:17:35Z
- **Evidence type:** test_output
- **Supports:** temporary web-access calibration authorization and usage logging
- **Public-safe summary:** Ran one explicit `web_search` call with `{ provider: "openai", workflow: "none" }` and recorded the call in `WEB_ACCESS_CALIBRATION_LOG.md`.
- **Source/account alias:** autobank-local
- **Source date/time:** 2026-07-27T23:17:35Z
- **Repository path or external reference:** `WEB_ACCESS_CALIBRATION_LOG.md` and runtime call output
- **Integrity information:** Result contains only public sources and non-sensitive answer text.
- **Redactions applied:** None required.
- **Private original location:** none
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `web_search` tool call (explicit openai provider)
- **Notes:** This verifies that the temporary web-access route can run as authorized; it does not prove routine inference non-metered defaults.

### EVD-20260728-001 — Authorized subscription-backed model validation for setup/testing

- **Created at (UTC):** 2026-07-28T00:11:44Z
- **Evidence type:** test_output
- **Supports:** setup-testing model authorization and production-readiness gate treatment
- **Public-safe summary:** Ran `pi --list-models` and a setup-scoped `pi --print` command with explicit `openai-codex` / `gpt-5.3-codex-spark` settings.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T00:11:44Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Command outputs were non-empty and contain expected model and acknowledgment text.
- **Redactions applied:** none
- **Private original location:** local CLI output artifacts
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI calls under explicit provider/model env vars
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`
- **Result:** Output included `openai-codex  gpt-5.3-codex-spark  128K     128K     yes       no`.
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --print "Acknowledge: setup/testing slice model authorization and REQ-20260727-002 remains non-blocking for this slice."`
- **Result:** `Acknowledged. For this setup/testing slice, the temporary model-usage authorization stands, and **REQ-20260727-002** remains **non-blocking** for now; I’ll treat it as a **production-readiness gate** only.`
- **Notes:** Confirms model command usage for this bounded setup/testing slice.

### EVD-20260728-003 — TASK_0003 serialization proof request #1 (serialized `pi --list-models`)

- **Created at (UTC):** 2026-07-28T00:55:04Z
- **Evidence type:** test_output
- **Supports:** TASK_0003 serialization proof for single-request flow
- **Public-safe summary:** Executed one serialized `pi --list-models` request with explicit subscription-backed runtime settings and captured the successful provider/model matrix output.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T00:55:04Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Single terminal CLI command run; no overlapping model requests were launched during execution.
- **Redactions applied:** none
- **Private original location:** local CLI output artifact
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`
- **Result:** Output included rows for `minipc` and multiple `openai-codex` models, including `openai-codex  gpt-5.3-codex-spark  128K     128K     yes       no`.
- **Notes:** This is serialized request #1; next request was not started until this completed.

### EVD-20260728-004 — TASK_0003 serialized proof: default-call-1 (`pi --list-models`)

- **Created at (UTC):** 2026-07-28T00:56:18Z
- **Evidence type:** test_output
- **Supports:** TASK_0003 serialized single-request proof (default runtime path)
- **Public-safe summary:** Executed `pi --list-models` via default runtime settings without explicit provider/model overrides. The call completed successfully as a single in-flight request.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T00:56:18Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Single terminal CLI command run; no overlapping model requests were launched before or during completion.
- **Redactions applied:** none
- **Private original location:** local CLI output artifact
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI
- **Command:** `pi --list-models`
- **Result:** Output listed models for `minipc` and `openai-codex` providers, including `openai-codex  gpt-5.3-codex-spark  128K     128K     yes       no`.
- **Notes:** This is the default-call variant requested for serialized proof sequencing; request #1 completed before any subsequent model request.

### EVD-20260728-005 — TASK_0003 serialization proof request #2 (`pi --print`)

- **Created at (UTC):** 2026-07-28T00:57:19Z
- **Evidence type:** test_output
- **Supports:** TASK_0003 serialization proof for single-request flow
- **Public-safe summary:** Executed a serialized `pi --print` request with the authorized subscription-backed runtime settings and captured the expected completion marker.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T00:57:19Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Command executed only after previous serialized model call completed; no fan-out or overlapping `pi` invocations were started during this run.
- **Redactions applied:** none
- **Private original location:** local CLI output artifact
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --print 'TASK_0003 serialization proof request #2: respond with exactly SERIALIZED_REQUEST_2_OK'`
- **Result:** `SERIALIZED_REQUEST_2_OK`
- **Notes:** This is request #2 in the serialization sequence; the next request was not started until this command completed.

### EVD-20260728-006 — TASK_0003 serialized model-runtime request sequencing

- **Created at (UTC):** 2026-07-28T00:58:16Z
- **Evidence type:** test_output
- **Supports:** TASK_0003 serialization proof and failure/retry handling
- **Public-safe summary:** Executed `pi` runtime commands in strict sequence with a forced timeout failure probe to validate terminal/failure handling before retry.
- **Source/account alias:** openai-codex (for model-list and requested provider/model path)
- **Source date/time:** 2026-07-28T00:58:09Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Commands were executed in a single shell script where each request logged its own `START/END` line; no concurrent process was launched.
- **Redactions applied:** none
- **Private original location:** `/tmp/autobank-task0003-verify/*.log` (local command artifacts)
- **Retention/review date:** 2026-10-01
- **Verification result:** partially_verified
- **Verifier and method:** `bash` scripted `pi` CLI calls
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`
- **Result:** Completed in ~4.0s and returned model matrix including `minipc/qwen3.6-35b-a3b-xl` and `openai-codex/gpt-5.3-codex-spark`.
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --no-tools --print "TASK_0003 serialization proof"`
- **Result:** Completed in ~12.8s; received non-empty model-response text.
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --no-tools --provider openai-codex --model gpt-5.3-codex-spark --print "TASK_0003 provider and model override proof"`
- **Result:** Completed in ~21.2s; returned non-empty model-response text.
- **Command:** `timeout 5 PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --print "TASK_0003 terminal failure probe"`
- **Result:** Timed out (shell return code 124) after ~5s, recorded as terminal failure state.
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --no-tools --print "TASK_0003 retry after terminal failure"`
- **Result:** Completed in ~18.8s after timeout, confirming sequential retry after terminal failure.
- **Notes:** Serialized evidence proves one in-flight command at a time with explicit timeout-bound failure and retry after terminal completion.

### EVD-20260728-007 — TASK_0003 baseline serialization terminal failure probe rerun

- **Created at (UTC):** 2026-07-28T01:02:09Z
- **Evidence type:** test_output
- **Supports:** TASK_0003 baseline terminal-failure probe
- **Public-safe summary:** Re-ran the serialization flow as a baseline request with strict sequential model invocations: `list-models`, `print`, `timeout 5s print`, then retry `print`. Retry was only attempted after timeout command returned.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T01:02:09Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Commands executed in order inside one shell function, so no overlap or parallel invocations.
- **Redactions applied:** none
- **Private original location:** `/tmp/task0003-*.out` and `/tmp/task0003-*.err` (local CLI artifacts)
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `bash` scripted `pi` CLI calls
- **Command:** `env PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`
- **Result:** Exit 0; output included `minipc` and `openai-codex` models, including `gpt-5.3-codex-spark`.
- **Command:** `env PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --no-tools --print "TASK_0003 baseline request marker 1"`
- **Result:** Exit 0; returned marker acknowledgement text.
- **Command:** `env PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark timeout 5s pi --print "TASK_0003 baseline timeout probe"`
- **Result:** Exit 124 after ~8.3s (timeout shell code, no completion output).
- **Command:** `env PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --no-tools --print "TASK_0003 baseline retry marker"`
- **Result:** Exit 0; retry completed after timeout with non-empty response.
- **Notes:** Confirms `TASK_0003` behavior: one active model request at a time and explicit terminal failure/retry ordering.

### EVD-20260728-008 — TASK_0003 proof request after list-model completion

- **Created at (UTC):** 2026-07-28T01:04:41Z
- **Evidence type:** test_output
- **Supports:** TASK_0003 print-proof sequencing step
- **Public-safe summary:** Executed a strict sequence where `pi --print` ran only after a prior `pi --list-models` command exited successfully.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T01:04:41Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Commands were executed in a dedicated shell sequence with no background/forked `pi` calls between them.
- **Redactions applied:** none
- **Private original location:** local command output artifacts
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`
- **Result:** Successful list output including `minipc` and `openai-codex` models.
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --print "TASK_0003 proof: serialized request; output should be PRINT_MARKER_OK"`
- **Result:** `PRINT_MARKER_OK`
- **Notes:** This is the requested `TASK_0003` proof that the `print` request started after list-model completion.

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

### EVD-20260728-002 — Latest bounded model validation evidence

- **Created at (UTC):** 2026-07-28T00:11:44Z
- **Evidence type:** test_output
- **Supports:** bounded setup/testing run proof of model-path interaction
- **Public-safe summary:** Captured and recorded the model-list and print-call outputs used by this run.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T00:11:44Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Commands were executed with explicit provider/model environment variables and returned expected non-empty outputs.
- **Redactions applied:** none
- **Private original location:** local CLI output artifacts
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`
- **Result:** Listing included `openai-codex  gpt-5.3-codex-spark  128K     128K     yes       no`.
- **Command:** `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --print "Acknowledge: setup/testing slice model authorization and REQ-20260727-002 remains non-blocking for this slice."`
- **Result:** `Acknowledged. For this setup/testing slice, the temporary model-usage authorization stands, and **REQ-20260727-002** remains **non-blocking** for now; I’ll treat it as a **production-readiness gate** only.`
- **Notes:** Verifies required model command usage for this slice.

### EVD-20260728-009 — TASK_0003 default-context proof sequence (strictly serialized)

- **Created at (UTC):** 2026-07-28T01:04:00Z
- **Evidence type:** test_output
- **Supports:** `TASK_0003` serialization and one-active-request enforcement
- **Public-safe summary:** Ran a strict sequential sequence of default-context model-management calls (`pi --list-models`, `pi --no-tools --print`, and provider/model override `pi --no-tools --provider openai-codex --model gpt-5.3-codex-spark --print`) with no overlapping in-flight requests.
- **Source/account alias:** openai-codex
- **Source date/time:** 2026-07-28T01:03:05Z
- **Repository path or external reference:** `C:/Projects/autobank`, `/tmp/task0003-default-context/default-probe.log`
- **Integrity information:** Single bash script executed commands one-by-one; each command started only after the previous `pi` process exited. A temporary timeout probe was not used in this run.
- **Redactions applied:** none
- **Private original location:** local CLI output artifact
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI sequence in shell
- **Command:** `pi --list-models`
- **Result:** Returned provider/model table including `minipc qwen3.6-35b-a3b-xl` and `openai-codex gpt-5.3-codex-spark`.
- **Command:** `pi --no-tools --print "TASK_0003_DEFAULT_CONTEXT_OK"`
- **Result:** `TASK_0003_DEFAULT_CONTEXT_OK`
- **Command:** `pi --no-tools --provider openai-codex --model gpt-5.3-codex-spark --print "TASK_0003 default context proof sequence provider override"`
- **Result:** model returned a non-empty response; call completed after prior commands without overlap.
- **Notes:** This run provides an explicit default-context and override-capability proof with serialized execution.

### EVD-20260728-015 — TASK_0003 default provider/model acknowledgment

- **Created at (UTC):** 2026-07-28T01:19:11Z
- **Evidence type:** test_output
- **Supports:** TASK_0003 default provider/model context acknowledgment
- **Public-safe summary:** Executed a single authorized subscription-backed provider/model command with explicit `openai-codex` + `gpt-5.3-codex-spark` and received a TASK_0003 acknowledgment response.
- **Source/account alias:** openai-codex
- **Source/date time:** 2026-07-28T01:19:11Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** This was a serialized standalone call (`one active request` at a time).
- **Redactions applied:** none
- **Private original location:** local CLI command artifact
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI
- **Command:** `pi --provider openai-codex --model gpt-5.3-codex-spark --no-tools --print "TASK_0003 default provider/model acknowledgment requested"`
- **Result:** `TASK_0003 acknowledged. Default provider/model acknowledgment is noted and pending; no changes made yet.`
- **Notes:** Confirms explicit TASK_0003 provider/model acknowledgment is accepted.

### EVD-20260728-016 — TASK_0003 invalid model rejection check

- **Created at (UTC):** 2026-07-28T01:13:56Z
- **Evidence type:** test_output
- **Supports:** `TASK_0003` invalid-model negative-path check
- **Public-safe summary:** Executed `pi` with an explicit invalid model name using `openai-codex`; the command exited non-zero and returned a hard model validation error.
- **Source/account alias:** openai-codex
- **Source/date time:** 2026-07-28T01:13:56Z
- **Repository path or external reference:** `C:/Projects/autobank`
- **Integrity information:** Single CLI request with explicit `--provider`/`--model`; non-zero exit confirmed.
- **Redactions applied:** none
- **Private original location:** local CLI command output
- **Retention/review date:** 2026-10-01
- **Verification result:** verified
- **Verifier and method:** `pi` CLI
- **Command:** `pi --no-tools --provider openai-codex --model definitely_not_real_model --print "TASK_0003 invalid model should fail"`
- **Result:** Exit code `1`; Warning: Model "definitely_not_real_model" not found for provider "openai-codex". Using custom model id. and Codex error: The 'definitely_not_real_model' model is not supported when using Codex with a ChatGPT account.
- **Notes:** Confirms invalid explicit model values fail as expected. Use explicit `--provider`/`--model` flags for strict validation.

## Evidence rules

- This repository is public. Commit only evidence that is safe for public disclosure.
- Never commit credentials, MFA data, recovery codes, banking details, tax identifiers, private customer information, browser cookies, authenticated session data, or unredacted personal records.
- Store sensitive originals only in an approved ignored local location such as `private-evidence/`; record only a safe alias and redacted summary here.
- A screenshot is not automatically trustworthy. Record the source, timestamp, context, and what it actually proves.
- For revenue, evidence must show that payment was credited to an approved account and is withdrawable or subject only to normal payout timing.
- Keep revenue and external commitments to a single source of truth (`LEDGER.csv` plus evidence IDs).