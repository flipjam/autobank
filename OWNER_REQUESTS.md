# Owner Requests

This file is the durable queue for actions, information, permissions, accounts, or decisions that only the owner can provide. Pi must continue unrelated safe work whenever possible.

## Open requests

### REQ-20260727-001 — Validate and lock non-metered runtime inference + web-access

- **Status:** open
- **Created at (UTC):** 2026-07-27T20:10:00Z
- **Experiment or campaign:** setup audit
- **Category:** policy
- **Request:**
  Confirm a verified zero-charge routine inference and research stack for unattended operation by:
  1) setting the active unattended Pi inference default/provider chain to the approved local endpoint (currently `minipc`) and preventing automatic fallback to subscription-backed models; and
  2) configuring `C:/Users/Administrator/.pi/web-search.json` (or approved equivalent) to a non-metered provider path with no silent paid fallback.
- **Exact owner action needed:**
  Update local Pi runtime settings and permissions to enforce both defaults above, then share confirmation text or proof of config in a non-sensitive form.
- **Why it is required:**
  The setup audit detected uncertainty in automatic boundaries: the session currently defaults to `PI_PROVIDER=openai-codex`, and `pi-web-access` can use `openai` fallback in auto mode before trying MCP-backed search.
- **What becomes possible after completion:**
  Unattended local bounded audit and later campaign steps can proceed with a proven non-metered inference and research path.
- **Minimum permission or information required:**
  Owner access to the local Pi runtime configuration and authorization to apply provider/search routing changes in the runtime environment.
- **Cost:** $0
- **Risks:**
  Misconfiguration could force fallback to paid/subscription services, expose cost risk, or silently route work through unapproved providers.
- **Free or lower-risk alternatives attempted:**
  Read-only boundary inspection and deterministic checks were completed. I did not perform paid web-search API calls or external revenue actions.
- **Can productive work continue while waiting:** yes
- **Deadline or opportunity expiration:** none
- **Notification method used:** local report and repository state files
- **Owner response:**
- **Resolution evidence:**
  Not yet available.
- **Closed at (UTC):** 

## Request template

```markdown
### REQ-YYYYMMDD-NNN — Short title

- **Status:** open | answered | declined | expired | superseded
- **Created at (UTC):**
- **Experiment or campaign:**
- **Category:** identity | account | permission | spending | legal terms | MFA/CAPTCHA | financial | policy | other
- **Request:**
- **Exact owner action needed:**
- **Why it is required:**
- **What becomes possible after completion:**
- **Minimum permission or information required:**
- **Cost:** $0 or exact amount and billing basis
- **Risks:**
- **Free or lower-risk alternatives attempted:**
- **Can productive work continue while waiting:** yes | no — explanation
- **Deadline or opportunity expiration:** none or timestamp
- **Notification method used:**
- **Owner response:**
- **Resolution evidence:**
- **Closed at (UTC):**
```

## Handling rules

- Never ask the owner to paste passwords, API keys, MFA codes, recovery codes, tax identifiers, banking details, or other secrets into this file, a prompt, or Git.
- Ask for the minimum action or permission needed.
- A request is not approval. Pi must wait for an explicit owner response and any required repository policy or authorization update.
- Silence is not approval.
- Keep declined, expired, and resolved requests for history; do not erase them.
- Link any resulting external action, evidence, expense, or decision record.
