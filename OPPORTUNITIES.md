# Opportunity Backlog

No revenue opportunity has been approved or selected yet. During setup, Pi may perform public, read-only research and populate candidates, but it may not begin an experiment or take an external action until `CONTROL.json` is activated by the owner.

## Ranking method

Each candidate receives a 0–5 score in each category. Higher is better. Weighted points are `score / 5 × weight`.

| Category | Weight | A score of 5 means |
|---|---:|---|
| Probability of verified payment | 25 | Strong evidence that compliant work can lead to actual payment |
| Time to first payment | 20 | Plausibly payable within days, not months |
| Fit for Pi and local inference | 15 | Research, coding, testing, documentation, or repeatable agent work is a strong match |
| Zero-cost feasibility | 10 | Can be executed without spending or metered services |
| Low owner dependence | 10 | Requires little owner time beyond unavoidable setup or verification |
| Legal/platform/reputation clearance | 10 | Clearly authorized, compliant, truthful, and low-risk |
| Repeatability and scalability | 10 | Success can produce reusable assets, reputation, distribution, or recurring revenue |
| **Total** | **100** | |

Scoring is a comparison aid, not permission to act. A high score cannot override policy, resource authorization, or owner control.

## Automatic disqualifiers

Reject or pause a candidate that:

- Requires autonomous spending above $0.
- Relies on deception, spam, fake identity, fake engagement, or unclear rights.
- Requires a prohibited high-risk activity.
- Requires an account, contract, platform action, or credential not yet authorized.
- Has no credible mechanism for actual payment.
- Depends on a paid or metered unattended runtime.
- Cannot define a bounded first experiment with a stop condition.

## Ranked candidates

_None yet._

## Candidate template

```markdown
### OPP-YYYYMMDD-NNN — Short title

- **Status:** researching | eligible | blocked | rejected | selected | superseded
- **Last verified (UTC):**
- **Opportunity type:** bounty | service | software product | digital product | content/distribution | other
- **Customer or payer:**
- **Payment mechanism:**
- **Evidence of demand/payment:**
- **Primary sources and dates checked:**
- **Required deliverable:**
- **Required accounts/resources:**
- **Owner-only actions:**
- **Expected direct cost:**
- **Time to first external signal:**
- **Time to possible payment:**
- **Important platform/legal/license terms:**
- **Main risks:**
- **Smallest useful experiment:**
- **Stop condition:**
- **Scores:** payment probability _/5; payment speed _/5; Pi fit _/5; zero-cost _/5; low owner dependence _/5; clearance _/5; repeatability _/5
- **Weighted total:** _/100
- **Recommendation and rationale:**
- **Linked experiment:**
```

## Research discipline

- Prefer current primary sources for platform rules, payout terms, fees, eligibility, and technical requirements.
- Record when information was checked; do not rely on stale summaries.
- Separate evidence from inference.
- Do not count advertised bounty amounts, possible rates, traffic, or market size as earned revenue.
- Compare multiple credible candidates before selecting the initial experiment unless a time-sensitive opportunity clearly justifies immediate owner review.
