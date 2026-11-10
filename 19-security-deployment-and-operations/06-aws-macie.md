# AWS Macie

## Overview

- Fully managed data security and data privacy service
- Uses machine learning and pattern matching to discover and protect sensitive data stored in S3 buckets

## Multi-account management

- Supports multi-account architecture through AWS Organizations
- Alternatively, designate one account as the Macie administrator
- The administrator account invites and manages member accounts

## Core concepts

- Data Identifiers: rules that objects and their content are assessed against
- Discovery Jobs: scan specific buckets or objects for sensitive data, using chosen identifiers
- Discovery Schedule: defines when Discovery Jobs run
- Findings: reports generated when sensitive data or security issues are detected

## Data identifiers

- Two types: Managed and Custom

### Managed identifiers

- Built into the product
- Use machine learning and pattern matching
- Created and maintained by AWS

### Custom identifiers

- Rules you create and maintain
- Consist of regex, keywords, proximity, and ignored keywords

### Custom identifier components

- **Regex**: defines the exact pattern for sensitive data, e.g., a 6-digit employee ID
- **Keywords**: specific words or phrases that must be present near the regex match for it to be recognized as valid
- **Proximity**: controls how close the regex match must be to the keyword
  - Example: a 6-digit number must be within 10 characters of "EmployeeID"
- **Ignored Keywords**: words or phrases that, if present near the match, cause the match to be ignored

## Findings

- Two types: Policy and Sensitive data
- Can be sent to Amazon EventBridge and AWS Security Hub. Used for monitoring, alerting, and automated remediation workflows

### Policy findings

- Report potential misconfigurations in S3 bucket settings that might reduce security
- Generated when a risky change occurs **after** Macie is enabled
- Example: bucket doesn't enforce encryption for objects

### Sensitive data findings

- Report sensitive data detected in S3 objects
- Examples: credit card numbers, AWS keys
