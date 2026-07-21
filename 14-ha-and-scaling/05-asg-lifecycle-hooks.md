# ASG Lifecycle Hookss

- Lifecyle hooks allow you to perform custom actions as the Auto Scaling group launches or terminates instances.
- When a lifecycle hook is configured, the Auto Scaling group pauses the instance launch or termination process and puts the instance into a wait state until 1 of 2 following occurs:
  - The lifecycle hook times out after the specified timeout period (Default is 1 hour). Then either CONTINUE or ABANDON action is taken based on the configuration.
  - You complete the lifecycle action using the `CompleteLifecycleAction` API call.
- Lifecycle hooks can be integrated with SNS or EventBridge to perform event driven processing.
- Scale out state flow:
  - Without lifecycle hook: Pending -> InService
  - With lifecycle hook: Pending -> Pending:Wait -> Pending:Procceed -> InService
- Scale in state flow:
  - Without lifecycle hook: Terminating:Wait -> Terminated
  - With lifecycle hook: Terminating -> Terminating:Wait -> Terminating:Procceed -> Terminated
