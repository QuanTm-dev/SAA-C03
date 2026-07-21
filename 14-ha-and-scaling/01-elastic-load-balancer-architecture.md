# Elastic Load Balancer Architectures

- Before using ELB, you need to decide:
  - Whether you want to use only IPV4 or dual-stack (IPV4 and IPV6) for your load balancer.
  - The AZs that the ELB will use. Specifically, 1 subnet in 2 or more AZs.
- After created, ELB places 1 or more ELB nodes in the subnets you specified in each AZ. The nodes are scaled with load.
- Each ELB has a DNS name (A record) that resolves to the IP addresses of the ELB nodes. The DNS name is used by clients to access the load balancer.
- ELB can be public (internet-facing) or private (internal). Public ELBs have public IP addresses and can be accessed from the internet. Private ELBs have private IP addresses and can only be accessed from within the VPC.
- ELB Nodes are configured with listeners which accept incoming traffic on specific ports and protocols. The listeners then forward the traffic to the target groups on the specified ports and protocols.
- ELB can access both public and private EC2 instances.
- ELB Nodes needs 8 or more free IP addresses in the subnet they're deployed into.
- A /28 subnet is the minimum size for an ELB but a /27 or larger subnet is recommended to allow for scaling.
- ELBs allow easy scaling without downtime because the internal services are abstracted away from the clients. The clients are not aware of how the internal services are scaled or changed. The clients only see the ELB DNS name.
- An application with multiple tiers (web, application, database) can have multiple ELBs. This allow independent scaling.

## Cross-Zone Load Balancing

- Problem: If you have multiple AZs, the ELB nodes in each AZ will only route traffic to the targets in the same AZ. This can lead to uneven distribution of traffics. For example, if AZ A has 4 target instances and AZ B has 1 target instance, when ELB distributes traffic, AZ A will receive 50% of the traffic and AZ B will receive 50% of the traffic. The traffic in AZ A will be distributed among 4 instances (about 12.5% traffic per instance), while the traffic in AZ B will be distributed to only 1 instance (which remains 50% of the traffic).
- Solution: Cross-Zone Load Balancing allows ELB nodes in each AZ to route traffic to targets in all AZs.
- Application Load Balancer (ALB) has Cross-Zone Load Balancing enabled by default.
