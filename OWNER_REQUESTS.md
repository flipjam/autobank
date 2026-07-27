# Owner Requests

This file is the durable queue for actions, information, permissions, accounts, or decisions that only the owner can provide. Pi must continue unrelated safe work whenever possible.

## Open requests

_None._

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
