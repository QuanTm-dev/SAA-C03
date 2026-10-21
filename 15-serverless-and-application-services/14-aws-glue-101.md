# AWS Glue

## Overview

- Serverless ETL (Extract-Transform-Load) service
- Moves and transforms data from a source to a destination
- Supported sources include:
  - Stores: S3, RDS, DynamoDB, JDBC databases, etc...
  - Streams: Kinesis Data Stream, Kafka, etc...
- Supported destination include: S3, RDS, JDBC databases, etc...
- Can be invoked manually
- Can be invoked via events using EventBridge

## Crawlers

- Crawl data and metadata from sources
- Generate the Glue Data Catalog

## Data Catalog

- Persistent metadata store that indexes and organizes data across sources
- Makes data searchable and queryable
- One catalog per region per account
- Mental model: Think of it like a library Catalog where you (AWS services like Athena) can search your books (your data) by the book metadata (title, author, etc...)

### Avoiding data silos

- Data silo: different departments or applications store data separately, without sharing or standardizing it
- Data silos make collaboration difficult
- Catalog is a single metadata store shared across teams and applications
- Shared catalog helps avoid data silos
