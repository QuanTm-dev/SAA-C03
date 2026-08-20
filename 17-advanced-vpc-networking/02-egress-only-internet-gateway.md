# Egress-Only Internet gateway

- Problem: NAT Gateway does not support IPv6
- Egress-Only Internet Gateway (EOIGW) allows outbound-only traffic from IPv6-enabled instances in a VPC to the internet.
- EOIGW is attached to a VPC.
- EOIGW is regional resilient.
- You need to add a default ::/0 route in a route table which points to the EOIGW.
