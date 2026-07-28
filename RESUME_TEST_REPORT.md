# Resume Test Report

Execution timestamp (UTC): 2026-07-28T00:11:44Z

## Result status

**PASS** — bounded setup/testing slice completed with required model-context checks, evidence updates, commit, and push.

## Repository context and sync validation

- Worktree: `C:/Projects/autobank`
- Branch: `main`
- Upstream: `origin/main`
- Remote URL: `https://github.com/flipjam/autobank.git`
- Local HEAD pre-sync: `496865eaecfa5fe4317442776c893d621edf3e73`
- `origin/main` pre-sync: `88e726dc912da84594ca2a88245968e8e6928863`
- `ahead/behind` pre-sync: `4/0`
- Fast-forward command path: `git fetch` then `git merge --ff-only origin/main` (no rewrite)
- `ahead/behind` post-sync: `0/0`
- Local HEAD post-sync: `c0b2f7445ec37972f3ade8b618a9698d4d7e5689`
- `origin/main` post-sync: `c0b2f7445ec37972f3ade8b618a9698d4d7e5689`
- Working tree before checkpoint commit: tracked `.pi-tasks/TASK_AUTO_0001.md` and untracked `.pi-tasks/TASK_0002.md` remained unchanged; no governance-file mutations.

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

- `REQ-20260727-002` remains in `OWNER_REQUESTS.md` and `STATE.json` as a production-readiness gate but was explicitly non-blocking for bounded setup/testing per owner rule for this slice.
- This run performed only local repository and validation work; no campaign activity occurred.
- New evidence entries were added to `EVIDENCE_INDEX.md`.
- Commit created: `c0b2f7445ec37972f3ade8b618a9698d4d7e5689`
- Push status: remote `origin/main` now matches local `HEAD`.
