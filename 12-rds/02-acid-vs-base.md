# ACID vs BASE

- ACID and BASE are 2 database transaction models.
- CAP Theorem states that any databases can only have 2 out of the 3 properties: Consistency, Availability, and Partition Tolerance.
- Consistency: Every read receives the most recent write or an error.
- Availability: Every request receives a **non-error** response, without guarantee that it contains the most recent write.
- Partition Tolerance: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.
- Both models are designed for Partition Tolerance but ACID focuses on Consistency while BASE focuses on Availability.

## ACID

- Atomicity: All operations in a transaction succeed or none of them do.
- Consistency: A transaction can only bring the database from one valid state to another valid state.
- Isolation: Transactions are isolated from each other until they are completed.
- Durability: Once a transaction has been committed, it will remain durable, even in the case of a system failure.

## BASE

- Basically Available: Read and write operations are available most of the time.
- Soft state: The database doesn't enforce consistency, this is offloaded to the application layer.
- Eventually consistent: The database will eventually become consistent over time.

## Exam PowerUp

- If BASE is mentioned, it is likely refer to a NoSQL database.
- If ACID is mentioned, it is likely refer to a RDS database.
- If NoSQL or DynamoDB is mentioned together with ACID, it is likely refer to DynamoDB transactions.
