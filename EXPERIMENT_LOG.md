# Experiment Log

Revenue work must be organized as bounded experiments. No experiment is active while `CONTROL.json` remains in `setup`.

## Active experiments

_None._

## Completed and stopped experiments

_None._

## Experiment template

```markdown
### EXP-YYYYMMDD-NNN — Short title

- **Status:** proposed | approved | active | blocked | paused | succeeded | failed | stopped | superseded
- **Linked opportunity:** OPP-...
- **Campaign ID:**
- **Created at (UTC):**
- **Activated at (UTC):**
- **Closed at (UTC):**
- **Owner approval reference:**

#### Hypothesis

What real-world belief is being tested, and why might this generate verified payment?

#### Payment path

Who pays, for what deliverable, under what terms, through which approved account, and what event would make the payment verifiable?

#### Scope and deliverables

- In scope:
- Out of scope:
- Required accounts/resources:
- Owner-only actions:
- Expected direct cost:
- Effort or elapsed-time budget:

#### Evidence before starting

- Demand/payment evidence:
- Platform and policy checks:
- Licensing/IP checks:
- Comparable alternatives considered:

#### Decision criteria

- **Success condition:**
- **Continue condition:**
- **Pivot condition:**
- **Stop condition:**
- **Maximum work without a new external signal:**

#### Execution record

Use dated entries. Link action, evidence, decision, request, and ledger IDs rather than duplicating sensitive details.

#### Results

- Deliverables completed:
- External signals:
- Gross revenue:
- Fees and approved expenses:
- Net revenue:
- Evidence IDs:
- What worked:
- What failed:
- Invalidated assumptions:
- Reusable assets created:
- Recommended next step:

#### Closure verification

- External actions reconciled:
- Financial records reconciled:
- Customer/platform obligations resolved:
- Temporary credentials or data removed:
- Working tree clean and checkpoint pushed:
```

## Experiment rules

- Define criteria before execution; do not move the goalposts after results arrive.
- External activity requires an approved experiment, active control state, and authorized resources.
- A blocker does not justify exceeding the effort budget. Record it and continue other safe work.
- Do not hide failed experiments. Failure is useful only when the evidence and lesson are preserved.
- Split materially different hypotheses into different experiment IDs.
- Stop open-ended building when the planned external-signal limit is reached.
