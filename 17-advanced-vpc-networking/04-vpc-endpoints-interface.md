# VPC Endpoints (Interface)

- Interface Endpoints provides private access to public AWS services without using Internet Gateway or NAT Gateway.
- Support all AWS services but DynamoDB.
- When you create an Interface Endpoint, AWS creates an elastic network interface (ENI) in your VPC subnets with a private IP address.
- Interface Endpoint is AZ resilient.
- To achieve high availability, you can create an Interface Endpoint in multiple Availability Zones (AZs).
- Can use Security Groups to control access to the Interface Endpoint.
- Can also use endpoint policy to control access to the service. For example, only allow the endpoint to connect to a particular S3 bucket.
- Only support TCP and IPV4.
- Use PrivateLink under the hood.
- PrivateLink allows AWS or 3rd party svc's to be injected into your vpc and be given ENI.

## How it works

- Interface Endpoint provides a DNS hostname that resolves to the private IP address of the ENI in your VPC.
- Applications in your VPC can use the DNS hostname to access the service privately.

## DNS types

- There are 2 types of DNS name:
  - Regional DNS name: Can be used in any AZ in the region.
  - Zonal DNS name: Can only be used in the same AZ as the ENI.
- You can also use Private DNS with an Interface Endpoint. Private DNS associates a private R53 hosted zone to the VPC changing the default service DNS to resolve to the interface endpoint IP.

## Example with Private DNS (No Anki cards needed)

- Suppose you create an Interface Endpoint for Amazon S3 in your VPC:
  - Without Private DNS: when your application queries s3.amazonaws.com, it resolves to a public IP, and traffic goes out to the internet. You will need to update your application code to use the interface endpoint DNS name.
  - With Private DNS enabled: s3.amazonaws.com resolves to the private IP of your Interface Endpoint inside the VPC. You don't need to update your application code to use the interface endpoint DNS name.
