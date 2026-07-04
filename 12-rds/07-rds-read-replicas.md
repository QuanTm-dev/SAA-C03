# RDS Read-Replicas

- Used to **scale read traffic** off the primary — offload read-heavy queries to a separate instance.
- **Read-only** until manually **promoted** to a standalone, writable instance.
- Each replica has its **own endpoint**; apps must be explicitly configured to send reads there (RDS doesn't auto-route reads).
- Replication is **asynchronous**: primary commits the write, _then_ ships it to the replica → causes **replication lag**.
- **Replication lag** is the time it takes for the replica to catch up to the primary database.
- Can be **same-region** or **cross-region**.

## Read Scaling

- Up to **15 read replicas** per RDS database instance.
- Read Replicas can also have their own Read Replicas, but the **replication lag** can increase with each additional replica.
- Placing replicas in regions close to users improves global read latency.

## RPO/RTO Improvements

- Problems: Backups and Snapshots can improve RPO but not RTO.
- Read Replicas offer near 0 RTO since Read Replicas can be promoted to become the primary database quickly.
- Read Replicas also offer near 0 RPO since the replication is performed immediately after the write operation is committed on the primary database.
- Read Replicas are great for reducing RTO in case of **failure only**.
- In case of **data corruption**, Read Replicas will also replicate the corrupted data to the Read Replica.
- Read Replicas enable **global resiliency**.
