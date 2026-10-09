# Amazon Athena

- Amazon Athena is a querying service that allows you to query data from S3 and other data sources using standard SQL.
- Athena is serverless.
- You pay only for the data consumed by your queries.
- Athena natively supports S3 as a data source.
- Athena uses schema-on-read: you define a schema, and every query passes the raw data through that schema. The schema behaves like a transformation pipeline, converting raw data into a table‑like view without altering the original data. These 'virtual tables' then can be queried using standard SQL.
- Outputs can be sent to other AWS services.

## Integrate with other data sources

- Athena Federated Query lets Athena query data from other sources.
- How it works: Athena Federated Query uses data source connectors that run on AWS Lambda to translate the data from the source into a table-like format that Athena can query.

## When to use Amazon Athena

- When you want to query data without modifying the original data.
- Suitable for ad-hoc/occasional queries.
- Query AWS Service Logs.
- Query data with AWS Glue Data Catalog.
