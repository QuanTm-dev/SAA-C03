# Stateful vs Stateless Firewall

## Basic

- Stateless Firewall: Configure inbound (response) and outbound (initiated/request) connection rules separately. It does not keep track of the state of connections.
- Stateful Firewall: View inbound and outbound connections as part of a single session. If an outbound connection is allowed, the corresponding inbound response is automatically allowed.

## Limitations with stateless firewall

- You need to configure both inbound and outbound rules.
- When configure the inbound rule, you need to remember the ephemeral ports range.

=> More admin overhead
