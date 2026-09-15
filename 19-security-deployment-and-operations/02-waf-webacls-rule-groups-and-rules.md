# Web Application Firewall (WAF), WEBACLs, Rule Groups and Rules

## Core concepts

- WAF is a layer 7 firewall.
- WebACL (Web Access Control List): A container for rules and rule groups.
- Rules: Define how traffic is inspected and filtered.
- Rule Groups: Collections of rules that can be reused across multiple WebACLs.
- Actions: Decide what happens when a rule matches.
- WebACL Default action: The catch‑all behavior for unmatched requests, set to either Allow or Block.
- WebACL Capacity Units (WCU): A unit that shows how much compute capacity each WAF rule uses.

### WebACL characteristics

- You associate a WebACL with resources like CloudFront distributions, Application Load Balancers (ALBs), or API Gateway.
- Support 2 resource type: Global Service (CloudFront) and Regional Service (ALB, API Gateway).
- Each WebACL has a WCU limit that its rules can consume. Default limit is 1500 WCU per WebACL. You can request a limit increase if needed via support ticket.
- The first time WebACL is associated with a resource, it takes time. After that, changes to the WebACL takes less time.
- 1 WebACL can be associated with multiple resources, but a resource can only have 1 WebACL associated with it.

### Rule Groups

- Rule groups can be managed by:
  - AWS
  - Marketplace vendors
  - You (Customer managed)
  - Service managed (AWS Shield, AWS Firewall Manager)
- Each rule group has a WCU limit that its rules can consume. Default limit is 1500 WCU per rule group.

### Rules

- Each rule contains type, conditions (AKA statement), and actions.
- Type defines what kind of rule it is.
- There are 2 types of rules:
  - Regular: Designed to match based on specific conditions (e.g., IP, string, regex, geo).
  - Rate-based: Designed to match based on specific conditions at a certain rate (e.g., an IP is trying to SSH 5,000 times in 1 minute).
- Condition (Statement): The logic or criteria the rule checks against traffic. Examples: “match requests from this IP set” or “block any IP trying to request over 5,000 in 1 minute”.
- A rule can have multiple conditions (statements) combined with logical operators (AND, OR, NOT).
- Action: What happens when the condition is met.
- Action options can be Allow, Block, Count, Captcha.
- Rate based rules doesn't have Allow action.
- Custom headers can optionally be added.
- If a request is blocked, an optional custom response can be returned.
- Rule labels: Optional tags added by a rule; subsequent rules can check for their presence to build logic. Labels are internal to WAF and never exposed to clients.
- Rules are processed in order. Allow and Block stop further evaluation, while Count and Captcha continue to the next rule.

## Logging

- Can log detailed requests to S3, Cloudwatch or Kinesis Data Firehouse.
- Logs delivered to S3 every 5 minutes. For real time logs processing, use Kinesis Data Firehouse.

## Event-driven Security response with WAF

1. Send WAF logs via Kinesis Firehose into Amazon S3.
2. Query logs with Athena to spot suspicious IPs, patterns, or spikes.
3. Trigger Lambda to update WebACL.

## Pricing

- You're charged for every WebACL.
- You're charged for each rule in each WebACL.
- You're charged for each rule group in each WebACL.
- You're charged for every requests processed by WebACL.
- Additional charges apply for certain advanced rule types/features, including:
  - Intelligent Threat Mitigation.
  - Bot Control
  - Captcha
  - Fraud Control/Account Takeover
  - Marketplace rules
