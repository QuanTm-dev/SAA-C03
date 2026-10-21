# Kinesis Video Streams

## Overview

- Fully managed by AWS
- Ingests live video streams from producers

## Producers

- Common video producers: security cameras, drones, smartphones, cars
- Also ingests non-video, time-serialized data: Audio, thermal, depth, and radar data

## Consumption

- Frame-by-frame access: processes each frame continuously in real time
- On-demand access: retrieves only specific portions of the stream when needed

## Storage and security

- Can persist data
- Encrypts data in transit
- Encrypts data at rest

## Data access

- Data cannot be accessed directly via Kinesis Video Streams storage
- Data is accessible only through Kinesis Video Streams APIs

## Integrations

- Can be integrated with other AWS services for further analysis. For example:
  - Rekogition: For Deep-learning analysis like facial recoginition.
  - Connect: For voice mail or other audio streaming.
