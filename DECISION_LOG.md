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
- **Options considered:** Owner performs PowerShell preparation manually; Pi performs the complete bounded synchronization, validation, documentation, audit, checkpoint, and push workflow itself.
- **Decision:** Pi will perform the complete bounded setup workflow through the self-bootstrapping prompt in `SETUP_AUDIT_PROMPT.md`. The owner should only be interrupted for genuine owner-only blockers.
- **Rationale:** This directly tests the intended autonomous operating model, reduces unnecessary human steps, and verifies that durable instructions are sufficient for recovery and long-running work.
- **Policy and authorization basis:** Rules 2, 7, 10, and 13; `CONTROL.json` remains in `setup`, with commits and pushes limited to `flipjam/autobank` and all other external mutations disabled.
- **Expected benefit:** A stronger readiness test, lower setup friction, and clearer evidence that Pi can safely bootstrap and preserve its own operational state.
- **Risks and mitigations:** Pi could overwrite local work or overreach during synchronization; the prompt prohibits reset, clean, rebase, force-push, lost work, revenue activity, and external mutation outside the authorized repository.
- **Reversible:** yes
- **Review trigger or date:** Review after `SETUP_AUDIT_REPORT.md` and `RESUME_TEST_PLAN.md` are completed and pushed.
- **Owner approval required:** yes
- **Owner approval reference:** Explicit owner instruction in the Autobank setup conversation on 2026-07-27.
- **Outcome and later evidence:** Pending first Pi setup audit.
- **Superseded by:**

## Decision template

```markdown
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
```

## Decision rules

- Pi may make tactical choices only inside the active campaign, current policy, and authorized resources.
- Policy changes, new resources, spending, legal commitments, authority expansion, and high-risk exceptions require explicit owner approval.
- Record uncertainty and dissenting evidence; do not rewrite the original rationale after results are known.
- When a decision is superseded, preserve it and link the replacement.
- Evidence should be linked by ID or source rather than copied without context.
