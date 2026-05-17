# Elastic Container Registry (ECR)

## Registry Structure

- Each AWS account has one public and one private registry.
- Each registry contains multiple repositories.
- Each repository contains multiple images.
- Each image can have multiple tags.

## Access Control

- **Private registry:** Both read and write require IAM permissions.
- **Public registry:** Anyone can have read-only access; write requires IAM permissions.
- ECR is fully integrated with IAM.

## Image Scanning

- **Basic scanning:** OS vulnerability scanning only.
- **Enhanced scanning:** OS and software package vulnerability scanning.

## Integration & Operations

- Sends metrics to CloudWatch (near real-time).
- Logs API actions to CloudTrail.
- Emits events to EventBridge for automation workflows (Enhanced scanning).
- Supports cross-Region and cross-account for image replication
