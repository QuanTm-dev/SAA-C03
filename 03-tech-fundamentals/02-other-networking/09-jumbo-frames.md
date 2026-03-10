# Jumbo Frames

**Standard frame:** 1500 bytes | **Jumbo frame:** 9000 bytes

## Why Use Jumbo Frames?

- **Reduced overhead:** Fewer frames = less frame overhead
- **Reduced idle time:** Less transmission delay between frames
- **Better for demanding applications:** High-bandwidth, latency-sensitive workloads

## Drawbacks

- **Full path support required:** All network components must support jumbo frames or **fragmentation** occurs
- **Limited AWS support:** Only certain AWS services support them

## AWS Support

| Service                  | Supports Jumbo Frames |
| ------------------------ | --------------------- |
| Inter-region VPC peering | ❌ No                 |
| Same region VPC peering  | ✅ Yes                |
| Internet Gateway         | ❌ No                 |
| VPN                      | ❌ No                 |
| Traffic outside VPC      | ❌ No                 |
| Direct Connect           | ✅ Yes                |
| Transit Gateway          | ✅ Yes                |
