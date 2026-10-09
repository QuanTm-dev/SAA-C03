# DynamoDB - Architecture

- DynamoDB is a NoSQL fully managed Database-as-a-Service (DBaaS) product.
- DynamoDB is a public service.
- DynamoDB is a wide column Key/Value database.
- Unlike RDS which provides a database server, DynamoDB provides the database itself as a service.
- There are 2 diffrent capacity mode in DynamoDB:
  - On-demand performance capacity: Scale automatically based on the workload.
  - Provisioned performance capacity: You set the read and write capacity units (RCUs and WCUs) for your table.
- In DynamoDB, capacity is measured in terms of read and write throughput:
  - 1 RCU = 4kB per second
  - 1 WCU = 1kB per second
- DynamoDB is regionally resilient and can optionally be made globally resilient.
- DynamoDB is fast.
- Data is replicated across multiple storage nodes by default.
- Data is encrypted at rest by default.
- Allows event-driven integration. Do things when data changes.

## DynamoDB Table

- A DynamoDB table is a collection of items which share the same primary key attribute (e.g., `userId`).
- When configuring Dynamo, you need to pick a primary key from two types:
  - Simple (Partition)
  - Composite (Partition and Sort)
- Every item in the table needs a unique primary key.
- Each item can be at most 400KB in size.

## Backups

- On-demand Backups: Full table snapshot retained until you delete it. Supports same‑region or cross‑region restore, and you can modify indexes or encryption during restore.
- Point-in-time Recovery : Disabled by default. When enabled, DynamoDB keeps a continuous 35‑day change history. You can restore the table to any point in that window with 1 second granularity.

## Exam consideration (No Anki cards needed)

- If you see NoSQL, you should jump towards DynamoDB.
- If you see relational data, this is not DynamoDB.
- If you see key value and DynamoDB is an answer, this is likely the proper choice.
- Access to Dynamo is from the console, CLI, or API. There is NoSQL available.
