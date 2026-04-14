# S3 Events

> Configure notifications to trigger actions when events occur in S3 buckets. Events are delivered at least once, typically within seconds.

## Supported Event Types

- Object created: Put, Post, Copy, CompleteMultipartUpload
- Object deleted: Delete, DeleteMarkerCreated
- Object restored: Restore, RestoreCompleted
- Object replication issues: OperationMissedThreshold, OperationReplicatedAfterThreshold, OperationNotTracked, OperationFailedReplication
- Object tagging, ACL changes, lifecycle transitions, Intelligent-Tiering archival

## Supported Destinations

- AWS Lambda
- Amazon SNS topics
- Amazon SQS queues (standard only; FIFO queues not supported)
- Amazon EventBridge

## How It Works

1. Configure event notification on S3 bucket, specifying event types and destination.
2. S3 sends notification to destination when event occurs.
3. Requires resource-based policy on destination to allow S3 principal to invoke it.

## When to Use EventBridge Instead

- Need to route events to SQS FIFO queues (direct S3 events don't support FIFO).
- Require advanced filtering, multiple targets, or more event types.
- Need integration with other AWS services not directly supported.
