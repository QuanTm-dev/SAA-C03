# Security Groups

- Security groups are stateful firewalls with in AWS VPC.
- Security groups don't have explicit deny rules, only allow rules => can't block bad actors
- Security groups support IP/CIDR ranges and AWS logical resources.
- Security groups can reference other security groups, even itself.
- Security groups are attached to Elastic Network Interfaces (ENI) and not to instances.
- There are 2 set of rules for security groups: inbound and outbound rules.
- Security groups apply to any traffics that enter or leave the ENI.

## Logical References

- When a security group reference another security group, it allows all the traffic from the instances which use the referenced security group.
- Benefit of using security group versus using NACLs: Reduce administrative overhead (no need to update the security group rules when new instances are added or removed when auto-scaling). IP changes are handled automatically by AWS when instances are added or removed from the security group.

## Self Reference

- When a security group reference itself, it allows all the traffic from the instances which use the same security group.
