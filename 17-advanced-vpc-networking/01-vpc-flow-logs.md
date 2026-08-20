# VPC Flow Logs

- VPC Flow logs allows the monitoring of traffic flow to and from ENI within a VPC.
- Only capture traffic metadata, not the actual packet data.
- Flow logs works by attaching virtual monitors.
- Flow logs can monitor traffics at 3 levels:
  - VPC
  - Subnet
  - ENI
- Flow logs are not realtime.
- Logs destination can be S3 or CloudWatch Logs
- Can capture Accepted, Rejected or all traffics.
- The traffics of the following services are excluded by Flow logs:
  - 169.254.169.254: AWS metadata service
  - 169.254.169.123: AWS Instance Metadata Service v2
  - AWS DNS server
  - AWS Windows license server

## Important Flow Logs fields

- The most commonly used fields in a flow logs are:
  - Source address
  - Destination address
  - Source port
  - Destination port
  - Protocol
  - Action
- Protocol value can be:
  - 1: ICMP
  - 6: TCP
  - 17: UDP
- Security group can only provide 1 log record per traffic.
- NACL can provide upto 2 log records per traffic.
