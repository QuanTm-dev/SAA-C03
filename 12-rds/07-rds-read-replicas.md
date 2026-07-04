# RDS Read-Replicas

- Read Replicas are used to **scale read traffic** for RDS databases.
- They can only be used for **read operations** until **promoted**.
- Each Read replica has its own endpoint.
- Applications need to be configured to use the Read Replica endpoint for read operations.
- Data is **asynchronously replicated** from the primary database to the Read Replica. Meaning once a write operation is performed on the primary database, it's viewed as committed, then the data is replicated to the Read Replica. This can lead to **replication lag**.
- Read Replicas can be created in the same region or in a different region than the primary database known as **cross-region replication**.

## Read Performance Improvements

- You can provide upto 5 Read Replicas for a single RDS database instance.
- Each replica provides an additional instance of read performance.
- Read Replicas can also have their own Read Replicas, but the **replication lag** can increase with each additional replica.
- Read Replicas improve global read performance by allowing you to place replicas in different regions closer to your users.

## RPO/RTO Improvements

- Problems: Backups and Snapshots can improve RPO but not RTO.
- Read Replicas offer near 0 RTO since Read Replicas can be promoted to become the primary database quickly.
- Read Replicas also offer near 0 RPO since the replication is performed immediately after the write operation is committed on the primary database.
- Read Replicas are great for reducing RTO in case of **failure only**.
- In case of **data corruption**, Read Replicas will also replicate the corrupted data to the Read Replica.
- Read Replicas enable **global resiliency**.
