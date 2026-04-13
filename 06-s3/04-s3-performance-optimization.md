# S3 Performance Optimization

## Single Upload Stream Limitation

Single stream uploads (PutObject) are limited to **5GB per request**, which poses problems:

- If the upload fails, the entire file must be re-uploaded
- Network throughput for one stream may not saturate available bandwidth
- File size is capped at 5GB

### Multipart Upload Solution

Multipart upload breaks large files into parts and uploads them in parallel, enabling:

- **Faster uploads** by uploading parts concurrently
- **Efficient retry**: If a part fails, only that part needs re-uploading, not the entire file
- **Large file support**: Objects up to 48.8 TiB can be uploaded

#### Multipart Upload Specifications

- **Part requirements**: Each part must be 5 MiB–5 GiB (no minimum for the last part)
- **Threshold**: Consider using multipart upload when file size exceeds 100 MB
- **Maximum parts**: Up to 10,000 parts per upload
- **Overall throughput**: Transfer rate = combined speed of all parallel parts

## Global Distribution Problem

**Scenario**: (Animal4Life)[../01-introductions-and-scenarios/02-scenario-animal4life.md] uploading large files from multiple locations experience latency due to suboptimal internet routing.

**Solution**: Amazon S3 Transfer Acceleration

- Enables faster uploads by routing data through the nearest CloudFront edge location
- Uses AWS's global edge network (50+ locations) instead of direct internet routes
- **Disabled by default**: Must be explicitly enabled on the bucket
- **Setup time**: Up to 20 minutes after enabling before acceleration is fully active
- **Charges**: Based on data transferred and source-to-destination distance
