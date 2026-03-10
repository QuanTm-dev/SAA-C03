## What is CloudTrail?

- CloudTrail logs API actions performed on AWS resources and services.

## Key Terms

- **CloudTrail Event**: A record of an API action captured by CloudTrail (includes who, when, what, and where).
- **CloudTrail Trail**: A configuration that determines how CloudTrail captures and stores events (e.g., which S3 bucket to use).

## CloudTrail Essentials

- **Default Event History**: 90 days of management events stored free in CloudTrail Event history (automatically enabled).
- **Trails**: Customize CloudTrail by creating trails to store events in S3 and/or CloudWatch Logs for long-term retention.

### Event Types

- **Management Events**: Actions performed on AWS resources, AKA control plane operations (e.g., EC2 instance creation, IAM policy changes). **Logged by default**.
- **Data Events**: Resource-level API calls within a resource (e.g., S3 GetObject, PutObject). **Must be explicitly enabled per trail**.
- **Insights Events**: Unusual or anomalous API activity detected by CloudTrail Insights (to help identify security issues).

### Delivery Latency

- CloudTrail typically delivers events within 15 minutes (not real-time).

## Trails

### Regional Scope

- **Single Region Trail**: Logs events only for the region it's created in (e.g., a trail in us-west-2 logs only us-west-2 events).
- **Multi-Region Trail**: Logs events for all regions in the account (choose during trail creation). Allows you to capture all events across new regions automatically.

### Global Services

- Global service events (IAM, STS, CloudFront) are logged to the **US East 1 region** regardless of where the resource is used.
- Best practice: Create a multi-region trail to ensure all events (including global services) are captured.
- Multi-region trails automatically log global service events, single-region trails need to have global service logging explicitly enabled.

### Storage Destinations

- Store CloudTrail events in **S3 buckets** (for long-term retention and analysis).
- Send events to **CloudWatch Logs** (for real-time monitoring and metric filters).
- Use both destinations simultaneously for comprehensive logging.

### Organization Trails

- Log events for all accounts in an AWS Organization from a single management account trail.
- Create in the management account and apply to all regions.
- Global service events are still logged to US East 1.
