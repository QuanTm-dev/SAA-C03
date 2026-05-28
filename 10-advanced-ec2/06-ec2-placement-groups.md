# EC2 Placement Groups

- Placement Groups influence EC2 instance placement on hardware.
- Three types: Cluster, Spread, Partition.

## Cluster Placement Group

- Instances placed physically close together.
- Provides highest performance inside EC2.
- Must be in the same Availability Zone.
- Typically same rack or even same host.
- All members have direct connections.
- Achieves 10 Gbps single stream vs 5 Gbps normally.
- Lowest latency and maximum packets-per-second.
- Hardware failure causes entire cluster failure.
- Cannot span multiple AZs.
- First AZ used by any instances locks the cluster.
- Can span VPC peers but performance may drop.
- Requires supported instance types.
- Only way to achieve 10 Gbps single stream.
- Use cases: high performance, fast transfers, low latency.
- Best practice:
  - Use same instance type.
  - Launch all instances at once.

## Spread Placement Group

- Instances placed on distinct racks.
- Each rack has separate network and power supply.
- Provides highest availability and resilience.
- Can span multiple Availability Zones.
- Limit of 7 instances per AZ.
- More AZs allow more total instances.
- Not supported for dedicated instances or hosts.
- Use case: small number of critical instances.
- Examples: mirrors of applications, separated nodes.

## Partition Placement Group

- Designed for more than 7 instances per AZ but still want to spread them apart.
- Instances divided and grouped into partitions.
- Each partition has its own rack, network, power.
- Up to 7 partitions per AZ.
- Can span multiple Availability Zones.
- You can assign instances to partitions manually.
- AWS can also auto-assign partitions.
- Lets you see which instances belong to which partition.
- Key difference from Spread: supports more than 7 instances per AZ.
