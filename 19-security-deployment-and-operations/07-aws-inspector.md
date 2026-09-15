# AWS Inspector

- AWS Inspector scans AWS workloads (EC2, ECR images, Lambda, etc...) for vulnerabilities.
- It provides a report of findings ordered by priority.
- There are 2 scanning modes:
  - Network only: Agentless, check for network reachablity (e.g., detects port 22 exposed to the internet)
  - Network + OS scanning: Agent required, check for OS and application vulnerabilities based on **CVE or CIS or AWS Security Best Practices** (e.g., finds outdated OpenSSL).

## Terms (No Anki cards needed)

- CVE: A database of known security vulnerabilities.
- CIS: A set of industry‑standard security best‑practice benchmarks.
- AWS Security Best Practices: A set of security best practices provided AWS.
