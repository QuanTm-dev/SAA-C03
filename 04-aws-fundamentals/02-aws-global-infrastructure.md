AWS infrastructure is distributed globally across regions and edge locations. Each region is a completely independent deployment, and each edge location is smaller and used for content delivery.

# Regions

A region is an isolated geographic area with complete AWS infrastructure (compute, storage, database, etc.). Data stays within the region you choose unless explicitly replicated elsewhere.

**Benefits:**

- **Fault Tolerance**: Region isolation means failures only affect that region.
- **Compliance**: You follow only the laws of the country where the region is located.
- **Performance**: Users experience lower latency when using the region nearest to them.

## Availability Zones

Availability Zones (AZs) are isolated infrastructure clusters within a region. Each AZ can fail independently, so applications deployed across multiple AZs remain available during an AZ outage.

# Edge Locations

Edge locations are small data centers distributed globally, primarily used for content delivery (CloudFront), caching, and edge computing. There are more edge locations than regions, providing better performance for end users worldwide.

# Service Resilience Levels

AWS services have different resilience levels depending on their architecture:

- **Global Resilient**: Service remains available unless ALL regions fail (e.g., Route 53). Data automatically replicates across regions.
- **Region Resilient**: Service remains available unless ALL AZs in a region fail (e.g., S3). Data automatically replicates across AZs.
- **Availability Zone Resilient**: Service only works if that specific AZ is available (e.g., EC2 in a single AZ).
