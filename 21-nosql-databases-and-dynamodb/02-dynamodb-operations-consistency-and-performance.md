# DynamoDB - Operations, Consistency and Performance

## Reading and Writing Data

- There are 2 different capacity modes in DynamoDB. Check the [DynamoDB Architecture](01-dynamodb-architecture.md) page for more details.

### On-demand capacity mode

- Use On-demand capacity mode if you have unpredictable workloads or want to minimize administrative overhead.
- This is 5 times more expensive than provisioned capacity mode.
- Pay a price per million Read or Write units.

### Provisioned capacity mode

- Use Provisioned capacity mode if you have predictable workloads and want to save money.
- Every operation consumes at least 1 RCU/WCU. It rounds up to 1 RCU/WCU if the item size is less than the minimum size (1 KB for WCU and 4 KB for RCU).
- Every single table has a WCU and RCU burst pool. When you exceed the provisioned capacity, DynamoDB will use the burst pool to handle the excess traffic. If the burst pool is exhausted, DynamoDB will throttle your requests. The burst pool has 300 seconds of capacity.

## Query

- Query requires a Partition Key and optionally a Sort Key condition (exact value or range).
- DynamoDB reads all items that match the **key condition**; RCU cost is based on the size of all those items.
- FilterExpression removes items from the results **after** reading, but **does not reduce** capacity consumed.

## Scan

- Scan reads the entire table item by item.
- Capacity is charged for **every item scanned**, even if you return only a subset.

## Replication Process

- In DynamoDB, there is 1 leader node and multiple follower nodes.
- The leader node can handle both reads and writes, while follower nodes can only handle reads.
- The replication process is as follows:

1. Leader node receives all writes
2. Leader confirms write completion
3. Leader replicates data to follower nodes (usually within milliseconds, assuming no faults). This is an asynchronous process, so follower nodes may not have the latest data immediately after a write operation.

## Consistency Models

- There are 2 consistency models in DynamoDB: Eventually Consistent and Strongly Consistent.

### Eventually Consistent

- Easier to implement
- Scales better
- Lower cost
- Reads from any node → risk of stale data if replication not complete
- Suitable when stale data is acceptable (e.g., social media feeds, product catalogs)

### Strongly Consistent

- More costly
- Less scalable
- Guarantees that reads always return the latest data
- Reads always from leader node
- Suitable when stale data is not acceptable (e.g., financial transactions, inventory management)

## WCU (Write Capacity Units) Calculation

- Requirement: 10 items/second, average item size = 2.5 KB
- Step 1. Divide item size by 1 KB → \(2.5 / 1 = 2.5\)
- Step 2. Round up → 3 WCU per item
- Step 3. Multiply by items per second → \(3 \times 10 = 30\) WCU

## RCU (Read Capacity Units) Calculation

- Requirement: 10 items/second, average size = 2.5 KB
- Step 1. Divide item size by 4 KB → \(2.5 / 4 = 0.625\)
- Step 2. Round up → 1 RCU per item (strongly consistent)
- Step 3. Multiply by items per second → \(1 \times 10 = 10\) RCU (strongly consistent)
- Step 4. For eventual consistency, divide by 2 → \(10 / 2 = 5\) RCU

> Note: You need to round up the RCU/WCU per item because DynamoDB rounds up to the nearest whole number during cost calculation. For example, if you have an item that is 2.5 KB, it will consume 3 WCU for writes and 1 RCU for reads (strongly consistent) or 0.5 RCU (eventually consistent), which rounds up to 1 RCU.
