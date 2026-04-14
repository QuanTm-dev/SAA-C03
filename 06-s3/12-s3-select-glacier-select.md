# S3 Select and Glacier Select

> S3 Select and Glacier Select query a subset of data from objects using SQL without downloading the entire object.

## Status

- **S3 Select is no longer available to new customers.** Existing customers can continue using the feature. Consider using Amazon Athena or EventBridge for new workloads.

## Use Case

- Problem: Downloading 5TB of CSV data to filter for specific rows is slow and costly.
- Solution: Query data directly in S3 or Glacier to retrieve only relevant rows. Significantly reduces data transferred and processing time.

## Supported Input Formats

- CSV (including BZIP2 compression)
- JSON (including BZIP2 compression)
- Parquet (with GZIP or Snappy compression only)

## Key Limits

- Can query up to 5 TB per object
- Cannot query objects in Glacier Flexible Retrieval, Deep Archive, or RRS storage classes
- Parquet output not supported (use CSV or JSON output only)
