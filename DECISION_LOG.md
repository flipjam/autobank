# Decision Log

This log preserves consequential operational decisions and their evidence. Routine implementation details do not need entries unless they affect authority, cost, risk, strategy, customer obligations, or recovery.

## Decisions

### DEC-20260727-001 — Pi performs its own setup-audit preparation

- **Status:** adopted
- **Decided at (UTC):** 2026-07-27
- **Decision maker:** owner
- **Experiment/campaign:** setup only; no active revenue campaign
- **Question:** Should the owner manually pull, validate, and prepare the Autobank checkout before launching the first Pi `/task-auto` audit?
- **Context and evidence:** The repository already contains deterministic validation, durable records, a bounded setup-audit specification, and explicit rules requiring Pi to continue around noncritical blockers. The owner requested that Pi perform the routine setup work itself and that all documentation be refreshed, committed, and pushed.
- **Options considered:** Owner performs preparation manually; Pi performs the complete bounded synchronization, validation, documentation, audit, checkpoint, and push workflow itself.
- **Decision:** Pi will perform the complete bounded setup workflow through the self-bootstrapping prompt in `SETUP_AUDIT_PROMPT.md`. The owner should only be interrupted for genuine owner-only blockers.
- **Rationale:** This directly tests the intended autonomous operating model, reduces unnecessary human steps, and verifies that durable instructions are sufficient for recovery and long-running work.
- **Policy and authorization basis:** Rules 2, 7, 10, and 13; `CONTROL.json` remains in `setup`, with commits and pushes limited to `flipjam/autobank` and all other external mutations disabled.
- **Expected benefit:** A stronger readiness test, lower setup friction, and clearer evidence that Pi can safely bootstrap and preserve its own operational state.
- **Risks and mitigations:** Pi could overwrite local work or overreach during synchronization; the prompt prohibits reset, clean, rebase, force-push, lost work, revenue activity, and external mutation outside the authorized repository.
- **Reversible:** yes
- **Review trigger or date:** Review after `SETUP_AUDIT_REPORT.md` and `RESUME_TEST_PLAN.md` are completed and pushed.
- **Owner approval required:** yes
- **Owner approval reference:** Explicit owner instruction in the Autobank setup conversation on 2026-07-27.
- **Outcome and later evidence:** Completed by this run of the setup-audit audit workflow; report and plan generated and committed.
- **Superseded by:**

### DEC-20260727-002 — Setup audit complete but non-metered boundary remains unresolved

- **Status:** adopted
- **Decided at (UTC):** 2026-07-27T20:12:00Z
- **Decision maker:** Pi
- **Experiment/campaign:** setup only; no active revenue campaign
- **Question:** Can setup be declared fully READY without confirmed non-metered routine inference and web-access boundaries?
- **Context and evidence:** `npm test` and strict validation passed, checkout was synchronized and clean, repository and remote state match, and `agent_browser` smoke test succeeded. However, `PI_PROVIDER` default is `openai-codex`, and `pi-web-access` auto provider chain includes paid/subscription-backed options without explicit routing lock.
- **Options considered:** Declare READY despite uncertainty, or create a blocker requiring owner confirmation/reconfiguration of non-metered defaults.
- **Decision:** Keep audit result at `READY WITH BLOCKERS` and create `REQ-20260727-001` so routine unattended work cannot proceed until the owner confirms or configures explicit non-metered defaults.
- **Rationale:** Prevents silent paid/unknown-cost fallback and preserves the zero-cost setup contract while remaining safe and truthful.
- **Policy and authorization basis:** `AUTOBANK_POLICY.md`, `CONTROL.json`, and `RUNBOOK.md` constraints on spending and safe operation.
- **Expected benefit:** Preserves safety and budget while giving owner an explicit action path.
- **Risks and mitigations:** Operational startup remains blocked until confirmation; risk is low and documented.
- **Reversible:** yes
- **Review trigger or date:** immediate after `REQ-20260727-001` is resolved.
- **Owner approval required:** yes
- **Owner approval reference:** none yet (request created)
- **Outcome and later evidence:** `SETUP_AUDIT_REPORT.md` and `RESUME_TEST_PLAN.md` will reference this blocker.
- **Superseded by:**

### DEC-20260727-003 — Temporary owner-authorized web search calibration for setup

- **Status:** adopted
- **Decided at (UTC):** 2026-07-27T23:17:35Z
- **Decision maker:** owner
- **Experiment/campaign:** setup only; no active revenue campaign
- **Question:** Can a bounded temporary web-search calibration run under explicit constraints while routine inference lock remains unresolved?
- **Context and evidence:** Owner approved a temporary web-access calibration permitting only explicit `openai` provider and `workflow: "none"`, Codex-authenticated usage, no fallback providers, and a cap of 25 successful web-search calls.
- **Options considered:** Hold all web research until routine inference lock is verified; or permit bounded calibration with explicit limits and logging.
- **Decision:** Accept bounded web-access calibration and proceed with a usage log under strict constraints while keeping the inference-blocker request open.
- **Rationale:** Maintains safe bounded progress and provides objective usage evidence for the owner without violating the routine non-metered default requirement.
- **Policy and authorization basis:** `AUTOBANK_POLICY.md` and explicit owner temporary authorization.
- **Expected benefit:** Controlled calibration of web research with auditable call history and reduced ambiguity about temporary auth path.
- **Risks and mitigations:** Drift into additional/parallel searches. Mitigated by one-search-at-a-time rule, explicit provider/workflow, and hard cap on successful calls.
- **Reversible:** yes
- **Review trigger or date:** after inference lock is verified and web-search calibration cap is reached or stopped.
- **Owner approval required:** yes
- **Owner approval reference:** temporary calibration decision.
- **Outcome and later evidence:** `OWNER_REQUESTS.md` updated (web-access temp authorization recorded), `WEB_ACCESS_CALIBRATION_LOG.md`, and `EVD-20260727-004`.
- **Superseded by:**

### DEC-YYYYMMDD-NNN — Short title

- **Status:** proposed | adopted | rejected | superseded
- **Decided at (UTC):**
- **Decision maker:** owner | Pi within delegated authority
- **Experiment/campaign:**
- **Question:**
- **Context and evidence:**
- **Options considered:**
- **Decision:**
- **Rationale:**
- **Policy and authorization basis:**
- **Expected benefit:**
- **Risks and mitigations:**
- **Reversible:** yes | no | partially
- **Review trigger or date:**
- **Owner approval required:** yes | no
- **Owner approval reference:**
- **Outcome and later evidence:**
- **Superseded by:**

## Decision rules

- Pi may make tactical choices only inside the current campaign, active control state, and authorized resources.
- Policy changes, new resources, spending, legal commitments, authority expansion, and high-risk exceptions require explicit owner approval.
- Record uncertainty and dissenting evidence; do not rewrite the original rationale after results are known.
- When a decision is superseded, preserve it and link the replacement.
- Evidence should be linked by ID or source rather than copied without context.
