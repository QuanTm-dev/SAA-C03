# Web Application Firewall (WAF)

## Core concepts

- WAF is a layer 7 firewall
- WebACL (Web Access Control List): a container for rules and rule groups
- Rules: define how traffic is inspected and filtered
- Rule groups: collections of rules reusable across multiple WebACLs
- Actions: decide what happens when a rule matches
- WebACL default action: catch-all behavior for unmatched requests, set to either Allow or Block
- WebACL Capacity Units (WCU): show how much compute capacity each WAF rule uses

## WebACLs

### Resource association

- A WebACL is associated with resources like CloudFront distributions, Application Load Balancers (ALBs), or API Gateway
- Supports 2 resource types: Global Service (CloudFront) and Regional Service (ALB, API Gateway)
- 1 WebACL can be associated with multiple resources
- A resource can only have 1 WebACL associated with it
- The first association of a WebACL with a resource takes time
- After the first association, changes to the WebACL take less time

### Capacity

- Each WebACL has a WCU limit that its rules can consume
- Default limit is 5,000 WCU per WebACL

## Rule groups

### Management

- Rule groups can be managed by:
  - AWS-managed
  - Marketplace vendor-managed
  - Customer-managed (you)
  - Service-managed (AWS Shield, AWS Firewall Manager)

### Capacity

- Each rule group has a WCU limit that its rules can consume
- Each rule group can have a maximum of 5,000 WCU

## Rules

### Structure

- Each rule contains type, conditions (AKA statement), and actions:
  - Type defines what kind of rule it is
  - Condition (statement): the logic or criteria the rule checks against traffic
  - Action: what happens when the condition is met
- Example conditions: "match requests from this IP set" or "block any IP trying to request over 5,000 in 1 minute"
- A rule can have multiple conditions (statements) combined with logical operators (AND, OR, NOT)

### Rule types

- Regular: matches based on specific conditions (e.g., IP, string, regex, geo)
- Rate-based: matches based on specific conditions at a certain rate (e.g., an IP sending 5,000 HTTP requests in 1 minute)

### Actions

- Action options: Allow, Block, Count, Captcha, Challenge
- Rate-based rules don't have the Allow action
- Custom headers can optionally be added
- A blocked request can optionally return a custom response

### Labels

- Rule labels are optional tags added by a rule
- Subsequent rules can check for a label's presence to build logic
- Labels are internal to WAF and never exposed to clients

### Evaluation order

- Rules are processed in order
- Allow and Block stop further evaluation
- Count, Captcha and Challenge continue to the next rule

## Logging

- Can log detailed requests to S3, CloudWatch, or Kinesis Data Firehose
- Logs are delivered to S3 every 5 minutes
- For real-time log processing, use Kinesis Data Firehose

## Event-driven security response

1. Send WAF logs via Kinesis Firehose into Amazon S3
2. Query logs with Athena to spot suspicious IPs, patterns, or spikes
3. Trigger Lambda to update the WebACL

## Pricing

- Charged for every WebACL
- Charged for each rule in each WebACL
- Charged for each rule group in each WebACL
- Charged for every request processed by a WebACL
- Additional charges apply for certain advanced rule types and features:
  - Intelligent Threat Mitigation
  - Bot Control
  - Captcha
  - Fraud Control/Account Takeover
  - Marketplace rules
