# Amazon Aurora Multi-Master Writes

## Overview

- Allows **multiple writer instances** in a single cluster.
- Applications can connect directly to one or more writer instances.
- No single endpoint or built-in load balancing.

## Replication

- Write acknowledged by the cluster → then sent to other writers to update their in-memory data.
- Ensures all writer instances have the latest in-memory data.

## Benefits

- **Fault tolerance**:
  - Single-master clusters: failover requires promoting a reader → brief downtime.
  - Multi-master clusters: if one writer fails, another continues accepting writes → no downtime.
