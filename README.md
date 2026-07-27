# Autobank

Autobank is a controlled experiment in using Pi and a local inference box to pursue lawful net revenue with minimal human involvement, explicit owner authority, zero-cost routine runtime, durable records, and verifiable accounting.

## Current status

**Framework self-bootstrap and setup audit have been executed; external revenue actions remain disabled.**

`CONTROL.json` is in `setup` with `external_actions_allowed: false`. Pi may synchronize and validate this repository, audit documentation/runtime boundaries, and commit/push setup-related records to `flipjam/autobank`. It may not submit, publish, message, purchase, create accounts, authenticate to newly authorized services, or otherwise mutate external data until the owner activates a bounded campaign.

The setup-audit command and latest completion state are in:

- `SETUP_AUDIT_REPORT.md`
- `RESUME_TEST_PLAN.md`

## One-paste setup audit

The owner does not need to pull, validate, or prepare the checkout manually. Start Pi, invoke `/task-auto`, and paste the complete prompt from `SETUP_AUDIT_PROMPT.md` if a full re-run is needed.

That prompt requires Pi to:

1. Safely locate and fast-forward the authorized checkout at `C:\Projects\autobank`.
2. Preserve unexpected local work instead of resetting/discarding it.
3. Run validator self-tests and strict validation.
4. Review all tracked documentation for freshness and consistency.
5. Audit the local inference, web-access, browser, statusline, and remote boundaries.
6. Produce the setup-audit report and controlled resume-test plan.
7. Commit and push every intended public-safe change.
8. Verify a clean tree and matching local/remote `main` commit.

Current audit outcome is `READY WITH BLOCKERS` due unresolved runtime cost-boundary verification.

## Governing documents

- `AUTOBANK_POLICY.md` — the owner-approved operating rules
- `CONTROL.json` — owner-controlled run state, emergency stop, campaign, and external-action switch
- `MISSION.md` — ordered revenue objective and current setup mission
- `AUTHORIZED_RESOURCES.md` — exact accounts, tools, repositories, and permission boundaries
- `AGENTS.md` — mandatory operating instructions and startup read order
- `RUNBOOK.md` — startup, campaign, external-action, recovery, accounting, and emergency procedures
- `SETUP_AUDIT_PROMPT.md` — complete self-bootstrapping first `/task-auto` specification

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

A failed authority, security, control, or financial check is a stop condition for affected work. The setup-audit prompt makes Pi run these commands itself before and after material changes.

## Manual recovery entry point

When manual recovery is necessary:

```powershell
cd C:\Projects\autobank
git status --short --branch
git pull --ff-only
npm run validate:strict
pi
```

Never reset, clean, rebase, force-push, or discard unexpected local work merely to synchronize the repository.

## Privacy and security

This repository is public. Never commit credentials, browser profiles, authenticated session state, private evidence, banking or tax information, customer personal data, local inference secrets, or unredacted personal records. Approved local-only locations such as `private-evidence/` are ignored by Git.

## Revenue truth

Autobank has earned **$0** until actual payment is credited to an owner-approved account, is withdrawable or subject only to ordinary payout timing, and is backed by a ledger row and evidence record. Proposals, advertised bounties, invoices, views, downloads, promises, and projected sales are not revenue.