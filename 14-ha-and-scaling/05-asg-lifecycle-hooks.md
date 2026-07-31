# ASG Lifecycle Hooks

## Overview

- Lifecycle hooks let you perform custom actions as an Auto Scaling group launches or terminates instances.
- When a lifecycle hook is configured, the ASG pauses the instance in a wait state until either:
  - The timeout period elapses (default: 1 hour), triggering a CONTINUE or ABANDON action based on configuration, or
  - You complete the lifecycle action via the `CompleteLifecycleAction` API call.
- Lifecycle hooks can integrate with SNS or EventBridge for event-driven processing.

## State Flow — Scale Out (Launch)

- Without lifecycle hook: `Pending -> InService`
- With lifecycle hook: `Pending -> Pending:Wait -> Pending:Proceed -> InService`

## State Flow — Scale In (Terminate)

- Without lifecycle hook: `Terminating -> Terminated`
- With lifecycle hook: `Terminating -> Terminating:Wait -> Terminating:Proceed -> Terminated`
