# CloudWatch Events and EventBridge

## Overview

- CloudWatch Events delivers a near real-time stream of system events describing changes in AWS services
- EventBridge is effectively CloudWatch Events v2
- Both services share the same architecture and API
- EventBridge has more features than CloudWatch Events
- AWS now encourages migrating to EventBridge

## Core capabilities

- Both services react to events: if X happens, do Z
- Both services react to schedules: at Y time(s), do Z

## Event sources

- CloudWatch Events handles events from AWS services
- EventBridge also handles events from third parties

## Event buses

- An event bus is a stream of events from an AWS service or application
- Both services have a default event bus per AWS account
- AWS service events are delivered only to the default event bus

### CloudWatch Events

- Has only one event bus: the default bus
- The bus is implicit and not visible to users

### EventBridge

- Supports additional event buses beyond the default bus
- Custom event buses carry events from your own applications
- Partner event buses carry events from SaaS partners

## Rules

- Rules match incoming events from an event bus, or match schedules
- A rule can send events to one or more destinations
- There are two types of rules: event pattern rules and schedule rules

### Event pattern rule

- Matches an incoming event
- Forwards the matched event to the destinations

### Schedule rule

- Matches a schedule
- Delivers a time event to the destinations
