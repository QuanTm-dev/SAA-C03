# Non-Relational (NoSQL) Database

## Key-Value databases

- Consist of a key and a value.
- A key is a unique identifier for the data, and the value is the data itself.
- Key can be any string as long as it is unique, and the value can be any type of data (string, JSON, binary, etc.).
- These are really fast and highly scalable.
- This is also used for in memory caching

## Wide Column databases

- Each record consists of 2 types of keys:
  - Partition key (The search key): Determines the physical location of data.
  - Clustering keys (sort/range key): Defines the order of rows within a partition.
- A row must have a unique combination of partition key and clustering key.
- Rows can have **attributes**, and these attributes do not need to be the same across rows in the same table.
- Keys can be:
  - **Single key** (just a partition key).
  - **Composite key** (partition key + one or more clustering keys).

## Column databases

- Data is stored in columns rather than rows.

### Example

Suppose we have a table in a traditional SQL (row-based) database:

**SQL row-based storage:**

| ID  | Name  | Age | City     |
| --- | ----- | --- | -------- |
| 1   | Alice | 30  | London   |
| 2   | Bob   | 25  | New York |
| 3   | Carol | 28  | Paris    |

Instead of storing by rows, a column database stores values by column:

- **ID column:** [1, 2, 3]
- **Name column:** [Alice, Bob, Carol]
- **Age column:** [30, 25, 28]
- **City column:** [London, New York, Paris]

This way, if you want to calculate the average age, the database only needs to read the **Age column** rather than scanning every row.

A common pattern is to fetch the data in a SQL database and then transform it into a column database for analytics purposes.

## Graph databases

- Relationships between things are formally defined and stored along in the database itself with the data. These are great for relationship driven data.
- Nodes are objects inside a graph database. They can have properties.
- Edges are relationships between the nodes. They have a direction.
- Relationships can also have values associated with them and they are also stored inside the database.
- Compared to relational databases, graph databases are faster for queries that involve traversing relationships because you can directly access the relationships without needing to compute relationships on the fly.
