# Evidence Index

Evidence supports decisions, external actions, experiment results, and financial claims without exposing secrets or unnecessary personal information.

## Evidence records

_None._

## Evidence template

```markdown
### EVD-YYYYMMDD-NNN — Short description

- **Created at (UTC):**
- **Evidence type:** transaction | platform_record | screenshot | test_output | commit | email_reference | document | other
- **Supports:** experiment, action, decision, owner request, or ledger IDs
- **Public-safe summary:**
- **Source/account alias:**
- **Source date/time:**
- **Repository path or external reference:**
- **Integrity information:** commit SHA, file hash, transaction/reference ID, or equivalent
- **Redactions applied:**
- **Private original location:** local alias only; never credentials or sensitive path details
- **Retention/review date:**
- **Verification result:** verified | partially_verified | unverified | superseded
- **Verifier and method:**
- **Notes:**
```

## Evidence rules

- This repository is public. Commit only evidence that is safe for public disclosure.
- Never commit credentials, MFA data, recovery codes, banking details, tax identifiers, private customer information, browser cookies, authenticated session data, or unredacted personal records.
- Store sensitive originals only in an approved ignored local location such as `private-evidence/`; record only a safe alias and redacted summary here.
- A screenshot is not automatically trustworthy. Record the source, timestamp, context, and what it actually proves.
- For revenue, evidence must show that payment was credited to an approved account and is withdrawable or subject only to normal payout timing.
- A proposal, invoice, promise, advertised bounty, dashboard estimate, or pending review cannot verify revenue.
- Preserve negative evidence and rejected outcomes when they materially affect decisions.
