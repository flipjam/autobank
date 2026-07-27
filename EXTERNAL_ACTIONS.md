# External Actions Log

This log records every action that changes data, state, visibility, commitments, or communication outside the Autobank repository. Read-only public research does not require an action entry unless it creates a meaningful security, privacy, or platform interaction.

No external actions are authorized while `CONTROL.json` is in `setup`.

## Actions

_None._

## Action template

```markdown
### ACT-YYYYMMDD-NNN — Short description

- **Status:** planned | attempted | completed | failed | rolled_back | superseded
- **Planned at (UTC):**
- **Performed at (UTC):**
- **Experiment:** EXP-...
- **Platform/service:**
- **Account alias:**
- **Action type:** submission | post | message | listing | deployment | account_change | download | upload | other
- **Purpose:**
- **Authorization basis:** policy rule, active control state, authorized-resource entry, and campaign approval
- **Pre-action duplicate check:** what was checked and result
- **Inputs or artifact commit:**
- **Actual result:**
- **External URL/reference:**
- **Evidence ID:** EVD-...
- **Reversible:** yes | no | partially
- **Rollback method:**
- **Follow-up obligation or deadline:**
- **Related owner request/decision/ledger entries:**
- **Notes:**
```

## Idempotency and recovery rules

- Reserve an action ID before a potentially consequential external mutation.
- After interruption, check this log and the external platform before repeating any action.
- A timeout or missing response does not prove failure. Mark the action `attempted`, investigate, and only retry after confirming no prior mutation occurred.
- Record the actual result, including rejection or partial completion.
- Do not erase failed, reverted, or embarrassing actions.
- Link financial effects to `LEDGER.csv`; do not duplicate financial truth only in prose.
- Link redacted evidence through `EVIDENCE_INDEX.md`.
