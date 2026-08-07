# Simple Queue Service

- SQS provides a fully managed queue.
- SQS is a public service.
- SQS is highly available and performant.
- Support encryption at rest with KMS and in transit.
- Queue policy can be used to allow access from external accounts.

## SQS queue types

- There are 2 types of queue:
  - Standard:
    - Messages ordering is best effort (Meaning messages may be received out of order).
    - at-least-once delivery.
    - Can deliver near unlimited messages per second.
  - FIFO:
    - Strict First-In-First-Out ordering.
    - exactly-once delivery
    - Deliver upto 3000 messages per second with batching, or 300 messages per second without batching.
- Note: FIFO queue name must end with `.fifo`.

## SQS Messages

- Messages size can be upto 256kb.
- If the message is larger than 256kb, store the actual data somewhere else and link it to the message (e.g. put S3 object key in the message).
- Clients must poll the queue to receive a message. SQS does not actively push the message to consumers.
- When a client polls messages, the messages will be hidden for a period of time (VisibilityTimeout).
- VisibilityTimeout is the time a client can take to process a message.
- VisibilityTimeout can be configured from 0s to 12 hours. Default is 30s.
- VisibilityTimeout can be configured per queue or per message.
- If a client recieves messages on the queue and finishes on that workload it can delete the message. If the client doesn't delete the message, then it will reappear on the queue for processing after VisibilityTimeout.
- ASG can scale based on the number of messages.
- Lambda can be invoked in event driven way when messages appear on a queue.
- Messages have a retention period. It's based on the enqueue timestamp - the time when the message was added to the queue.

## How SQS is billed

- SQS billed based on the number of requests.
- A request can return 0-10 messages with upto 64kb payload.

## How to poll messages

- There are 2 ways to poll SQS queue:
  - Short: call returns immediately, even if no messages are available.
  - Long: call waits until a message arrives or the waitTimeSeconds expires. waitTimeSeconds can be configured upto 20 seconds.
- Prefer to use long polling as it uses fewer request, so lower cost.

## SQS Delay Queue

- Delay queue allows you to postpone the delivery of new messages to a queue for a number of seconds.
- Messages added to the queue will be invisible for DelaySeconds seconds.
- DelaySeconds can be configured from 0s to 15 minutes. Default is 0s.
- Message timers can be set on message level, which will override the DelaySeconds queue level setting.
- Delay queue is not supported for FIFO queues.

## SQS Dead-letter queue

- Dead-letter queues can be used to store failed-to-process messages. Teams then can inspect these messages and take different actions (e.g. re-process after deploying a fix, delete it, etc...)
- Dead-letter queue uses a redrive policy to control WHEN and WHERE to move failed messages from the source queue to the dead-letter queue.
- redrive policy allows you to configure:
  - maxReceiveCount: the number of times a message can be received before being sent to the dead-letter queue.
  - Dead-letter queue: the queue where the failed messages will be moved to.
- How it works: Every time a message is pushed to the queue, ReceiveCount will be increased by 1. If ReceiveCount exceeds maxReceiveCount and the message isn't deleted, the message will be moved to the dead-letter queue.
- Enqueue timestamp of the message is preserved when the message is moved to the dead-letter queue.
- Dead-letter queue retention period should be longer than the source queue retention period so that the failed messages can be inspected before they are deleted.
