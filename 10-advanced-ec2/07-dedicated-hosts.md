# Dedicated Hosts

- Learn basics at [EC2 Purchase Options - Dedicated Hosts](../08-ec2/15-ec2-purchase-options.md#dedicated-hosts).

## Additional Info

- Host hardware has physical sockets and cores.
- Sockets and cores dictate how many instances can run.
- Hosts are designed for a specific instance family and size.
- You configure type and size of instances in advance.
- Older EC2 system does not allow mixing instance sizes.
- Nitro system allows mixing and matching instance sizes.

## Limitations

- Some AMI versions cannot be used (e.g., RHEL).
- Amazon RDS instances are not supported.
- Placement groups are not supported on dedicated hosts.
- Hosts can be shared with other accounts using Resource Access Manager (RAM).
