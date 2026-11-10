# AWS Config

- AWS Config is a service that monitor and evaluate the configurations changes of AWS resources overtime.
- AWS Config is a regional service.
- It can support cross-region and cross-account.

## Core concepts

- Configuration Items: Snapshots of resource configurations at a point in time.
- Configuration History: Collection of all CIs for a given resource over time.
- Config Rules: Rules that evaluate resource compliance. Can be AWS-managed or Custom (using Lambda).

## How it works

### Configuration tracking

- Every time a supported resource changes, AWS Config creates a configuration item.
- It keeps a configuration history for each resource over time.
- The data is stored in an S3 delivery bucket, which can be reviewed from the S3 console.

### Compliance evaluation

- Config rules evaluate whether resources meet defined conditions.
- Non-compliant resources are flagged for review and remediation.
- AWS Config checks for compliance, but it does not prevent changes from happening.

### Monitoring and notifications

- Resource changes can trigger SNS notifications or EventBridge events.
