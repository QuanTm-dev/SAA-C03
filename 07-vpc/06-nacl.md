# Network Access Control Lists (NACLs)

- NACLs are traditional stateless firewalls with in AWS VPC.
- They operate at the subnet level, every subnet must be associated with a NACL.
- NACLs filters data that crosses the subnet boundary, both inbound and outbound traffic.
- Connections between instances in the same subnet are not affected by NACLs.
- There are 2 sets of rules: inbound and outbound rules.
- Rules match based on protocol, port range, and source/destination IP address.
- Each rule can either allow or deny traffic, and rules are evaluated in order, starting with the lowest numbered rule. Once a match is found, no further rules are evaluated for that traffic.Example: If a rule with a lower number allows traffic, the subsequent rules are not evaluated for that traffic.
- `*` is an implicit deny rule at the end of the rule list, which means that if no rules match, the traffic is denied by default.
- NACLs cannot reference or be assigned to AWS logical resources.
- NACLs can be used with security groups to add explicit deny. For example, you can use a NACL to block specific IP addresses or ranges, while using security groups to allow traffic from trusted sources.
- A subnet can only be associated with one NACL at a time, but a NACL can be associated with multiple subnets.

## Default NACL

- A VPC is automatically created with a default NACL which allows all inbound and outbound traffic.
- There are 2 default rules for inbound and outbound traffic:
  - Rule number 100: Allow all traffic (\* for protocol, port range, and source/destination)
  - Rule number \*: Deny all traffic (implicit rule)

## Custom NACL

- Custom NACLs are created by users and by default, they're not associated with any subnet.
- There are 1 default rule for inbound and outbound traffic:
  - Rule number \*: Deny all traffic (implicit rule)
