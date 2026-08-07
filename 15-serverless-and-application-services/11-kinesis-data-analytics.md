# Kinesis Data Analytics

- Kinesis Data Analytics provides real-time processing of streaming data using standard SQL.
- Ingest from Kinesis Data Streams or Kinesis Data Firehose and optionally static reference data from S3.
- After processing, you can send the output to Kinesis Data Streams, Kinesis Data Firehose, or Lambda.
- Kinesis Data Analytics is a fully managed by AWS.

## How it works (No Anki card needed for this section)

1. You create a Kinesis Data Analytics application and specify the source and destination.
2. Kinesis Data Analytics takes the input stream and the reference data, then applies the SQL queries you define.
3. The output of the SQL queries is sent to the specified output stream.

- Reference data can be used to enrich the streaming data. For example, you can join the streaming data with a static dataset stored in S3 to add additional context to the data (e.g., streaming data can store productId, while reference data can have full info about the product).
- Reference data supports CSV, JSON and Parquet formats.
- Mental model: Think of input/output streams and reference data as tables in a database, and the SQL queries as the operations you perform on those tables.

## When and where to use

- Any streaming data that needs **real-time SQL-based processing**.
- For example: Real-time analytics dashboards.
- Key difference between Kinesis Data Analytics and Firehose with Lambda:
  - Kinesis Data Analytics is for **real-time processing** of streaming data using SQL.
  - Kinesis Data Analytics supports complex transformations.
