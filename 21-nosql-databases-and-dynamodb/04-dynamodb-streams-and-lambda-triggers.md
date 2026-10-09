# DynamoDB - Streams & Lambda Triggers

## DynamoDB Streams

- DynamoDB Streams is a feature that captures changes to items in a DynamoDB table and stores them chronologically in a stream for up to 24 hours.
- It uses Kinesis Streams under the hood.
- Needs to be enabled on a per-table basis.
- Records Insert, Update, and Delete operations.
- View types define what information is added to the stream:
  - KEYS_ONLY: Only the key attributes of the modified item.
  - NEW_IMAGE: The entire item, as it appears after it was modified.
  - OLD_IMAGE: The entire item, as it appeared before it was modified.
  - NEW_AND_OLD_IMAGES: Both the new and the old images of the item.

## Lambda Triggers

- Lambda can be integrated with DynamoDB Streams to provide a serverless Database Trigger.
- Common use cases include:
  - Reporting and analytics
  - Data aggregation (e.g., counting the number of items in a table)
  - Messaging and notifications (e.g., sending an email when a new item is added)
