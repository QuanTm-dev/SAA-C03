# Amazon MQ

## Overview

- AWS MQ allows you to migrate existing on-premise Message or Queueing system to AWS without rewriting code.
- Based on Apache ActiveMQ
- Is a private service
- Offers fewer AWS-native integrations than services like SQS, SNS, or EventBridge

## Messaging models

- Provides both Queueing (1-to-1) and Message (1-to-many) system.

## Deployment architectures

- Support both **Single Instance** and **Active-Standby (Like RDS)** architecture.
- In **Active-Standby (Like RDS)** architecture, use EFS for shared storage between Active and Standby instance.

## AWS MQ vs SQS + SNS: When to use which?

- New applications: SQS + SNS.
- Native AWS services integration: SQS + SNS.
- Migrate from an existing system with no code rewrite: AWS MQ.
- Need JMS, AMQP, MQTT, OpenWire, STOMP protocols: AWS MQ.
