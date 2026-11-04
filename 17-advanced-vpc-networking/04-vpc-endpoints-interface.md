# VPC Endpoints (Interface)

## Overview

- Provides private access to public AWS services without using Internet Gateway or NAT Gateway.
- Supports more AWS services than Gateway Endpoints.
- When creating an Interface Endpoint, AWS creates an elastic network interface (ENI) in your VPC subnets with a private IP address.
- Supports the TCP protocol only.
- Supports both IPv4 and IPv6.

## High availability

- Create the Interface Endpoint in multiple Availability Zones (AZs) to achieve high availability.

## Access control

- Security Groups control access to the Interface Endpoint.
- Can also use endpoint policy to control access to the service. For example, only allow the endpoint to connect to a particular S3 bucket.

## PrivateLink

- Interface Endpoints use PrivateLink under the hood.
- PrivateLink injects AWS or third-party services into your VPC, each given an ENI.

## How it works

- The Interface Endpoint provides a DNS hostname that resolves to the private IP address of the ENI in your VPC.
- Applications in your VPC use the DNS hostname to access the service privately.

## DNS types

- There are 2 types of DNS name:
- Regional DNS name:
  - Resolves to endpoint ENIs across multiple AZs.
- Zonal DNS name:
  - Resolves to the endpoint ENI in one specific AZ.
  - Cross-AZ data transfer charges may apply if accessed from another AZ.

## Private DNS

- Private DNS associates a private Route 53 hosted zone with the VPC.
- It changes the default service DNS name to resolve to the Interface Endpoint IP.

## Example with Private DNS (No Anki cards needed)

- Scenario: you create an Interface Endpoint for Amazon S3 in your VPC.

### Without Private DNS

- s3.amazonaws.com resolves to a public IP.
- Traffic goes out to the internet.
- You must update your application code to use the Interface Endpoint DNS name.

### With Private DNS enabled

- s3.amazonaws.com resolves to the private IP of your Interface Endpoint inside the VPC.
- You don't need to update your application code to use the Interface Endpoint DNS name.
