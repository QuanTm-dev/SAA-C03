# VPC Routing, Internet Gateway, and Bastion Host

## VPC Router

- Every VPC has a router that routes traffic between subnets and to the internet.
- VPC run on all AZs in the region, so the router is highly available.
- The router has a network interface in each subnet, and it routes traffic based on the routing table associated with each subnet, the `address + 1` address.
- By default, without other configurations, the router is used to route traffic between subnets.
- The router use route tables to determine where to send traffic. Each subnet must be associated with a route table, which contains rules that specify how to route traffic.
- VPC has a main route table. If no specific route table is associated with a subnet, the main route table is used by default.
- 1 subnet can only be associated with 1 route table, but a route table can be associated with multiple subnets.

### How VPC routing works

1. A packet is sent from an instance in a subnet.
2. The packet is sent to the router, which checks the routing table associated with the subnet to determine where to send the packet.
3. The router checks the routing table for a matching route. If a match is found, the router forwards the packet to the specified destination.

**Matching priority**: The router checks the routing table in the following order (Higher CIDR prefix length has higher priority):

1. Local routes (routes for the VPC itself)
2. Specific routes (routes for a particular destination)
3. Default route (route for all other destinations)

- A route table always has a local route for the VPC IPV4 CIDR block.
- If IPV6 is enabled, there will also be a local route for the VPC IPV6 CIDR block.

## Internet Gateway (IGW)

- IGW is a service attached to a VPC that allows communication between instances in the VPC and the internet or AWS public zone.
- IGW is regional resilient.
- 1 IGW can be attached to only 1 VPC, and a VPC can have only 1 IGW attached.
- IGW runs from AWS public zone
- AWS managed IGW performance.

### Using IGW

1. Create an IGW.
2. Attach the IGW to the VPC.
3. Create a custom route table.
4. Associate the route table with a subnet.
5. Add a default route which points to the IGW in the route table.
6. Allocate an IPV4 to the instances in the subnet.

### IPV4 addresses with IGW

- **IMPORTANT**: IPV4 allocated to an instance, the IPV4 is not configured in the instance OS, a record is added to the IGW, which map private IP to public IP.

- **IMPORTANT**: IPV6 by default is public, so the instance OS is configured with the public IPV6 address, and there is no mapping in the IGW.

#### How it works?

- Outbound traffic from the instance to the internet:
  1. The instance sends a packet to the router
  2. The router checks the routing table and forwards the packet to the IGW.
  3. The IGW checks its mapping table for the private IP address of the instance and replaces it with the public IP address before sending it to the internet.
- Inbound traffic from the internet to the instance:
  1. The IGW receives a packet from the internet with the public IP address of the instance.
  2. The IGW checks its mapping table for the public IP address and replaces it with the private IP address of the instance before sending it to the router.
  3. The router checks the routing table and forwards the packet to the instance.

## Bastion Host

- A bastion host (jumpbox) is a special instance in a public subnet that is used to securely access private VPC resources.
- Bastion is often the only way IN to a VPC.
