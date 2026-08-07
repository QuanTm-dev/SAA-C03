# Step Functions

## Problems with Lambda

- Lambda functions are not designed for long running applications.
- We could work around this by using chain functions - which is calling another function after one reaches the end.
- Developers have to write "glue code" (AKA orchestration logic) to:
  - Call Lambda A
  - Wait for the result
  - Call Lambda B
  - Handle failures
  - Retry operations
  - Branch based on business rules
  - Track workflow progress
- As applications grow, the code becomes difficult to maintain and debug.

## Why Step Functions are needed?

- Step functions solve the problems by handling the orchestration logic for you and let you focus on the business logic.
- Mental model: You define WHAT the orchestration logic is, Step Functions handle HOW to do it.

## Core concepts

- Step functions lets you create State machines.
- State machine is a workflow definition. It has Start and End point, in between there are States.
- State is a step in a workflow.
- State machines can be triggered by different ways. For example: Lambda, API Gateway, EventBridge
- You can use Amazon States Language (ASL) to create and export State machines.
- State Machine use IAM Role to interact with other AWS services.

## Standard vs Express Workflows

- There are 2 types of Step Function workflows:
  - Standard
  - Express

### Standard

- Default workflow
- Long-running (up to 1 year)
- Provides exactly-once execution semantics: Each step is guaranteed to run only once, even if there are retries or failures.
- Suitable for long running workload

### Express

- Short-lived (up to 5 minutes)
- Provides at-least-once execution semantics: Each step is guaranteed to run at least once, but may run more than once in certain failure or retry scenarios.
- Higher throughput and lower cost per call than Standard.
- Optimized for high-volume, event-driven workloads like streaming data, IoT, or lightweight microservice orchestration.

## States

- Succeed / Fail: Execution continues once either success or failure is reached.
- Wait: Pauses until a specified date, time, or duration has passed.
- Choice: Branches into different paths based on input conditions.
- Parallel: Creates multiple branches that run concurrently.
- Map: Iterates over a list of items and applies the same logic to each.
- Task: Represents a single unit of work.
