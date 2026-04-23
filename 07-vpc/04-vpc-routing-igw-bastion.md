# VPC Routing, Internet Gateway, and Bastion Host

## VPC Router

- Every VPC has a router that handles traffic between subnets and to the internet, available across all AZs in the region.
- Each subnet must be associated with one route table; a route table can serve multiple subnets.
- VPC has a main route table; subnets use the main route table by default if no custom table is assigned.

### Route Table Priority

**Matching order:**

1. Local route (VPC CIDR blocks)
2. Specific routes (narrower CIDR)
3. Default route (0.0.0.0/0 for IPv4 or ::/0 for IPv6)

- All route tables always include a local route for the VPC IPv4 CIDR block (and IPv6 if enabled).

### How VPC Routing Works

1. Instance sends packet to the router.
2. Router checks the subnet's route table for a matching route.
3. Router forwards the packet to the target (IGW, NAT, peering connection, etc.).

---

## Internet Gateway (IGW)

- Attached to a VPC to allow communication between instances and the internet (or AWS services).
- AWS manages IGW performance.
- One VPC can have only one IGW; one IGW can attach to only one VPC.
- No charge for the IGW itself, but data transfer charges apply to EC2 instances using it.

### Setting Up IGW

1. Create an IGW.
2. Attach it to the VPC.
3. Create a custom route table (or modify the main one).
4. Add a default route (0.0.0.0/0 for IPv4 or ::/0 for IPv6) pointing to the IGW.
5. Associate the route table with a subnet (creates a public subnet).
6. Assign a public IPv4 address or Elastic IP to instances (or enable auto-assign).

### IPv4 and IPv6 Address Handling

### Traffic Flow through IGW

**Outbound:**

1. Instance sends packet to router.
2. Router forwards packet to IGW (per route table).
3. IGW translates source private IP → public IP and sends to internet.

**Inbound:**

1. IGW receives packet destined for instance's public IP.
2. IGW translates destination public IP → private IP.
3. Router forwards packet to instance.

---

## Bastion Host

- A public-subnet instance used to securely access private subnet resources.
