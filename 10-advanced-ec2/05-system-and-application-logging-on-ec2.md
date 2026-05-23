# System and Application Logging on EC2

## Problem

CloudWatch cannot natively capture metrics, logs, or traces from inside an EC2 instance.

## Solution: CloudWatch Agent

### Requirements

- **IAM Permissions**: Agent must have IAM permissions to send data to CloudWatch (use IAM Role attached to EC2 instance as best practice).
- **Agent Configuration File**: Specifies which metrics and logs to collect.

### Deployment Automation

- Use CloudFormation to automate the set up of CloudWatch Agent.
- Use SSM for centralized Agent configuration management.
