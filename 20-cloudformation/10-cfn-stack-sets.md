# CloudFormation Stack Sets

- StackSets are a feature of CloudFormation allowing infrastructure to be deployed and managed across multiple regions and multiple accounts from a single location.

## Core Concepts

- StackSet: Container for Stack Instances.
- Stack Instance: Container for a stack in a specific account and region.
- Admin Account: The account that creates and manages the StackSet.
- Target Account: The account where the stack instance and the stack itself are deployed.
- Each stack belongs to an account and a region.
- StackSet assumes self-managed role or service-managed role to deploy stack instances in target accounts.
- Self-managed role is created manually by the users in the target accounts.
- Service-managed role is service-linked role created automatically by CloudFormation in the target accounts.
- Concurrent Account: The maximum number of accounts that can be deployed to at the same time. For example, if you have 100 accounts and set the concurrent account limit to 10, CloudFormation will deploy to 10 accounts at a time until all 100 accounts are deployed.
- Failure Tolerance: The maximum number of accounts that can fail during deployment before CloudFormation stops the deployment.
- Retain Stack: If set to true, removing a stack instance from a StackSet will not delete the stack in the target account.

## When to Use StackSets

- Enable AWS Config accross a large number of accounts.
- Create AWS Config rules like MFA, EBS encryption, etc. across multiple accounts and regions.
- Create IAM roles for cross-account access across multiple accounts.
