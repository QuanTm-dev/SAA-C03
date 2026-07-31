# Elastic Load Balancer (ELB)

## Setup Decisions (before creating)

- Before using ELB, you need to decide:
  - **IP addressing:** IPv4-only or dual-stack (IPv4 + IPv6)
  - **AZs:** must select 1 subnet in **2 or more AZs**

## Subnet Requirements

- Each subnet needs **8+ free IP addresses**
- **/28** = minimum subnet size
- **/27 or larger** = recommended, to allow scaling

## Architecture & Behavior

- ELB places 1+ **ELB nodes** in each specified subnet; nodes scale with load
- Each ELB has a **DNS name (A record)** resolving to its nodes' IPs — this is what clients use to connect
- **Listeners** on ELB nodes accept traffic on a port/protocol, then forward to target groups
- ELB can be either public or private.
- ELB can route to both public and private EC2 instances.
- Clients only ever see the ELB DNS name — internal scaling/changes are abstracted away, enabling scaling with no downtime
- Multi-tier apps (web/app/db) can use multiple ELBs for independent scaling per tier

## Cross-Zone Load Balancing

- **Problem:** without it, each AZ's ELB nodes only route to targets in that same AZ. If AZ A has 4 targets and AZ B has 1, each AZ still gets ~50% of total traffic — so AZ A's targets get ~12.5% each while AZ B's single target absorbs the full 50%.
- **Solution:** cross-zone load balancing lets nodes in any AZ route to targets in **all** AZs, evening out the distribution.
- **ALB** enabled Cross-Zone Load Balancing by default.
