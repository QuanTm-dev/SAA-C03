# Aurora Architecture

- Aurora built on top of a cluster by default.
- There are 1 primary instance and up to 15 read replicas in a cluster. Any read replica can be promoted to primary if the primary fails.
- Aurora doesn't use local storage for the compute instances. An Aurora cluster has a shared cluster volume. This improves provisioning, availability, and performance.
- Aurora cluster functions across different availability zones.
- The cluster volume has maximum size of 128 TB, 6 replicas across multiple AZs.
- All Aurora instances have access to all of the cluster volume's storage nodes.
- By default the primary instance is the only one who can write. The replicas will have read access. Replication happens at the storage level. No extra resources are consumed in the Aurora instance during replication.
- Aurora automatically detect hardware failures on the shared storage. If there is a failure, it immedietly repairs that area of disk using data from other storage nodes. It automatically recreates that data with no corruption.
- Cluster shared volume is based on SSD storage by default so high IOPS and low latency.
- Aurora cluster does not specify the amount of storage needed. You're billed based on **high water mark** of storage used - the maximum amount of storage used by the cluster volume. For example, if you have a 10 GB database and it grows to 15 GB, you will be billed for 15 GB. If it shrinks back to 10 GB, you will still be billed for 15 GB until the next billing cycle.
- Storage which is freed up can be re-used.
- Replicas can be added and removed without requiring storage provisioning.

## Endpoints

- Cluster endpoint - points at the primary instance
- Reader endpoint - will load balance over the available replicas
- Custom endpoint - point to a specific instance in the cluster.

## Costs

- No free-tier option
- Aurora doesn't support micro instances
- Beyond RDS singleAZ (micro) Aurora provides best value.
- Compute - hourly charge, per second, 10 minute minimum
- Storage - GB-Month consumed, IO cost per request
- 100% DB size in backups are included. Meaning you have a free backup storage equal to the size of your database.

## Aurora Restore, Clone and Backtrack

- Backups in Aurora work in the same way as RDS
- Restores create a new cluster.
- Backtrack allows for you to roll back the DB to a previous point in time.
- Fast clones make a new database much faster than copying all the data. It references the original storage and only write the differences between those two. It only copies the difference and only store changes between the source data and the clone.
