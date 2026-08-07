# Kinesis Video Streams

- Kinesis Video Streams ingests live video streams from producers.
- Some common producers include:
  - Security cameras, drones, smartphones, cars.
  - Non-video but time-serialized data: audio, thermal, depth and radar data.
- **Consumers can access data in two ways:**
  - **Frame‑by‑frame:** Process each frame continuously in real time.
  - **On‑demand:** Retrieve only specific portions of the stream when needed.
- Can persist data.
- Can encrypt data in-transit and at rest.
- Kinesis is fully managed by AWS.
- Data can not be accessed directly via Kinesis Video Steams storage. They can only be accessed via Kinesis Video Steams APIs.
- Can be integrated with other AWS services for further analysis. For example:
  - Rekogition: For Deep-learning analysis like facial recoginition.
  - Connect: For voice mail or other audio streaming.
