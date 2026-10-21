# Simple Notification Service (SNS)

## Overview

- Pub-sub message service
- Public AWS service
- Coordinates the sending and delivery of messages
- Used across many AWS services, including CloudWatch and CloudFormation

## Topics, publishers and subscribers

- Topics are the base entity of SNS
- Permissions and configurations are defined on the topic
- A publisher is an entity that sends messages to topics
- Each topic has subscribers, which are entities that receive messages
- Subscriber forms include HTTP(S) endpoints, Lambda functions, and others

## Message size

- Default maximum message payload is 256 KB
- Payload limit can be increased to 1 MB

## Message filtering

- By default, subscribers receive all messages sent to their topic
- Subscribers can use filters to receive only relevant messages

## Fanout pattern with SQS

- Multiple SQS queues subscribe to the same SNS topic
- Each SQS queue handles a different workload

## Delivery

- Provides message delivery status
- Provides message delivery retries

## Resilience

- Regionally resilient

## Security

- Supports SSE
- Supports cross-account access via topic policy (also known as resource policy)
