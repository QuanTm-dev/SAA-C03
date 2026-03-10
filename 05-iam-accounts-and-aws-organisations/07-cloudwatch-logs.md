## Overview

- CloudWatch Logs is a public service for monitoring, storing, and accessing logging data from AWS services and external applications.
- Logs are typically available within seconds, enabling near-real-time monitoring.
- Logging sources: AWS services (EC2, Lambda, RDS, etc. via IAM roles) and external applications (via API or CloudWatch Agent).

## Key Concepts

- **Log Event**: A single log entry containing message content and timestamp.
- **Log Stream**: Ordered sequence of log events from a single source (e.g., one EC2 instance or Lambda function).
- **Log Group**: Collection of log streams with shared retention, monitoring, permissions, and settings. **Regional resource** (associated with one AWS region).

## Log Group Configuration

- **Retention Settings**: Define how long logs are stored before automatic deletion (inherited by all streams in the group). Default is infinite.
- **Permissions**: Access control applied at the log group level (affects all streams within the group).
- **Metric Filters**: Extract metrics from log data by matching patterns; detected matches increment an associated CloudWatch metric, enabling alarms and automation.
