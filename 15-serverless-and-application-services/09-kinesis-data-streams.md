# Kinesis Data Streams

## Overview

- Streaming service for ingesting data in real time
- Fully managed by AWS
- Public service

## Producers and consumers

- Producers send data into Kinesis Data Streams
- Multiple consumers can read from the same stream

## Scalability and availability

- Scales from low to near-infinite throughput
- Highly available and scalable

## Shards

- Shards are the unit used to scale the stream
- A stream starts with one shard by default
- Add more shards to increase throughput
- Each shard supports up to 1 MB/sec data input
- Each shard supports up to 2 MB/sec data output

## Data records

- Data is wrapped in Kinesis Data Records during transmission within the stream

## Retention

- Data is stored for 24 hours by default
- Retention can be extended up to 365 days

## SQS vs Kinesis

- Use SQS when you want to decouple applications and process messages(events) asynchronously.
- Use Kinesis when you want to process and analyze streaming data in real-time.
