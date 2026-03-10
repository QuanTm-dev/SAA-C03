## Overview

- AWS Control Tower orchestrates multiple AWS services to automate setup of secure, multi-account environments based on AWS best practices.

## Key Components

- **Landing Zone**: Secure multi-account environment with shared services and standardized configurations.
- **Guardrails**: Pre-packaged governance rules for security, operations, and compliance across all accounts.
- **Account Factory**: Self-service portal to create and manage AWS accounts with standardized network and account templates.
- **Dashboard**: Single-page view of landing zone health, compliance status, and guardrail violations.

## Architecture

### Management Account

- Management account is the account where AWS Control Tower is set up and managed.
- Uses CloudFormation to automate landing zone and guardrail configuration.
- Uses AWS Config and SCPs to enforce guardrails across all accounts.
- Integrated with IAM Identity Center (AWS SSO) for identity and access management.

### AWS Organizations Structure

- **Foundation OU**: Contains shared management accounts:
  - **Log Archive**: Stores logs (CloudTrail, Config) from all landing zone accounts.
  - **Audit**: Monitors compliance across accounts (CloudTrail, Config violations).
- **Custom OU**: Contains user-created accounts via Account Factory.

## Landing Zone

- Multi-account environment built on AWS Organizations, CloudFormation, and AWS Config.
- Foundation OU manages logs, audit, and compliance across all accounts.
- Users create additional OUs and accounts based on organizational structure.
- IAM Identity Center provides centralized identity and access management.
- CloudWatch and SNS enable monitoring and notifications.

## Guardrails

- Pre-packaged governance rules for multi-account compliance in AWS Control Tower.
- **Types**: Mandatory, Strongly Recommended, Elective.
- **Categories**:
  - **Preventive**: Block non-compliant actions (via SCPs and Config rules).
  - **Detective**: Monitor and report on non-compliant resources across accounts.

## Account Factory

- Self-service automation for account provisioning by admins or authorized end users.
- Automatically applies guardrails and standardized configurations to new accounts.
- Supports account closure/repurposing integrated with business SDLC processes.
