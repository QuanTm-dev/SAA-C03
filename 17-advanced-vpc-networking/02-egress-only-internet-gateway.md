# Egress-Only Internet Gateway (EOIGW)

## Problem it solves

- NAT Gateway does not support IPv6-to-IPv6 traffic
- EOIGW allows outbound-only traffic from IPv6-enabled instances in a VPC to the internet

## Attachment and resilience

- Attached to a VPC
- Regionally resilient

## Routing configuration

- Add a default `::/0` route to the route table
- Route target is the EOIGW
