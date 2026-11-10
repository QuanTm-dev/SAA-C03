# AWS Inspector

- Amazon Inspector continuously scans AWS workloads for security vulnerabilities and unintended network exposure.
- Supported resources:
  - EC2 instances
  - ECR container images
  - Lambda functions
- Findings are automatically prioritized by severity and exploitability.

## Finding Types

### Vulnerability Findings

- Detect known vulnerabilities (CVEs) in:
  - EC2 operating systems and installed software packages
  - ECR container images
  - Lambda deployment packages and dependencies
- Example: Detects an outdated version of OpenSSL with a known CVE.

### Network Exposure Findings

- Detect unintended network exposure and reachable services.
- Example: Detects that SSH (port 22) is accessible from the Internet.

## Notes

- Resources are automatically discovered and continuously scanned.
- Inspector automatically re-evaluates resources when new CVEs are published.
