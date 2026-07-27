# Autobank

Autobank is a controlled experiment in using Pi and a local inference box to pursue lawful net revenue with minimal human involvement, explicit owner authority, zero-cost routine runtime, durable records, and verifiable accounting.

## Current status

**Framework ready for local validation. External revenue actions are disabled.**

`CONTROL.json` is currently in `setup`. Pi may validate the workspace, test recovery, perform local work, and conduct read-only public research. It may not submit, publish, message, purchase, create accounts, log into newly authorized services, or otherwise mutate external data until the owner activates a bounded campaign.

The next bounded operation is defined in `SETUP_AUDIT_PROMPT.md`.

## Start here

1. Read `AGENTS.md`.
2. Read `AUTOBANK_POLICY.md` and `CONTROL.json`.
3. Run the validator self-tests and strict validation.
4. Follow `RUNBOOK.md`.
5. Run the setup audit through Pi `/task-auto` using `SETUP_AUDIT_PROMPT.md`.

On the Windows Autobank machine:

```powershell
cd C:\Projects\autobank
git pull --ff-only
npm test
npm run validate:strict
pi
```

## Governing documents

- `AUTOBANK_POLICY.md` — the 15 owner-approved operating rules
- `CONTROL.json` — owner-controlled run state, emergency stop, campaign, and external-action switch
- `MISSION.md` — ordered revenue objective and current setup mission
- `AUTHORIZED_RESOURCES.md` — exact accounts, tools, repositories, and permission boundaries
- `AGENTS.md` — mandatory operating instructions and startup read order
- `RUNBOOK.md` — startup, campaign, external-action, recovery, accounting, and emergency procedures

## Durable operating records

- `STATE.json` — current task, blockers, next action, and verified financial totals
- `OWNER_REQUESTS.md` — owner-only actions or approvals Pi needs
- `OPPORTUNITIES.md` — evidence-based candidate backlog and ranking rubric
- `EXPERIMENT_LOG.md` — bounded experiment definitions and outcomes
- `DECISION_LOG.md` — consequential decisions and their evidence
- `EXTERNAL_ACTIONS.md` — idempotent record of every external mutation
- `EVIDENCE_INDEX.md` — redacted evidence references and verification status
- `LEDGER.csv` — permanent transaction-level financial record

## Deterministic validation

The repository has no runtime dependencies. Node.js validates required files, control invariants, financial totals, ledger structure, ignore rules, duplicate record IDs, tracked sensitive paths, and common secret patterns. A separate self-test proves that important violations are rejected.

```powershell
npm test
npm run validate
npm run validate:strict
```

A failed authority, security, control, or financial check is a stop condition for affected work.

## Privacy and security

This repository is public. Never commit credentials, browser profiles, authenticated session state, private evidence, banking or tax information, customer personal data, or unredacted personal records. Approved local-only locations such as `private-evidence/` are ignored by Git.

## Revenue truth

Autobank has earned **$0** until actual payment is credited to an owner-approved account, is withdrawable or subject only to ordinary payout timing, and is backed by a ledger row and evidence record. Proposals, advertised bounties, invoices, views, downloads, promises, and projected sales are not revenue.
