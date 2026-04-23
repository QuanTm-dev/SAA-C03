# Network Address Translation (NAT) & NAT Gateway

> NAT Gateways enable private subnets to access the internet while remaining private. They are managed, highly available, and support bandwidth up to 100 Gbps.

## What is NAT?

Refer to [03-tech-fundamentals/02-other-networking/01-nat.md](../03-tech-fundamentals/02-other-networking/01-nat.md) for NAT fundamentals.

- Translates private IP addresses to public IP addresses (overcomes IPv4 shortages, hides internal addresses).
- Provides **outgoing** internet access for private CIDR ranges.
- IP masquerading: hides a CIDR block behind a single IP.

## AWS NAT Options

- **NAT Gateway**: Managed by AWS; recommended for most use cases.
- **NAT Instance**: Self-managed EC2 instance; legacy alternative.

## NAT Gateway Architecture

Animal4Life scenario: private app subnet needs internet access for software updates without being public.

**Solution**:

1. Deploy NAT Gateway in public subnet (has public IP).
2. Update private subnet's route table to send internet-bound traffic to NAT Gateway.
3. NAT Gateway translates source IPs (private → public), stores connection information to route return traffic, and forwards packets to the IGW.
4. Internet Gateway routes packets to/from the internet.

## Key Characteristics

**Placement & Resilience**

- Must be in a public subnet.
- AZ-resilient: redundant within a single AZ.
- For multi-AZ resilience: deploy one NAT Gateway per AZ with route tables routing traffic to the NAT in each AZ.

**Performance & Scaling**

- Initial bandwidth: 5 Gbps; automatically scales up to 100 Gbps.
- For additional bandwidth: deploy multiple NAT Gateways in different subnets; route different subnets to different gateways.
- Supports 1 million packets/second; scales to 10 million packets/second.
- Supports up to 55,000 simultaneous connections per IPv4 address (can associate up to 8 IP addresses per gateway).

**Operational**

- Managed by AWS: no maintenance required.
- Uses Elastic IP addresses (static).
- Charged per hour + per gigabyte of data processed.

**IP Version Support**

- Supports IPv4 directly.
- Supports IPv6 via NAT64 and DNS64 (enables IPv6 clients to reach IPv4 services).
- For IPv6 outbound-only access: use egress-only internet gateway instead.

## NAT Gateway vs NAT Instance Comparison

| Attribute       | NAT Gateway                                                                             | NAT Instance                                                                            |
| --------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Availability    | Highly available with redundancy in each AZ. Create one per AZ for multi-AZ resilience. | Requires manual failover if instance fails due to hardware, storage, or network issues. |
| Bandwidth       | 5 Gbps baseline; scales automatically to 100 Gbps.                                      | Depends on the bandwidth of the instance type.                                          |
| Maintenance     | Managed by AWS; no maintenance required.                                                | Managed by you (OS patches, software updates, security hardening).                      |
| Performance     | Software optimized for NAT traffic.                                                     | Generic AMI configured for NAT; performance varies by instance type.                    |
| Cost            | Hourly charge + per GB of data processed.                                               | Hourly charge + instance type/size costs.                                               |
| Type and size   | Uniform offering; no decisions needed.                                                  | Must choose instance type and size based on workload.                                   |
| Security groups | Cannot associate SGs with NAT Gateway; associate with resources behind it.              | Associate SGs with NAT instance and resources behind it.                                |
| Network ACLs    | Use NACLs for the subnet containing the NAT Gateway.                                    | Use NACLs for the subnet containing the NAT instance.                                   |
| Flow logs       | Use flow logs to capture the traffic.                                                   | Use flow logs to capture the traffic.                                                   |
| Port forwarding | Not supported.                                                                          | Manually customize to support port forwarding.                                          |
| Bastion servers | Not supported.                                                                          | Can be used as a bastion server.                                                        |

### NAT Instance Source/Destination Check Requirement

- By default, EC2 discards any traffics whose source or destination IP address is not the same as the instance's private IP address, so you must **disable source/destination checks** on the NAT instance.

## What about IPv6?

- IPv6 has a much larger address space and does not require address translation.
- NAT Gateway supports IPv6 via NAT64 and DNS64, enabling IPv6 clients to communicate with IPv4 services.
- For IPv6 outbound-only access without NAT Gateway, use an egress-only internet gateway.
