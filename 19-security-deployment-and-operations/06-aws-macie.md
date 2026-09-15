# AWS Macie

- Amazon Macie is a fully managed data security and data privacy service.
- It uses machine learning and pattern matching to discover and protect senstive data stored on S3 buckets.
- It uses multi-account architecture with AWS Organization or designate one account as the Macie administrator, which then invites and manages other member accounts.

## Core concepts

- Data Identifiers: Rules that objects and their content are assessed against.
- Discovery Jobs: Jobs you configure to scan specific buckets or objects for sensitive data, using chosen identifiers.
- Discovery Schedule: Define when Discovery Jobs run.
- Findings: Reports generated when sensitive data or security issues are detected.
- Findings can be sent to Amazon EventBridge and AWS Security Hub for monitoring, alerting, and automated remediation workflows.

### Data Identifers

- There are 2 types of identifier: Managed and Custom.
- Managed Identifiers are built-in to the product using machine learning and pattern matching. This is created and maintained by AWS.
- Custom Identifiers are rules you create and maintain. They consist of:
  - **Regex**: Defines the exact pattern for sensitive data (e.g., a 6-digit employee ID).
  - **Keywords**: Specific words or phrases that must be present near the regex match for it to be recognized as valid.
  - **Proximity**: Controls how close the regex match must be to the keyword. Example: a 6-digit number must be within 10 characters of “EmployeeID”.
  - **Ignored Keywords**: Words or phrases that, if present near the match, the match will be ignored.

### Findings

- There are 2 types of findings: Policy and Sensitive data.
- Policy findings reports about potential misconfigurations in S3 bucket settings that might reduce the security. If a risky change occurs **after** Macie is enabled, it generates a finding. E.g. Bucket doesn’t enforce encryption for objects.
- Sensitive Data Findings reports about sensitive data detected in S3 objects. E.g. credit card numbers, AWS keys.
