# DynamoDB Local and Global Secondary Indexes

## Core Concepts

- Indexes are a way to improve the performance of data retrieval operations in DynamoDB.
- There are two types of indexes in DynamoDB: Local Secondary Indexes (LSI) and Global Secondary Indexes (GSI).
- Query limitation: Query can only work on 1 PK and optionally 1 SK.
- Indexes allow you to provide an alternative view on table data by choosing another attribute as the PK or SK.
- Mental model: Think of indexes as the alternative view of the table.
- You can choose which attributes to project into the index. This controls what data is available when querying the index.
- There are 3 types of projections for both LSI and GSI:
  - KEYS_ONLY: Only the PK and SK are projected into the index.
  - INCLUDE: You can specify a list of non-key attributes to project into the index.
  - ALL: All attributes from the base table are projected into the index.
- Indexes are sparse, meaning that if an item does not have the attribute(s) used as the index key (either PK or SK), it will not be included in the index. For example, if you create an index on the attribute "email" and an item does not have an "email" attribute, that item will not be included in the index.

## Local Secondary Indexes (LSI)

- Allow creating an alternative view using a different sort key (SK) while keeping the same partition key (PK).
- Must be created at the same time as the table.
- There is a limit of 5 LSIs per table.
- Share the same RCU and WCU as the base table.

## Global Secondary Indexes (GSI)

- Allow creating an alternative view using a different partition key (PK) and sort key (SK).
- Can be created at any time, even after the table is created.
- There is a limit of 20 GSIs per table.
- Have their own RCU and WCU, which are separate from the base table.
- GSI are eventually consistent by default, replication to GSI is asynchronous. Therefore, there is a risk of stale data when reading from a GSI.

## LSI and GSI Considerations

- Must be careful which projections (KEYS_ONLY, INCLUDE, ALL). This can eat up capacity.
- In contrast, if you don't project a specific attribute, but you require the attribute later, it will need to fetch the data later, which is expensive.
- GSI as default and only use LSI when strong consistency is required.
- Indexes are designed when data is in a base table needs an alternative access pattern. In other words, if you have a table with a PK and SK, but you need to query the data using a different attribute as the PK or SK, you can create an index on that attribute to allow for efficient querying.
