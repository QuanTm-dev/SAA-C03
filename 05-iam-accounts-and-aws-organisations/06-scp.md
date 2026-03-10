## What is SCP?

- Service Control Policies (SCP) are permission boundaries that restrict what actions AWS accounts can perform within an AWS Organization.

## Characteristics of SCP

- **JSON policy documents** that define account-level permissions boundaries.
- Applied to the root, organizational units (OUs), or individual accounts within an AWS Organization.
- **Inherit down the hierarchy**: SCPs applied to an OU affect all accounts within that OU.
- **Management Account is not affected** by SCPs.
- **Do not grant permissions**, only restrict them. Example: An SCP blocking usage outside a specific region prevents all identities (including the root user) from acting outside that region.

## SCP Types

- **Allowlist**: Block all by default; only allow explicitly specified actions. More secure but requires more management overhead.
- **Denylist**: Allow all by default; only block explicitly denied actions. More flexible, less restrictive. **AWS uses this type by default.**

**IMPORTANT**: You should start with a Denylist SCP to allow all actions because it requires less management overhead. If AWS adds a new service, you won't have to update your SCP to allow it.

## Permission Evaluation

- An identity must have permissions from **both** the SCP and IAM identity policies to perform an action.
- If either SCP or IAM identity policy denies an action, the action is denied.
- SCPs follow [Policy Evaluation Logic](./01-iam-identity-policies.md#policy-evaluation-logic).
