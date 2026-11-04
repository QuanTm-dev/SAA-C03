# VPC Flow Logs

## Overview

- Monitors traffic flow to and from ENIs within a VPC
- Captures traffic metadata only, not the actual packet data
- Not real-time

## Attachment levels

- Can be attached to, and monitor traffic at, three levels:
  - VPC
  - Subnet
  - ENI

## Traffic filtering

- Can capture accepted, rejected, or all traffic

## Log destinations

- Logs can be delivered to S3 or CloudWatch Logs

## Excluded traffic

- Traffic to and from 169.254.169.254 (AWS metadata service) is not logged
- Traffic to and from 169.254.169.123 (Amazon Time Sync Service) is not logged
- Traffic to the AWS DNS server is not logged
- Traffic to the AWS Windows license server is not logged

## Important fields

- Most commonly used fields:
  - Source address
  - Destination address
  - Source port
  - Destination port
  - Protocol
  - Action

## Protocol values

- 1: ICMP
- 6: TCP
- 17: UDP

## Log records

- Request and response traffic each get their own dedicated log record
