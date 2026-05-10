# Instance Store Volumes Architecture

> Physically attached block storage on the EC2 host, ephemeral and high-performance, included in instance price.

## Characteristics

- **Block storage devices** physically attached to the EC2 Host running the instance.
- **Ephemeral**: Data is lost when instance stops, terminates, or hardware fails.
- **Included in pricing**: No additional charge; price is part of the instance cost.
- **Higher performance** than EBS: More throughput and IOPS.

## Attachment & Configuration

- **Only at launch time**: Cannot be attached after instance launch.
- **Instance-type dependent**: Type, size, and quantity vary by instance type.
- Multiple volumes on one instance must be of the same type (HDD or SSD per instance type).
