# Network Access Control Lists (NACLs)

> NACLs are stateless firewalls that operate at the subnet level to allow or deny traffic crossing the subnet boundary.

## Core Characteristics

- Stateless: traffic state is not tracked; responses require explicit outbound rules
- Operate at the subnet level: every subnet must be associated with exactly one NACL
- Filter traffic entering and leaving subnets; do not affect traffic routed within a subnet
- Support both inbound and outbound rules with allow/deny actions

## Rule Evaluation

- Rules have numbers from 1 to 32766 and are evaluated in ascending order
- First matching rule is applied; subsequent rules are not evaluated for that traffic
- Rule \* (implicit deny) is always last and cannot be deleted
- Best practice: space rule numbers in increments (10, 100, etc.) for easier insertion later
- Rules match based on protocol, port range, and source/destination IP address.

## Subnet & NACL Association

- Each subnet associated with exactly one NACL at a time
- One NACL can be associated with multiple subnets
- When reassociating a subnet, the previous NACL association is removed

## Default NACL

Every VPC automatically gets a default NACL that allows all traffic.

**Inbound rules:**

- Rule 100: Allow all IPv4 traffic (source: 0.0.0.0/0)
- Rule 101: Allow all IPv6 traffic (source: ::/0) — if IPv6 CIDR is associated
- Rule \*: Deny all traffic (implicit)

**Outbound rules:**

- Rule 100: Allow all traffic (destination: 0.0.0.0/0)
- Rule 101: Allow all IPv6 traffic (destination: ::/0) — if IPv6 CIDR is associated
- Rule \*: Deny all traffic (implicit)

## Custom NACL

Custom NACLs are user-created and initially not associated with any subnet; must be explicitly assigned to subnets.

**Default rules:**

- Rule \*: Deny all traffic (implicit)

## Key Limitations

- NACLs cannot be assigned to AWS logical resources.

## NACLs vs. Security Groups

Use NACLs with security groups for defense-in-depth: NACLs provide explicit deny capability (security groups only allow), while security groups are stateful and simpler for most common rules.
