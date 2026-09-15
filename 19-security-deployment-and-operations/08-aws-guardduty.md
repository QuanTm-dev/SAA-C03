# AWS Guardduty

- AWS Guardduty is a **continuous** security monitoring service. Meaning once enabled, it is running all the time.
- How it works: It reviews data from supported services and attempts to identify any events outside of the 'norm' for a given AWS account or Accounts.
- It uses machine learning and threat intelligence feeds (lists of known threats) to detect suspicious activity. Machine learning learns your normal activity patterns and identifies anything unusual.
- When a finding is generated, an event is sent to EventBridge for notification or remediation.
- Support multiple accounts (AKA Master-Member) architecture. The account that enable AWS Guardduty will be come the Master account.
- Some supported services: CloudTrails logs, DNS logs, VPC Flow logs.
