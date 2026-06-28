# Amazon RDS Multi-AZ Deployments

## Multi-AZ Instance Deployment

- Provides high availability with **Primary** and **Standby** instances.
- Standby instance is always in a **different AZ** within the same region.
- **Replication**: synchronous — data written to both before view as committed.
- **Access**:
  - Applications connect via a **CNAME** pointing to the Primary.
  - Standby is not accessible for read/write.
- **Backups**:
  - Taken from Standby and stored in S3. This help reduces load on Primary.
- **Failover**:
  - CNAME automatically repointed to Standby.
  - DNS change takes ~60–120 seconds.
  - Brief downtime occurs; clearing DNS cache can reduce delay.
- **Limitations**:
  - Only one Standby instance.
  - Not supported in free tier (extra cost for Standby).

## Multi-AZ Cluster Deployment

- Architecture: **1 Writer + 2 Readers**, each in different AZs.
- **Replication**:
  - Synchronous via transaction logs.
  - Data written to Writer, then replicated to at least one Reader before view as committed.
  - Faster than block-level replication in Multi-AZ instance mode.
- **Endpoints**:
  - **Cluster endpoint** → Writer (read/write, admin).
  - **Reader endpoint** → load-balanced across Readers (read-only).
  - **Instance endpoint** → specific instance (testing/troubleshooting).
- **Performance**:
  - Faster hardware than Multi-AZ instance.
  - Writer commits locally first, then flushes to EBS.
- **Failover**:
  - Readers already accessible for reads.
  - On Writer failure, a Reader is promoted.
  - Cluster endpoint repointed to new Writer.
  - Failover ~35s + transaction log apply time.
- **Key Differences**:
  - Readers are accessible for read operations (unlike Standby in instance mode).
  - Aurora supports more than 2 Readers; RDS Multi-AZ Cluster supports only 2.
