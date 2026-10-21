# Simple Queue Service (SQS)

## Overview

- Fully managed queue service
- Public service, accessed through public endpoints
- Highly available and performant
- Supports encryption at rest with KMS
- Supports encryption in transit
- Queue policy can grant access to external accounts

## Queue types

- Two queue types exist: Standard and FIFO

### Standard queues

- Message ordering is best effort, so messages may be received out of order
- At-least-once delivery
- Delivers near-unlimited messages per second

### FIFO queues

- Strict First-In-First-Out ordering within a message group
- Exactly-once delivery
- Up to 3000 messages per second with batching
- Up to 300 messages per second without batching
- Queue name must end with `.fifo`

## Messages

- Maximum message size is 1 MiB
- For larger payloads, store the data elsewhere and link it in the message (e.g. S3 object key)
- Retention period is based on the enqueue timestamp, the time the message was added to the queue

## Consuming messages

- Clients must poll the queue to receive messages
- SQS does not push messages to consumers
- Clients can delete a message after finishing its workload
- An undeleted message reappears on the queue after VisibilityTimeout
- ASG can scale based on the number of messages
- Lambda can be invoked in an event-driven way when messages appear

## Visibility timeout

- Polled messages are hidden for a period of time (VisibilityTimeout)
- VisibilityTimeout is the time a client has to process a message
- Configurable from 0s to 12 hours; default is 30s
- Configurable per queue or per message

## Polling types

- Two polling types exist: short and long

### Short polling

- The call returns immediately, even if no messages are available

### Long polling

- The call waits until a message arrives or WaitTimeSeconds expires
- WaitTimeSeconds can be set up to 20 seconds
- Preferred over short polling: fewer requests, so lower cost

## Billing

- Billed based on the number of requests
- A request can return up to 10 messages
- Payloads are billed in 64 KB chunks, each chunk counting as one request

## Delay queues

- Postpone delivery of new messages for a number of seconds
- Messages are invisible for DelaySeconds after being added
- DelaySeconds can be set from 0s to 15 minutes; default is 0s
- Message timers set per message override the queue-level DelaySeconds on standard queues
- FIFO queues support queue-level DelaySeconds
- FIFO queues do not support per-message DelaySeconds

## Dead-letter queues

- Store messages that failed to process, so teams can inspect them
- Teams can then re-process after deploying a fix, or delete the messages

### Redrive policy

- Controls WHEN and WHERE failed messages move from the source queue to the dead-letter queue
- maxReceiveCount: number of times a message can be received before moving to the dead-letter queue
- Dead-letter queue: the queue that failed messages are moved to

### How messages move

- ReceiveCount increases by 1 each time a message is received
- A message moves to the dead-letter queue when ReceiveCount exceeds maxReceiveCount and it isn't deleted
- The enqueue timestamp is preserved when the message moves
- Dead-letter queue retention should exceed the source queue's, so failed messages can be inspected before deletion
