# DynamoDB - Global Tables

- DynamoDB Global Tables provides multi-master global replication of DynamoDB tables.
- All tables in a global table can both be read and written to.
- Tables are created in multiple AWS regions and added to the same global table.
- Last writer wins is used to resolve conflicts when multiple writes occur to the same item in different regions.
- Replication is asynchronous, generally takes less than a second to complete.
- Consistency: Strong consistent reads can be performed in the region where the write occurred, but for other regions, it's always eventual consistent.
- Benefits:
  - Provide global high availability
  - Improve global performance of applications
