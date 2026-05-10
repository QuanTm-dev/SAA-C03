# Instance Metadata

- Instance metadata is an AWS service that provides information about your EC2 instance from within the instance itself.
- It's accessible on all instances via a link-local IP address.

## Accessing Metadata

- **Endpoint**: `http://169.254.169.254/latest/meta-data/`

## What Metadata Provides

- Instance details
- Network configuration
- Instance permissions
- User data
- SSH key information

## Security Notes

- Instance metada is not authenticated or encrypted. Anyone who can gain access to the instance can see the meta-data.
