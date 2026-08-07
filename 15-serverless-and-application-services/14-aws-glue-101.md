# AWS Glue 101

- AWS Glue is a serverless ETL (Extract-Transform-Load) system.
- There is an older tool which also can do ETL but requires compute resource like EC2 or EMR (a type of compute resource for big data).
- Used to move and transform data from a source to a destination.
- Supported sources include:
  - Stores: S3, RDS, DynamoDB, JDBC databases, etc...
  - Streams: Kinesis Data Stream, Kafka, etc...
- Supported destination include: S3, RDS, JDBC databases, etc...
- Can crawls data sources and generates Glue Data Catalog.

## Data Catalog

- A persistent metadata store that indexes and organizes data across sources, making it searchable and queryable.
- Mental model: Think of it like a library Catalog where you (AWS services like Athena) can search your books (your data) by the book metadata (title, author, etc...)
- 1 catalog per region per account.
- Data silo: When different departments or applications store data separately, without sharing or standardizing it, making collaboration difficult.
- Data Catalog helps avoiding data silo by provide a single metadata store that can be accessed and shared across different teams and applications.
- Use **Crawlers** to crawl data and metadata from sources.

## Glue Job

- Glue job loads data from sources, do ETL works, then output to a destination.
- Glue job can be invoked manually or via events using EventBridge.
