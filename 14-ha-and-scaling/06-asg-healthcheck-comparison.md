# ASG HealthCheck Comparison

- There are 3 types of health checks that can be used with ASG:
  - EC2 Health Checks (default)
  - ELB Health Checks (can be enabled)
  - Custom Health Checks (eg. Lambda)

- EC2 Health Checks:
  - Any of the following instance states will mark it as unhealthy: Stopping, Stopped, Terminated, Shutting down, or Impaired.
  - Mental model: if the instance does not pass 2/2 EC2 status checks, it will be marked as unhealthy.

- ELB Health Checks: The instance needs to be running and pass the ELB health check to be considered healthy.

- Custom Health Checks: Instances are marked as healthy or unhealthy by an external system.

- Health check grace period: The time that ASG waits before marking an instance as unhealthy.
  - Default is 300 seconds (only applies when the ASG is created via the AWS Console).
  - Used to wait for system launch, bootstrapping, application start, etc. before marking the instance as unhealthy.
