# Auto-Scaling Groups

- Auto-Scaling Groups provides auto-scaling for EC2.
- They can also be used to implement a self-healing architecture.
- Uses launch templates or configs to launch all instances.
- There can only be 1 launch configurations or 1 launch template version associated with an auto-scaling group at a time.
- Auto-scaling group has three important values: Minimum size, desired capacity, maximum size (eg 1:2:4)
- Auto-scaling keeps running instances at the DESIRED capacity by provisioning/terminating instances
- You can configure which subnets the auto-scaling group can launch instances in.
- Auto Scaling Groups will try to keep the AZs equal with the number of EC2 instances.

## Scaling Policies

- Scaling Policies are rules that define how to automatically adjust the desired capacity of an auto-scaling group.
- Scaling Policies are optional.
- Three ways you can scale auto-scaling groups:
  - Manual Scaling. Manually adjust desired capacity. Good for testing or urgent situations (e.g urgent cost control measure).
  - Scheduled Scaling. Time based adjustment. Good for predictable load changes (eg. business hours).
  - Dynamic Scaling. Rules which react to CloudWatch alarms and adjust desired capacity:
    - Simple Scaling. Often a pair of rules (1 for provision and 1 for termination): "CPU above 50%, +1. CPU below 50%, -1."
    - Stepped Scaling. Similar to simple scaling but allows for multiple steps (eg. CPU above 50%, +1. CPU above 70%, +2. CPU above 90%, +3). Generally use this over Simple unless simplicity is the priority.
    - Target Tracking. You define a desired metric value (eg. CPU 50%) and auto-scaling will try to maintain that value by adjusting the number of instances.
- Cooldown Periods: How long to wait at the end of a scaling action before doing another.

## Health checks

- ASG performs healths checks on instances.
- Self healing: If ASG detects a failed instance, it will replace the failed instance with a newly provisioned one.
- Trick: You can utilize self healing to make a simple self-healing architecture. Make an ASG with min=1, desired=1, max=1 and choose subnets in different AZs. If the instance fails, it will be replaced automatically in another AZ.

## ASG + Load Balancers

- When ASG is used with a LB, instances are automatically added to or removed from the target group as they are provisioned or terminated.
- ASG can be configured to use Load Balancer health checks instead of EC2 health checks; which make it to be application-aware (which ec2 health checks are not).

## Scaling Processes

- Think of Scaling Processes as functions that ASG can call to perform scaling actions. They can be suspended or resumed.
- Scaling processes include:
  - LAUNCH and TERMINATE: Provision and terminate instances
  - AddToLoadBalancer: Add to LB on launch
  - AlarmNotification: Whether ASG should react to CloudWatch alarms
  - AZRebalance: Balances instances evenly across all AZs
  - HealthCheck: health checks on/off
  - ReplaceUnhealthy: Replace unhealthy instances
  - ScheduledActions: Whether ASG should react to scheduled actions
  - Standby or InService: Controls whether instances are in service or in standby. Standby instances are not affected by ASG actions.

## Final points

- ASG is free.
- Only created instances are charged.
- Use cooldown periods to avoid rapid scaling (which can cost more money).
- Use smaller instance to have more granular scaling (eg. 4 t2.micro instead of 1 t2.large).
- Use ASG with LB to have an elastic architecture.
- ASG defines WHEN and WHERE to scale, launch templates/configurations define WHAT to scale.
