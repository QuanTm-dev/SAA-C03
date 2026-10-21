# AWS Step Functions

## Problems with Lambda

- Lambda functions are not designed for long-running applications
- Workaround: chain functions, where one function calls another when it reaches the end
- Chaining forces developers to write "glue code" (AKA orchestration logic) to:
  - Call Lambda A
  - Wait for the result
  - Call Lambda B
  - Handle failures
  - Retry operations
  - Branch based on business rules
  - Track workflow progress
- As applications grow, glue code becomes difficult to maintain and debug

## Why Step Functions are needed

- Step Functions handles the orchestration logic for you
- You focus on the business logic
- Mental model: you define WHAT the orchestration logic is, Step Functions handles HOW to do it

## Core concepts

- Step Functions lets you create state machines
- A state machine is a workflow definition
- A state machine has a start and an end point, with States in between
- A state is a step in a workflow
- State machines can be triggered by Lambda, API Gateway, or EventBridge
- Amazon States Language (ASL) is used to create and export state machines
- State machines use an IAM role to interact with other AWS services

## Standard vs Express workflows

- Step Functions has two workflow types: Standard and Express

### Standard

- Default workflow type
- Long-running: executions can last up to 1 year
- Suitable for long-running workloads
- Provides exactly-once execution semantics: Each step is guaranteed to run only once unless Retry behavior is specified.

### Express

- Short-lived: executions can last up to 5 minutes
- Asynchronous Express provides at-least-once execution semantics: a step may run more than once.
- Synchronous Express provides at-most-once execution semantics: a step will run at most once, but may not run at all if the execution is throttled or fails to start.
- Higher throughput than Standard
- Lower cost per call than Standard
- Optimized for high-volume, event-driven workloads
- Typical use cases: streaming data, IoT, lightweight microservice orchestration

## States

- Task: represents a single unit of work
- Choice: branches into different paths based on input conditions
- Parallel: creates multiple branches that run concurrently
- Map: iterates over a list of items and applies the same logic to each
- Wait: pauses until a specified date, time, or duration has passed
- Succeed / Fail: End the execution with a success or failure state
