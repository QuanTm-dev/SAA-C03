# RDS MultiAZ - Instance and Cluster

- MultiAZ is a feature of RDS which provisions a highly available instance set.

## MultiAZ Instance Deployment

- There are 2 types of instances:
  - Primary Instance
  - Standby Instance
- The standby instance is in a different AZ than the primary instance.
- The replication between the primary and standby instance is synchronous. Meaning data is written to both instances before being viewed as committed.
- RDS Access ONLY via database CNAME, which points to the primary instance. With this architecture, you always access **the primary instance**.
- Backup is taken from the standby instance to S3, which reduces the load on the primary instance.
- When the primary instance fails, the CNAME is automatically pointed to the standby instance, which becomes the new primary instance. Because this is a DNS changes, tt will take 60-120 seconds for the failover to complete.
- There will be a brief downtime during the failover, you can reduce the downtime by clearing the DNS cache on your application server.
- This feature is not supported in free tier because there is extra cost for the standby instance.
- There is only _One_ standby instance, and it is not accessible for read/write operations. It is only used for failover and backup purposes.
- Both instance must be in the same region, but can be in different AZs.

## MultiAZ Cluster Deployment

- With this mode, RDS provisions a **Writer** replicate to 2 **Readers** .
- All instances are in different AZs.
- Key difference between this mode and Aurora: Aurora can have more than 2 readers, while RDS can only have 2 readers.
- Wrtier can be used for read/write operations, while readers can only be used for read operations.
- Key difference between this mode and MultiAZ instance: The readers are accessible for read operations, while the standby instance is not accessible for any operations.
- Replication between the writer and readers is synchronous. Data is written to the writer first, and then replicated to at least one of the reader before being viewed as committed.
- Cluster endpoint points to the writer. Used for read/write and admin operations.
- Reader endpoint points directs any read operations to one of the readers. Used for read operations.
- Instance endpoint points to a specific instance. Only used for testing or troubleshooting purposes.
- Run on much faster hardware than MultiAZ instance. RBS Fast write to local storage first, and then flush to EBS storage.
- Replication is done via transaction logs, which is much faster than MultiAZ instance replication.
- Failover is much faster than MultiAZ instance, because the readers are already accessible for read operations. When the writer fails, one of the readers is promoted to be the new writer, and the cluster endpoint is pointed to the new writer. This failover takes about 35s + transaction log apply time.
