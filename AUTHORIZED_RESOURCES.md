# Authorized Resources

**Status:** Owner-controlled baseline for setup  
**External revenue operations:** Not yet authorized  
**Autonomous spending:** $0

Pi may use only resources listed here and only within the stated boundaries. A technically available account, credential, browser session, tool, or repository is not authorized unless it appears here.

## Approved local resources

| Resource | Authorization | Boundary |
|---|---|---|
| Windows Autobank machine/VM | Local project work | Use non-administrator access where practical. No machine-wide security changes or privileged services without approval. |
| `C:\Projects\autobank` | Read/write | Autobank workspace only. Do not access unrelated local files or repositories. |
| Local Git client | Read/write | Autobank repository and explicitly approved public-source working copies only. |
| Node.js and npm | Local execution | Use installed tools and zero-cost packages after source and package-name review. Machine-wide or privileged changes require approval. |
| Approved local inference endpoint | Routine unattended inference | One active model request at a time. No paid fallback. Exact endpoint/model configuration must be verified during setup without committing secrets. |

## Approved repository

| Repository | Access | Boundary |
|---|---|---|
| `flipjam/autobank` | Read, write, commit, push | Governing and operational workspace. Do not place secrets, private evidence, or personal data in this public repository. |

Public GitHub repositories may be read and cloned for research or isolated evaluation. Forking, opening pull requests, posting comments, accepting contributor terms, or submitting bounty work to other repositories is not authorized until a campaign and the required GitHub identity/account boundary are explicitly activated.

## Approved Pi packages and tools

| Package/tool | Use during setup | Boundary |
|---|---|---|
| `@ifi/pi-remote-tailscale` | Remote monitoring and owner steering | Do not expose services outside the approved private network. |
| `@mjasnikovs/pi-task:dist` | Bounded planning and `/task-auto` execution | Use finite campaigns with durable state; it is not authority to act outside policy. |
| `@narumitw/pi-statusline:src` | Runtime visibility | Informational only. |
| `pi-web-access` | Public research and retrieval | Must use a verified free or self-hosted configuration with no silent paid fallback before unattended use. |
| `pi-agent-browser-native` | Read-only public browsing and setup smoke tests | During `setup`, do not log in, submit forms, publish, purchase, create accounts, or mutate external data. Use only a dedicated Autobank browser profile when authenticated access is later approved. |

## Outside models allowed for bounded setup

ChatGPT, Codex, and other fast or paid/subscription-backed models may be used only for bounded, human-supervised setup, testing, debugging, review, repair, and security auditing. They are not authorized as routine unattended workers or silent fallbacks.

## Explicitly not yet authorized

- Authenticated browser profiles for marketplaces, email, payment platforms, hosting, analytics, or bounty sites
- Business email accounts
- Payment, payout, banking, tax, or identity-verification accounts
- Purchases, paid trials, subscriptions, domains, hosting, advertisements, or metered APIs
- Unsolicited outreach
- Publishing products or listings
- External GitHub comments, pull requests, or bounty submissions
- Contractors, subagents, or third-party operators
- Any personal email, personal financial account, unrelated GitHub repository, or unrelated browser profile

## Adding a resource

A resource may be added only after explicit owner approval. The committed update must identify:

- Resource and owner/account alias
- Exact permissions
- Allowed actions
- Prohibited actions
- Cost and billing behavior
- Secret-storage method
- Data and privacy boundary
- Revocation or rollback method
- Campaign or duration limit, when applicable

Pi may propose an addition through `OWNER_REQUESTS.md` but may not add or use it on its own.
