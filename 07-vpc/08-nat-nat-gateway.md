# Network Address Translation (NAT) & NAT Gateway

## What is NAT?

- Refer to [03-tech-fundamentals/02-other-networking/01-nat.md](../03-tech-fundamentals/02-other-networking/01-nat.md) for a detailed explanation of NAT.
- Network Address Translation translates private IP addresses to public IP addresses to overcome IPV4 shortages and improve security by hiding internal addresses.
- NAT gives private CIDR range **outgoing** access to the internet.
- IP masquerading: A process of hiding a CIDR blocks behind 1 IP.
- AWS has 2 ways to provide NAT services:
  - NAT Gateway (managed by AWS)
  - NAT Instance (self-managed EC2 instance)

## Problems

- Animal4Life needs to run software updates on their private app subnet, which requires internet access.
- We can't make the app subnet public by assigning it a public IP address, because we want to keep it private for security reasons.
- We can host a private software update server in the public subnet, but this adds complexity and maintenance overhead.

## Solution: NAT Gateway

1. We create a NAT Gateway in the public subnet, which will have a public IP address.
2. We update the route table of the private app subnet to route internet-bound traffic to the NAT Gateway.
3. NAT Gateway will translate the private source IP addresses of the app subnet to its public IP address and store some information about the connection (e.g., source IP, destination IP, port numbers) in a translation table. This allows the NAT Gateway to route return traffic back to the correct private IP address in the app subnet.
4. The packet is moved from NAT to Internet Gateway, which sends it to the internet.

## NAT Gateway characteristics

- It needs to be in a public subnet to have a public IP address.
- NAT Gateway uses elastic IP addresses, which are static.
- NAT Gateway is AZ resilient.
- For region resilience, deploy 1 NAT Gateway in each AZ and update route tables accordingly.
- NAT Gateway is a managed service, so AWS handles maintenance, scaling, etc...
- NAT Gateway can scale up to 45 Gbps. If you need more bandwidth, you can deploy multiple NAT Gateways and use route tables to distribute traffic between them. For example, you can have 2 NAT Gateways in the same AZ, split heavy consumers into 2 private subnets, and route each subnet to a different NAT Gateway. This way, you can achieve up to 90 Gbps of bandwidth for your private subnets.
- NAT Gateway is hourly billed. Less than an hour of usage is billed as 1 hour.

## NAT Gateway vs NAT Instance

| Attribute       | NAT Gateway                                                                                                                                                                       | NAT Instance                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Availability    | Highly available. NAT gateways in each Availability Zone are implemented with redundancy. Create a NAT gateway in each Availability Zone to ensure zone-independent architecture. | Failed if hardware, storage, or network failed. Need to manage failover manually.                                    |
| Bandwidth       | Can scale up to 45 Gbps.                                                                                                                                                          | Depends on the bandwidth of the instance type.                                                                       |
| Maintenance     | Managed by AWS. You do not need to perform any maintenance.                                                                                                                       | Managed by you, for example, by installing software updates or operating system patches on the instance.             |
| Performance     | Software is optimized for handling NAT traffic.                                                                                                                                   | A generic Amazon Linux AMI that's configured to perform NAT.                                                         |
| Cost            | Charged depending on the number of NAT gateways you use, duration of usage, and amount of data that you send through the NAT gateways.                                            | Charged depending on the number of NAT instances that you use, duration of usage, and instance type and size.        |
| Type and size   | Uniform offering; you don’t need to decide on the type or size.                                                                                                                   | Choose a suitable instance type and size, according to your predicted workload.                                      |
| Security groups | Cannot be associated with a NAT gateway. You can associate security groups with your resources behind the NAT gateway to control inbound and outbound traffic.                    | Associate with your NAT instance and the resources behind your NAT instance to control inbound and outbound traffic. |
| Network ACLs    | Use a network ACL to control the traffic to and from the subnet in which your NAT gateway resides.                                                                                | Use a network ACL to control the traffic to and from the subnet in which your NAT instance resides.                  |
| Flow logs       | Use flow logs to capture the traffic.                                                                                                                                             | Use flow logs to capture the traffic.                                                                                |
| Port forwarding | Not supported.                                                                                                                                                                    | Manually customize the configuration to support port forwarding.                                                     |
| Bastion servers | Not supported.                                                                                                                                                                    | Use as a bastion server.                                                                                             |

### Note about NAT Instances

- By default, EC2 discards any traffics whose source or destination IP address is not the same as the instance's private IP address. This means that if you use a NAT Instance, you need to disable source/destination checks on the instance to allow it to forward traffic from the private subnet to the internet.

## What about IPV6?

- NAT is not required for IPV6 because it has a much larger address space, eliminating the need for address translation. IPV6 is also public by default.
- NAT Gateway does not support IPV6.
- For IPV6, you can use an egress-only internet gateway to only allow outbound internet access.
