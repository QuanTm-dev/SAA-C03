# Kinesis Data Firehose

- Context: Kinesis Data Streams does not store data for long periods of time.
- Kinesis Data Firehose is a service that can be used to load data from Kinesis Data Streams into other AWS services like S3, Redshift, and Elasticsearch for long-term storage or other processing.
- Kinesis Data Firehose is a fully managed by AWS.
- Kinesis Data Firehose is highly available and scalable.
- Kinesis Data Firehose offers near real-time data delivery to destinations (~60 seconds).
- **Navtively** supports data transformation using AWS Lambda before delivery to destinations.
- Unmodfied data can be delivered to a S3 backup bucket.
- Billed based on the amount of data ingested.
- Data can be sent from Kinesis Data Streams, or directly from producers to Kinesis Data Firehose.
- Kinesis Data Firehose can buffer incoming streaming data before delivering it to destinations.
- Data is delivered to destinations when the buffer size is filled or when the buffer time limit is reached.
- Default buffer size is 1MB.
- Default buffer time limit is 60s.

## When to use Kinesis Data Firehose

- When you need long-term storage of streaming data.
- When you need to transform streaming data (not complex transformation) before delivery to destinations.

## When not to use Kinesis Data Firehose

- When you need real-time processing of streaming data.
- When you need to deliver streaming data to multiple destinations.

## IMPORTANT: No Anki cards needed for this section

- KDF actively pushes data to destinations, while KDS requires consumers to poll data from the stream.

### Trade-offs between using KDF and KDS

- You can use KDS with Lambda to achieve what KDF offers, but you have to build the solution yourself.
- With KDF, you don't have to build the solution, but you lose the real-time processing capabilities of KDS with Lambda.

### How to overcome the limitations of KDF

- "When you need to deliver streaming data to multiple destinations": Use KDS with Lambda. 1 Lambda function can process and write to all services using the AWS SDK.
- "When you need real-time processing of streaming data": If you still need to persit data for long-term storage in this case, you can use KDS with KDF (or Lambda).
