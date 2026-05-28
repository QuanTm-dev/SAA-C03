# Enhanced Networking & EBS Optimized

## Enhanced Networking

- Enhanced networking uses SR-IOV. The physical network interface is aware of the virtualization. Each instance is given exclusive access to one part of a physical network interface card.
- Allow higher I/O and lower Host CPU utilization.
- Provides more bandwidth and higher packet per seconds (PPS)
- Consistent low latency when instances need to communicate with the network interface.
- There is no charge for this and is available on most EC2 types.

## EBS Optimized

- Historically, network on EC2 was shared with the same network stack used for both data networking and EBS storage networking. This result in contention for network resources between the two, which could lead to performance degradation.
- EBS Optimized means a dedicated network capacity for EBS storage connection.
- Most instances supports and enable EBS optimization by default.
- For some older instance types, some support but enabling cost extra.
