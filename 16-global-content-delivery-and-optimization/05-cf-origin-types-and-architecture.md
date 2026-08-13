# CloudFront (CF) - Origin Types & Origin Architecture

- There are 4 categories of Origin:
  - S3
  - AWS Media Package channel Endpoints
  - AWS Media Store Container Endpoints
  - Custom Origin (AKA custom web servers)
- IMPORTANT: S3 Static Website Hosting is treated as a web server.

## S3 Origin Configurations

- Origin Domain: The domain where contents will be retrieved from.
- Origin Path: An optional path where contents will be retrieved from. Default is root.
- Origin Access: Defines how CF can access the S3 bucket:
  - Bucket must allow public access
  - Restrict access to only CF
- The protocol used between a Viewer and CF must match the protocol used between CF and the Origin.
- Custom Header: Optional headers that CloudFront includes in requests to the origin.

## Custom Origin Configurations

- Origin Domain: The domain where contents will be retrieved from.
- Origin Path: An optional path where contents will be retrieved from. Default is root.
- Minimum origin SSL protocol: The minimum SSL protocol that CF uses with the origin.
- Protocol: The protocol that CF uses with the origin. Can be 1 of the 3 options:
  - HTTP
  - HTTPS
  - Match viewer
- HTTP and HTTPS Port: The port that CF uses when it makes a request to the origin.
- Custom Header: Optional headers that CloudFront includes in requests to the origin. Web servers can use custom header to restrict access to only CF (S3 Origin supports this out of the box, custom server needs to do it manually).
- EXAM POWER UP: If the question asks about custom port, the ability to configure protocol or mimimum SSL, custom origin is the answer.
