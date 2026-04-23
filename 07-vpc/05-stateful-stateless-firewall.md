# Stateful vs Stateless Firewall

## AWS Services

- **Stateful**: Security Groups — automatically allow return traffic for permitted inbound/outbound connections.
- **Stateless**: Network ACLs (NACLs) — each direction (inbound/outbound) evaluated independently

## Limitations with stateless firewall

- You need to configure both inbound and outbound rules.
- When configure the inbound rule, you need to remember the ephemeral ports range.

=> More admin overhead
