# Aurora Architecture

## Cluster Basics

- Aurora runs on a **cluster** by default: 1 primary (writer) instance + up to **15 read replicas**.
- Any replica can be automatically promoted to primary if the primary fails.
- Compute instances have no local storage — all instances share one **cluster volume**, which improves provisioning, availability, and performance.
- A cluster spans multiple Availability Zones.

## Storage

- Cluster volume auto-scales up to **128 TiB**.
- There are **6 replicas across 3 AZs**;
- A write is acknowledged once 4 of 6 replicas confirm (quorum model).
- All instances (primary + replicas) can access the entire cluster volume.
- Only the primary can write by default; replicas are read-only.
- Replication happens at the storage layer, so it consumes no extra compute resources on the instances.
- Self-healing: Aurora detects storage-node failures and repairs the affected disk area automatically from other nodes, with no corruption.
- SSD-backed by default → high IOPS, low latency.
- Replicas can be added/removed without separately provisioning storage.
- Freed-up storage can be reused.

## Endpoints

| Endpoint | Points to                                                              |
| -------- | ---------------------------------------------------------------------- |
| Cluster  | The current primary (writer) instance                                  |
| Reader   | Load-balances read traffic across all available replicas               |
| Custom   | A chosen subset/group of instances you define (e.g. by instance class) |
| Instance | One specific instance — used for diagnostics/tuning on that instance   |

## Costs

- No free tier for Aurora (free tier only covers standard RDS on micro instances).
- Aurora doesn't support micro instance sizes.
- Beyond RDS Single-AZ (micro), Aurora gives the best value.
- Compute: hourly charge, per second, 10 minutes minimum.
- Storage: billed per GB-month, based on the **high-water mark** (max storage used). **High-water-mark** can shrink when enough storage is freed up.
- I/O: charged per request (Aurora Standard configuration).
- Backup storage: free up to 100% of your database size while the cluster exists.

## Restore, Clone, and Backtrack

- Backups work the same way as standard RDS.
- Restore (from backup or point-in-time) always creates a **new cluster**.
- **Backtrack** rewinds the cluster to an earlier point in time without a full restore..
- **Fast clones** make a new database much faster than copying all the data. It references the original storage and only write the differences between those two. It only copies the difference and only store changes between the source data and the clone.
