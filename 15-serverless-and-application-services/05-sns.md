# Simple Notification Service

- SNS is a pub-sub message service.
- SNS is a public AWS service.
- SNS job is coordinating the sending and delivery of messages.
- Messages are payload with < 256kb in size.
- SNS topics are the base entity of SNS. This is where permissions and configurations are defined.
- Publisher is an entity sending messages to topics.
- Each topics have subcribers which are entities receiving messages.
- Subcribers can have different forms including: HTTP(S), Lambda functions,...
- SNS is used across many AWS Services including CloudWatch, CloudFormation,...
- By default, subcribers receive all messages sent to the topic they subcribe to. Subcribers can use filters to receive only the relevant messages.
- Fanout pattern can be applied for SNS and SQS: Multiple SQS topics subcribe to the same SNS topic, each SQS topic handle a different workload.
- SNS provides the message delivery status.
- SNS also provides message delivery retries.
- SNS is regional resilient.
- SNS supports SSE.
- SNS supports cross-account via Topic policy (AKA resource policy).
