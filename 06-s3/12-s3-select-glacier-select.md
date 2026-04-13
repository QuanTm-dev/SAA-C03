# S3 Sekect and Glacier Select

- S3 Select and Glacier Select are features that allow you to retrieve a subset of data from an object in S3 or Glacier using SQL-like queries.

## Problems

- You have 5TB of CSV data in S3 and you want to retrieve only the rows where the value in the "status" column is "active".
- Downloading the entire 5TB of data, and filtering it on the client-side would be time-consuming and costly.

## Solution

- Use S3 Select/Glacier Select to query the data directly in S3 or Glacier and retrieve only the relevant rows.
- This can significantly reduce the amount of data transferred and the time it takes to get the results. Upto 400% faster and 80% less expensive than downloading the entire object.

## Supported formats

- CSV
- JSON
- Parquet
- BZIP2 for CSV and JSON
