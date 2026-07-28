# Resume Test Report

Execution timestamp (UTC): 2026-07-28T00:11:44Z

## Result status

**PASS** for bounded setup/testing slice with authorized subscription-backed model usage preserved as a non-blocking production gate exception.

## Repository context and sync validation

- Worktree: `C:/Projects/autobank`
- Branch: `main`
- Upstream: `origin/main`
- Remote URL: `https://github.com/flipjam/autobank.git`
- Local HEAD pre-sync: `496865eaecfa5fe4317442776c893d621edf3e73`
- `origin/main` pre-sync: `88e726dc912da84594ca2a88245968e8e6928863`
- `ahead/behind` pre-sync: `4/0`
- Fast-forward fetch/merge behavior: `git fetch` then `git merge --ff-only origin/main` completed without rewrite.
- `ahead/behind` post-sync: `4/0`
- `origin/main` post-sync: `88e726dc912da84594ca2a88245968e8e6928863`
- Working tree status before checkpoint update: unexpected local-only files in `.pi-tasks/` and no tracked governance-file edits.

## Validation outcomes

- `npm test`: **PASS**
- `npm run validate:strict`: **PASS**
- `npm run lint --if-present`: no script configured (skipped by npm)
- `npm run typecheck --if-present`: no script configured (skipped by npm)
- `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`: **PASS**
- `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --print ...`: **PASS**
- Control/state reconciliation: `CONTROL.json` setup/locked (`run_state: setup`, `external_actions_allowed: false`) ✅; `STATE.json.open_owner_request_ids` contains `REQ-20260727-002` ✅

## Model usage context

This run used only the authorized subscription-backed provider path:
- Provider: `openai-codex`
- Model: `gpt-5.3-codex-spark`

This is bound to bounded setup/testing only, not campaign production work.

## Boundary and checkpoint notes

- `REQ-20260727-002` remains present in `OWNER_REQUESTS.md` and `STATE.json` as a non-blocking setup/testing exception and a production-readiness gate.
- No external revenue campaign actions were run.
- New checkpoint evidence was recorded in `EVIDENCE_INDEX.md`.
- Pending checkpoint commit: `chore(setup): record setup/testing model authorization and checkpoint`
