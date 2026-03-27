# AWS Global Infrastructure

> AWS infrastructure spans globally across regions and edge locations, enabling high availability, disaster recovery, and low-latency access worldwide.

## Regions

**Definition**: Isolated geographic areas, each with complete AWS infrastructure (compute, storage, database, etc.). Data stays within a region unless explicitly replicated.

**Key Benefits**:

- Fault isolation: Regional failures don't affect other regions.
- Compliance: Resources stay within the country/laws of the chosen region.
- Performance: Lower latency for users near the region.

### Availability Zones (AZs)

**Definition**: Isolated infrastructure clusters within a region, each capable of independent failure.

**Resilience**: Applications deployed across multiple AZs remain available during single-AZ outages.

## Edge Locations

**Definition**: Small data centers distributed globally, primarily used for content delivery (CloudFront), caching, and edge computing.

**Scale**: More edge locations than regions, providing better performance for end users worldwide.

## Service Resilience Levels

AWS services fail at different scopes depending on architecture:

- **Global Resilient**: Remains available unless ALL regions fail (e.g., Route 53 zone distribution).
- **Region Resilient**: Remains available unless ALL AZs in a region fail (e.g., S3 multi-AZ replication).
- **Availability Zone Resilient**: Only available if that specific AZ is available (e.g., single-AZ EC2 instance).
