## What is AWS Organizations?

AWS Organizations is a service that lets you manage multiple AWS accounts in a centralized, cost-effective way.

## Problems Solved

- **Multiple accounts fragmentation**: Without Organizations, each AWS account operates independently with separate billing, IAM users, and resources, making management difficult.

## How It Works

**Setup Process**

- Take a standard AWS account and create an organization from it (the organization itself isn't "in" the account).
- The initiating account becomes the **management account** (formerly "master account"), which has full control over the organization.

**Adding Accounts**

- Invite existing standard accounts to join; once they accept, they become **member accounts** (formerly "linked accounts").
- Create new accounts directly from the management account, and they automatically become member accounts.

## Key Characteristics

**Structure**

- One management account per organization with multiple member accounts.
- Accounts are grouped into **Organizational Units (OUs)**, which can be nested hierarchically, with the Organization root at the top.

**Consolidated Billing**

- Receive a single bill for all accounts in the organization, enabling volume discounts and reserved instance benefits.

**Service Control Policies (SCPs)**

- Set permission boundaries across member accounts to ensure compliance with security policies.
- SCPs restrict IAM user and role permissions at the account level (not individual user level).

**IAM Best Practice**

- Centralize all identities in a single AWS account and use role switching to access other accounts, providing a single point of control for all identities and permissions.
