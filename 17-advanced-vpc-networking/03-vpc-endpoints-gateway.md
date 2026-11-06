# VPC Gateway Endpoints

## Overview

- Allow resources in a VPC to privately access S3 and DynamoDB without requiring an Internet Gateway, NAT Gateway.
- Is a regional service

## How it works

### Routing

- Does not actually go into VPC subnets
- Associating with a VPC adds a prefix list to the route table of the subnets, pointing to the endpoint
- Prefix list destination is not an IP address
- Prefix list destination is a logical representation of the service (e.g., pl-12345678 for S3)

### Access control

- An endpoint policy can be attached to control access to the service
- Example: restrict the endpoint to connect only to a particular S3 bucket
- Can only be accessed from the VPC it is associated with

## Use cases

- Access S3 and DynamoDB without allowing other public access
- Prevent Leaky Buckets: Keep a bucket private by updating the bucket policy to only allow access from a particular Gateway Endpoint.
