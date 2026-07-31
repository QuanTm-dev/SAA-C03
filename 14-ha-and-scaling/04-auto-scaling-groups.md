# Auto-Scaling Groups

## Core concepts

- Auto-Scaling Groups (ASG) provide auto-scaling for EC2.
- Can be used to implement a self-healing architecture.
- Launches instances using a launch template.
- An ASG can only be associated with one specific launch template version, at a time.
- Three key values define an ASG: minimum size, desired capacity, maximum size (e.g. 1:2:4).
- ASG keeps running instances at the DESIRED capacity by provisioning/terminating instances.
- You can configure which subnets the ASG launches instances into.
- ASG tries to keep instance counts balanced across AZs (via the AZRebalance process).

## Scaling Policies

- Scaling policies are rules that define how to automatically adjust an ASG's desired capacity.
- Scaling policies are optional.
- Three ways to scale an ASG:
  - **Manual Scaling** — manually adjust desired capacity. Good for testing or urgent situations (e.g. urgent cost control).
  - **Scheduled Scaling** — time-based adjustment. Good for predictable load changes (e.g. business hours).
  - **Dynamic Scaling** — reacts to CloudWatch alarms and adjusts desired capacity:
    - **Simple Scaling** — a pair of rules (one to provision, one to terminate), e.g. "CPU above 50%, +1. CPU below 50%, -1."
    - **Step Scaling** — like simple scaling but with multiple thresholds/steps (e.g. CPU above 50%, +1; CPU above 70%, +2; CPU above 90%, +3). Prefer this over simple scaling unless simplicity is the priority.
    - **Target Tracking** — define a target metric value (e.g. CPU 50%) and ASG maintains it by adjusting instance count.
- **Cooldown periods** — how long to wait after a scaling action before allowing another.

## Health Checks

- ASG performs health checks on instances.
- Self-healing: if an instance fails its health check, ASG replaces it with a newly provisioned one.
- Trick: build a simple self-healing single-instance architecture with min=1, desired=1, max=1, using subnets across multiple AZs. If the instance fails, ASG replaces it automatically in another AZ.

## ASG + Load Balancers

- When used with a load balancer, instances are automatically added to or removed from the target group as they're provisioned or terminated.
- ASG can be configured to use load balancer health checks instead of EC2 health checks — this makes health checks application-aware, which EC2 health checks alone are not.

## Scaling Processes

- Think of scaling processes as functions ASG calls to perform scaling actions. Each can be suspended or resumed independently.
- Processes include:
  - **Launch / Terminate** — provision and terminate instances.
  - **AddToLoadBalancer** — add newly launched instances to the LB.
  - **AlarmNotification** — whether ASG reacts to CloudWatch alarms.
  - **AZRebalance** — balances instances evenly across all AZs.
  - **HealthCheck** — turns health checks on/off.
  - **ReplaceUnhealthy** — replaces unhealthy instances.
  - **ScheduledActions** — whether ASG reacts to scheduled actions.
  - **InstanceRefresh** — terminates and replaces instances as part of an instance refresh (e.g. rolling out a new launch template version).
- Instances can be set to **Standby** or **In Service**. Standby instances are excluded from ASG actions.

## Cost & Practical Notes

- ASG itself is free — you're only billed for the instances it creates.
- Use cooldown periods to avoid rapid scaling (which can drive up cost).
- Prefer smaller instances for more granular scaling (e.g. 4x t2.micro instead of 1x t2.large).
- Pair ASG with a load balancer for an elastic architecture.
- Mental model: ASG decides **WHEN** and **WHERE** to scale; the launch template/configuration defines **WHAT** gets launched.
