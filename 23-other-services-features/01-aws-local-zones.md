# AWS Local Zones

- Problem: An AWS Region might be far from your users or your on-premises data center, which can lead to high latency and poor performance for latency-sensitive applications.
- Solution: AWS Local Zones are a type of AWS infrastructure deployment that places compute, storage, database, and other AWS services closer to large population centers.
- Different AWS Services support Local Zones in different ways. Not all AWS services support Local Zones, and some services may have limited functionality in Local Zones.
- Local Zones supports Direct Connect.
- Local Zones link to a region called the parent region, allowing you to access to AWS services in that region. For example, EBS snapshots are stored in that region’s buckets.

## VPC with Local Zones

- VPCs can be extended to Local Zones, allowing you to create subnets in Local Zones and launch resources such as EC2 instances and EBS volumes in those subnets.
- Local Zones don't have built-in resiliency, think of it like 1 additional AZ.
