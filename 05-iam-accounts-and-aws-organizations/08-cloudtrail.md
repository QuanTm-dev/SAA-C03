# CloudTrail

> API activity logging service that records who did what, when, and where across your AWS account.

## Key Terms

- **Event**: Record of a single API action (who, when, what, where)
- **Trail**: Configuration defining event capture and storage (e.g., S3 bucket, CloudWatch Logs destination)

## Free Features

- **Event History**: 90 days of free management event storage (auto-enabled)
- No cost for viewing/searching recent events

## Event Types

- **Management Events**: Control plane operations (EC2 creation, IAM changes) — logged by default
- **Data Events**: Resource-level calls (S3 GetObject, PutObject) — must explicitly enable per trail
- **Insights Events**: Anomalous API activity detected by CloudTrail Insights (security issue detection)

## Delivery

- Latency: ~15 minutes (not real-time)
- Customization: Create trails to store in S3 and/or CloudWatch Logs for long-term retention

## Trail Scope

### Regional Scope

- **Single-Region Trail**: Logs only its source region (e.g., us-west-2 trail logs only us-west-2)
- **Multi-Region Trail**: Logs all regions; auto-captures events in new regions when launched (best practice)

### Global Services

- IAM, STS, CloudFront events always logged to **US East 1** (region-agnostic)
- Single-region trails: must explicitly enable global service logging
- Multi-region trails: global service events auto-captured

## Storage Destinations

- **S3**: Long-term retention and analysis
- **CloudWatch Logs**: Real-time monitoring and metric filter integration
- **Both simultaneously**: Most comprehensive coverage

## Organization Trails

- Single trail logs events for all accounts in organization
- Created in management account; applies across all regions
- Global service events still logged to US East 1
