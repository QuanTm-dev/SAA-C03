# Amazon Machine Images (AMI)

> AMI is an EC2 instance template used to launch EC2 instances with pre-configured settings. AMIs are regional resources and can be public, private, or shared with specific AWS accounts.

## Core Concepts

- AMI is a template for launching EC2 instances with the same configuration.
- AMI can be AWS-provided, community-provided.
- AMI from AWS Marketplace may include commercial software with additional charges.
- AMI may include EBS snapshots of the attached volumes.
- You're charged for the storage of EBS snapshots associated with the AMI.
- Each AMI has a unique ID format: `ami-<unique-id>`.
- **AMI Baking:** Process of creating an AMI from a configured EC2 instance.
- **Immutability:** AMI cannot be modified after creation; create a new AMI from an updated instance to update configuration.

## Regional Scope

- AMI is regional; each region has its own AMI for the same OS and configuration.
- AMI can only be used in the region it was created in.
- AMI can be copied to other regions.

## Permissions

- **Public:** Accessible to all AWS accounts.
- **Private:** Accessible only to the owning AWS account.
- **Shared:** Accessible to specific AWS accounts or organizations.
- **Default Permission:** Private.

## AMI Lifecycle Steps

1. **Launch:** Start an EC2 instance from an AMI.
2. **Configure:** Customize the instance as needed.
3. **Create AMI:** Create a new AMI from the configured instance and captures EBS snapshots.
4. **Reuse:** Launch additional instances and EBS volumes from the new AMI with identical configuration.
