# AWS Control Tower

> Automation framework orchestrating AWS services to set up secure, multi-account environments following AWS best practices.

## Core Components

- **Landing Zone**: Secure multi-account foundation with shared services, standardized setup
- **Guardrails**: Pre-packaged governance rules (security, operations, compliance)
- **Account Factory**: Self-service portal for standardized account provisioning
- **Dashboard**: Compliance and guardrail violation overview

## Architecture

### Management Account

- Where Control Tower is configured and managed
- Uses CloudFormation for automation
- Uses AWS Config + SCPs for governance enforcement
- Provides IAM Identity Center integration for identity management

### Organization Structure

**Foundation OU** (AWS-managed):

- **Log Archive Account**: Centralizes logs (CloudTrail, Config) from all accounts
- **Audit Account**: Monitors compliance and guardrail violations across accounts

**Custom OUs** (user-created):

- Accounts provisioned via Account Factory

## Landing Zone Architecture

- Built on: AWS Organizations, CloudFormation, AWS Config
- Foundation OU: Logs, audit, compliance centralization
- Custom OUs: User-created organizational structure
- Identity: IAM Identity Center for centralized access management
- Monitoring: CloudWatch + SNS for alerts and notifications

## Guardrails

### Types

- **Mandatory**: Always active; cannot be disabled
- **Strongly Recommended**: AWS best practice; recommended but optional
- **Elective**: Optional governance rules

### Enforcement Methods

- **Preventive**: Block non-compliant actions (SCPs, Config rules)
- **Detective**: Monitor and report violations across accounts

## Account Factory

- Self-service account provisioning (admins or authorized end users)
- Auto-applies guardrails and standardized templates
- Supports account closure with business process integration
- Enforces consistent network and security baseline
