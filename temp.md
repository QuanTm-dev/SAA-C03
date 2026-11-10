# AWS GuardDuty

## Overview

- Continuous security monitoring service
- Runs all the time once enabled

## How it works

- Reviews data from supported services
- Identifies events outside the "norm" for a given AWS account or accounts

## Detection methods

- Uses machine learning and threat intelligence feeds (lists of known threats) to detect suspicious activity
- Machine learning learns your normal activity patterns
- Flags anything unusual compared to those patterns

## Findings

- When a finding is generated, an event is sent to EventBridge
- EventBridge events can drive notification or remediation

## Multi-account support

- Supports multiple accounts through an Administrator-Member architecture
- An administrator account can invite other member accounts

## Supported data sources

- CloudTrail logs
- DNS logs
- VPC Flow Logs
