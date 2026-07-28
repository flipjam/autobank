# Resume Test Report

Execution timestamp (UTC): 2026-07-28T00:11:44Z

## Result status

**PASS** — bounded setup/testing slice completed with required model-context checks, evidence updates, commit, and push.

## Repository context and sync validation

- Worktree: `C:/Projects/autobank`
- Branch: `main`
- Upstream: `origin/main`
- Remote URL: `https://github.com/flipjam/autobank.git`
- Local HEAD pre-sync: `ad7371d76ce55f82bf346f6759cbb178b98f085a`
- `origin/main` pre-sync: `ad7371d76ce55f82bf346f6759cbb178b98f085a`
- `ahead/behind` pre-sync: `0/0`
- Fast-forward command path: `git fetch` then `git merge --ff-only origin/main` (no rewrite)
- `ahead/behind` post-sync: `0/0`
- Local HEAD post-sync: `ad7371d76ce55f82bf346f6759cbb178b98f085a`
- `origin/main` post-sync: `ad7371d76ce55f82bf346f6759cbb178b98f085a`
- Working tree at report time: tracked `.pi-tasks/TASK_AUTO_0001.md` modified and untracked `.pi-tasks/TASK_0002.md` present; no tracked governance-file mutations.

## Validation outcomes

- `npm test`: **PASS**
- `npm run validate:strict`: **PASS**
- `npm run lint --if-present`: no script configured (skipped by npm)
- `npm run typecheck --if-present`: no script configured (skipped by npm)
- `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --list-models`: **PASS**
- `PI_PROVIDER=openai-codex PI_MODEL=gpt-5.3-codex-spark pi --print ...`: **PASS**
- Control/state reconciliation script: `CONTROL.json` remains setup/no external actions; `STATE.json` retains open `REQ-20260727-002` ✅

## Model usage context

This run used only the authorized setup/testing model path:

- Provider: `openai-codex`
- Model: `gpt-5.3-codex-spark`

## Boundary and checkpoint notes

- `REQ-20260727-002` remains in `OWNER_REQUESTS.md` and `STATE.json` as a production-readiness gate but was explicitly non-blocking for bounded setup-testing per owner rule for this slice.
- This run performed only local repository and validation work; no campaign activity occurred.
- New evidence entries were added to `EVIDENCE_INDEX.md`.
- Latest commit: `802476405ebc6f5812791859e72def2ecfea1e0a`
- Push status: remote `origin/main` now matches local `HEAD`.
