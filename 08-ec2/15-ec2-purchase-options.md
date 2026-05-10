# EC2 Purchase Options

Different ways to pay for EC2 instances based on usage patterns and commitment level.

## On-Demand

- Default option
- Pay per second while running.
- Run on shared hardware.
- No interruption, no upfront payment, no capacity guarantee.
- Associated resources (like EBS) billed separately.
- Best for short-term, unknown, or non-interruptible workloads.

## Spot

- Up to 90% discount vs On-Demand pricing (based on spare capacity).
- You set maximum price; instance terminates if Spot price exceeds it.
- Charged only the actual Spot price (not your maximum price).
- Best for workloads that tolerate interruption: batch jobs, distributed tasks, burst capacity, cost-sensitive apps.

## Reserved Instances (Standard Reserved Instances)

- Commit to 1 or 3 years for specific instance type + region/AZ to get discount.
- Discount applied when launched instance matches reservation
- Unused reservations still charged.
- Partial instance size coverage: Smaller reservation can apply to portion of larger instance.
- Regional reservation provides billing discount but no capacity guarantee.
- Zonal reservation provides capacity guarantee and billing discount, but only apply for instances launched in the same AZ.
- Three payment options:
  - **All Upfront**: Highest discount; full payment at start.
  - **Partial Upfront**: Medium discount; pay portion upfront, rest at reduced hourly rate.
  - **No Upfront**: Lowest discount; discounted hourly rate for entire term.
- Best for predictable, long-term workloads.

## Dedicated Hosts

- Pay for entire physical host; no additional per-second charge per instance.
- You manage host capacity;
- Cannot launch instances if host capacity unavailable.
- Host Affinity: Instances always run on same specific host.
- Best for applications with socket/core licensing (Windows Server, Red Hat Enterprise Linux).

## Dedicated Instances

- Run on dedicated EC2 host; other customers cannot use the same host.
- Per-instance billing at higher rate than On-Demand.
- Difference from Dedicated Hosts: Dedicated Hosts allow you to specify the host you launch instances on.
- Best for compliance requirements without needing host-level control.

## Scheduled Reserved Instances

- You specify the frequency (e.g., daily, weekly), start time, and duration of the instance. You're charged with slightly lower rates when the instance is running.
- **DEPRECATED**

## Capacity Reservations

- Reserve compute capacity in a specific Availability Zone.
- Charged at full on-demand rates
- Unused capacity incurs charges whether used or not.
- Two variants:
  - **Immediate-use**: Starts immediately, no commitment, cancel anytime.
  - **Future-dated**: Starts at specified future date, commitment duration applies; can't cancel during commitment but can modify after.
- Best for: Workloads that require guaranteed capacity.

## EC2 Savings Plans

- Commit to a consistent hourly usage amount (measured in $/hour) for 1 or 3 years to receive a discount on EC2 instance usage.
- Two types with different discount levels:
  - **Compute Savings Plans**: Up to 66% off. Provides flexibility to switch between instance types, regions, and even services (EC2, Fargate, Lambda) while still receiving the discount.
  - **EC2 Instance Savings Plans**: Up to 72% off. Applies to specific instance family within a region.
- Charged at savings plan rate when usage matches the commitment. Otherwise, charged at on-demand rates.
