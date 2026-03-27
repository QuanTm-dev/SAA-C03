# S3 Static Website Hosting

## Overview

- Accessing S3 is generally done via APIs
- Static Website Hosting is an S3 feature that creates an **HTTP(S) endpoint** for website access
- Enables S3 to serve static content directly without compute resources
- Much cheaper than hosting on EC2 or similar services

## Configuration

### Required Settings

- **Index document**: Default page served at the website root (e.g., `index.html`)
- **Error document**: Page served for 404s and errors (e.g., `error.html`)

### Endpoint Format

- Default: `http://<bucket-name>.s3-website-<region>.amazonaws.com/`
- Supports both HTTP and HTTPS (via CloudFront or custom domain)

### Custom Domain Names

- **With AWS Route 53**: Use an **alias record** pointing to the S3 endpoint (bucket name does **not** need to match domain)
- **With other DNS providers**: Use CNAME record pointing to the S3 endpoint for HTTP, or use CloudFront for HTTPS support

## Use Cases

### Offloading Static Content

- Host static assets (images, CSS, JavaScript, PDFs) for your main application
- Significantly cheaper storage and transfer costs vs. compute-based hosting

### Out-of-Band Pages

- Pages not part of the main application but important for users to access
- Example: maintenance page displayed when the main application is unavailable
- Ensures users can access status/error information even when main application is down

## Pricing

- **Storage**: Per GB per month
- **Data transfer out**: Per GB transferred to internet or other AWS services (data in is free)
- **Requests**: Per 1,000 requests (GET, PUT, POST, DELETE, etc.)
