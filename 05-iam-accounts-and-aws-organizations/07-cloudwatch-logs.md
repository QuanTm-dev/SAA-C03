# CloudWatch Logs

> Centralized logging service for monitoring, storing, and analyzing logs from AWS services and external applications.

## Key Concepts

- **Log Event**: Single log entry (message + timestamp)
- **Log Stream**: Time-ordered sequence of events from one source (e.g., one EC2 instance)
- **Log Group**: Collection of streams with shared settings (retention, permissions, metric filters); regional resource

## Configuration

### Retention

- Automatic deletion after specified period (default: infinite/never delete)
- Inherited by all streams in the group

### Access

- Permissions applied at log group level; apply to all streams within

### Monitoring

- **Metric Filters**: Pattern matching extracts metrics from logs
- Matched events increase associated CloudWatch metrics
- Enables alarms and automation based on log content

## Log Sources

- AWS services: EC2, Lambda, RDS (via IAM roles)
- External applications: API calls or CloudWatch Agent
- Availability: Near real-time (typically seconds)
