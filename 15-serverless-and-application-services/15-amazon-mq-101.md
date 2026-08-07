# Amazon MQ 101

- AWS MQ allows you to migrate existing on-premise Message or Queueing system to AWS without rewriting code.
- AWS MQ is an opensource message broker.
- AWS MQ is based on Apache ActiveMQ.
- Provides both Queueing (1-to-1) and Message (1-to-many) system.
- Support both **Single Instance** and **Active-Standby (Like RDS)** architecture.
- In **Active-Standby (Like RDS)** architecture, use EFS for shared storage between Active and Standby instance.
- AWS MQ is a private service.
- Does not support native integration with other AWS services.

## AWS MQ vs SQS + SNS: When to use which?

- New applications: SQS + SNS.
- Native AWS services integration: SQS + SNS.
- Migrate from an existing system with no code rewrite: AWS MQ.
- Need JMS, AMQP, MQTT, OpenWire, STOMP protocols: AWS MQ.
