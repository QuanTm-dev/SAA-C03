# AWS Organizations

> Centralized service to govern multiple AWS accounts for compliance, cost control, and simplified management.

## Setup

1. Start with a standard AWS account and create an organization
2. That account becomes the **management account** (full control)
3. Add other accounts as **member accounts** (via invitation or creation)

## Account Types

- **Management Account**: Full control, centralized billing, manages all member accounts
- **Member Accounts**: Separate billing consolidated into management account; governed by organization policies and SCPs

## Organization Structure

- **Organizational Units (OUs)**: Hierarchical groupings of accounts (can nest)
- **Organization Root**: Top-level container for all OUs and accounts
- **Single point of control**: Policies applied at root cascade down to all OUs and accounts

## Consolidated Billing

- Single invoice for all member accounts
- Volume discounts applied across all accounts
- Reserved Instances can be shared across accounts in organization

## Compliance and Governance

- **Service Control Policies (SCPs)**: Permission boundaries that restrict (not grant) actions at account level
- **Best Practice**: Centralize all IAM users in one account; use role switching for cross-account access (maintains single identity source)
