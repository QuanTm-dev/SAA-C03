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

## RPO Improvements

- Read Replicas also offer near 0 RPO since the replication is performed immediately after the write operation is committed on the primary database.
- Read Replicas are great as failover instance in case of **failure only**.
- In case of **data corruption**, the corrupted data will also be replicated to the Read Replica.
- Read Replicas enable **global resiliency**.
