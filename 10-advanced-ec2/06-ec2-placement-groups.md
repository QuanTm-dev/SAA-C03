# EC2 Placement Groups

- EC2 Placement Groups are a feature that allows you to influence the placement of your EC2 instances on the underlying hardware.
- There are 3 types of placement groups:
  - Cluster
  - Spread
  - Partition

## Cluster Placement Group

- Designed so that instances within the same cluster are physically close together.

- Achieves the highest level of performance possible inside EC2.

- Best practice is to launch all of the instances within that group at the same time. If you launch with 9 instances and AWS places you in a place with capacity for 12, you are now limited in how many you can add.

- Cluster placements need to be part of the same AZ. Cluster placement groups are generally the same rack, but they can even be the same EC2 host.

- All members have direct connections to each other. They can achieve 10 Gbps single stream vs 5 Gbps normally. They also have the lowest latency and max packets-per-second (PPS) possible in AWS.

- If the hardware fails, the entire cluster will fail.

- Clusters can't span AZs. The first AZ used by any instances will lock down the cluster.
- They can span VPC peers but might impact performance.
- Not all instance types are supported, requires a supported instance type.
- Best practice to use the same type of instance (not mandatory).
- Best practice to launch all instances at once (not mandatory).
- This is the only way to achieve 10Gbps SINGLE stream performance.
- Use cases: Performance, fast transfer speeds, and low consistent latency.

## Spread Placement Group

- Instances spread apart

- This provides the best resilience and availability. Spread groups can span multiple AZs. Instances will be put on distinct racks with their own network or power supply. There is a limit of 7 instances per AZ. The more AZs in a region, the more instances inside a spread placement group.

- Provides the highest level of availability and resilience.

- Each instance by default runs from a different rack.
- 7 instances per AZ is a hard limit.

- Not supported for dedicated instances or hosts.

- Use case: small number of critical instances that need to be kept separated from each other. Several mirrors of an application; different nodes of an application; etc.

## Partition Placement Group

- Groups of instances spread apart.
- Designed for when you have more than 7 instances per AZ but still want to spread them apart.
- Can be created across multiple AZs.
- Instances are divided into groups called partitions. Each partition has its own rack, so distinct network and power source. You can have up to 7 partitions per AZ.
- Key differences between spread and partition:
  - You can have more than 7 instances per AZ.
  - You can choose which partition to place an instance in (but you can also let AWS choose for you).
- Partition Placement Group allows you to see which instances are in which partition.
