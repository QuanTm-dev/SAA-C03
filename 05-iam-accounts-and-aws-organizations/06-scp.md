# Service Control Policies (SCP)

> Account-level permission boundaries that restrict (never grant) what AWS accounts can perform in an organization.

## Fundamentals

- JSON policy documents defining resource-level permission limits
- Applied to: Organization root, OUs, or individual accounts
- Inherit hierarchically: OU policies cascade to child accounts
- Management account exempt from SCPs
- Restrict all identities including root user

## SCP Strategy: Allowlist vs. Denylist

### Denylist (AWS Default)

- Allow all by default; explicitly deny specific actions
- Lower maintenance: new AWS services auto-allowed
- Recommended starting point

### Allowlist

- Block all by default; explicitly allow specific actions
- Higher security; higher maintenance overhead
- Requires SCP updates when AWS adds new services

## Permission Evaluation

- **Both required**: Identity must satisfy BOTH SCP AND IAM identity policies
- **Explicit deny wins**: If either denies, action is denied
- Follows standard policy evaluation logic
