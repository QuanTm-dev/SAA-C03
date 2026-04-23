# Security Groups

> Security groups are stateful, instance-level firewalls that control inbound and outbound traffic for EC2 instances through their Elastic Network Interfaces (ENI).

## Core Concepts

- **Stateful firewalls**: Automatically allow response traffic of inbound/outbound connections.
- **Allow rules only**: No explicit deny rules; can't block specific actors (must use NACLs for deny).
- **Attached to ENI**: Applied at instance level but technically attached to the instance's Elastic Network Interfaces.
- **Two rule types**: Inbound (ingress) and outbound (egress) rules that apply to traffic entering/leaving the ENI.

## Rule Specification

- Support IP/CIDR ranges and AWS logical resources (other security groups).
- A rule can reference another security group, allowing traffic from/to instances using that group.
- An instance can be associated with multiple security groups, and all rules from those groups are aggregated and evaluated together.

## Advantage over NACLs

- Reduces administrative overhead during auto-scaling—IP address changes are handled automatically when instances are added or removed:
  - No need to manually update CIDR ranges in rules.
  - NACL rules would require manual IP/CIDR maintenance.

## Self Reference

- **Self-referencing**: A security group can reference itself in rules, allows traffic between instances using the same security group.
