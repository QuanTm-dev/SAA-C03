# HA vs FT vs DR

> Three complementary strategies for maintaining system availability and recovering from failures.

## High Availability (HA)

**Goal**: Minimize downtime to maintain agreed SLAs (e.g., 99.9% uptime = max 8.76 hours downtime/year).

**Approach**: Tolerate brief interruptions; automatically recover from failures.

**Example**: Multi-AZ load balancer redirecting traffic when one instance fails.

## Fault Tolerance (FT)

**Goal**: Continue operating seamlessly even when components fail.

**Approach**: Use redundancy and automatic failover; detect and recover from failures transparently.

**Key Difference from HA**: FT aims for zero interruption; HA tolerates brief interruptions.

**Example**: Multi-site active-active replication where failure is imperceptible to users.

## Disaster Recovery (DR)

**Goal**: Restore vital infrastructure after major disasters (natural, human-induced, region outages).

**Approach**: Pre-planning, regular testing, backups, off-site storage, stakeholder communication.

**Scope**: Longer recovery times (measured in hours/days); focuses on data restoration.
