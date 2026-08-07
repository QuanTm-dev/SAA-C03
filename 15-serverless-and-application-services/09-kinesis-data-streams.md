# Kinesis Data Streams

- Kinesis is a streaming service.
- Producers send data into Kinesis Data Streams.
- Streams can scale from low to near infinite throughput.
- Kinesis is a public service.
- Kinesis is fully managed by AWS.
- Kinesis is highly available and scalable.
- Kinesis stores data for 24 hours by default, but can be extended upto 365 days.
- Multiple consumers can read from the same stream.
- Kinesis uses shards to scale the stream. Kinesis starts with one shard and can add more shards to increase throughput.
- Each shard can support up to 1MB/sec data input and 2MB/sec data output.
- Data is wrapped in Kinesis Data Records during transmission within the stream.

## SQS vs Kinesis

- Use SQS when you want to decouple applications and process messages(events) asynchronously.
- Use Kinesis when you want to process and analyze streaming data in real-time.
