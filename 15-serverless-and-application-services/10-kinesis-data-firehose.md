# Kinesis Data Firehose

## Overview

- Fully managed by AWS
- Highly available and scalable
- Billed based on the amount of data ingested

## Problem with Kinesis Data Streams

- Context: Kinesis Data Streams does not store data for long periods of time
- Firehose loads data from Kinesis Data Streams into other AWS services for long-term storage or other processing
- Data can come from Kinesis Data Streams or directly from producers

## Destinations

- Supported destinations include S3, Redshift, and OpenSearch Service
- Each delivery stream delivers to a single destination

## Buffering and latency

- Buffers incoming streaming data before delivering it to destinations
- Delivers when the buffer size is filled or the buffer time limit is reached
- Default buffer size for S3 is 5 MB
- Default buffer time limit for S3 is 300 seconds
- Offers near real-time delivery to destinations (~60 seconds)

## Data transformation

- Natively supports data transformation with AWS Lambda before delivery
- Suited to simple transformations, not complex ones
- Unmodified source data can be delivered to an S3 backup bucket

## When to use

- Long-term storage of streaming data is needed
- Simple transformation of streaming data is needed before delivery

## When not to use

- Real-time processing of streaming data is needed
- Delivery to multiple destinations is needed

## IMPORTANT: No Anki cards needed for this section

- KDF actively pushes data to destinations, while KDS requires consumers to poll data from the stream.

### Trade-offs between using KDF and KDS

- You can use KDS with Lambda to achieve what KDF offers, but you have to build the solution yourself.
- With KDF, you don't have to build the solution, but you lose the real-time processing capabilities of KDS with Lambda.

### How to overcome the limitations of KDF

- "When you need to deliver streaming data to multiple destinations": Use KDS with Lambda. 1 Lambda function can process and write to all services using the AWS SDK.
- "When you need real-time processing of streaming data": If you still need to persit data for long-term storage in this case, you can use KDS with KDF (or Lambda).
