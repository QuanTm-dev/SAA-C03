# CloudWatchEvents and EventBridge

- CloudWatchEvents delivers near real time stream of system events that describe changes in AWS products and services.
- EventBridge: Think of its like CloudWatch Event v2. They share the same architecture and API, but EventBridge has more features compared to CloudWatch Event. EventsBridge can also handle events from third parties or applications beside AWS Services.
- AWS is now encouraging a migration to EventBridge.

## Key concepts

- Both services can observe if X happens, or at Y time(s), do Z
- Event Bus: A stream of events which occur from an AWS Service or application.
- Both services have a default Event bus for a particular AWS account.
- In CW Events, there is only one bus (implicit), this is not visible to the users.
- EventBridge can have additional event buses, either for AWS Services or your applications.
- Rules are used to match incoming events from event bus or schedules:
  - Event Pattern Rule: Matches an event, then forward that event to the destinations.
  - Scheudle Rule: Matches a schedule, then deliver a time event to the destinations.
- Events can be sent to 1 or more destinations.
