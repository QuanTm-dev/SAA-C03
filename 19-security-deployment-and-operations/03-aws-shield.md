# AWS Shield

## Overview

- Managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS
- Comes in 2 types: Shield Standard and Shield Advanced

## Shield Standard

- Free of charge
- Enabled automatically — no need to explicitly enable it
- Automatically protects CloudFront, Route 53, ELB, Global Accelerator
- Protects against Volumetric (Layer 3, e.g., saturating capacity) and Protocol (Layer 4, e.g., TCP SYN flood) attacks
- Applies protection when data enters a region (VPC) or an AWS edge location (CloudFront, Route 53, Global Accelerator)
- Not configurable

## Shield Advanced Pricing and Enablement

- Costs $3,000/month per **Organization**
- Requires a 1-year commitment
- Must be explicitly enabled

## Shield Advanced Protected Resources

- Protects CloudFront, Route 53, ELB, Global Accelerator
- ELB coverage includes ALB (Application Load Balancer), CLB, and NLB
- Protects anything with an Elastic IP (e.g., EC2)

## Shield Advanced Attack Coverage

- Protects against Layer 3 and Layer 4 attacks
- Also protects against Application Layer (Layer 7, e.g., web request floods) attacks
- Can integrate with WAF

## Cost Protection

- Covers unexpected AWS charges caused by DDoS attacks on protected resources, issued as service credits
- Credits must be requested through AWS Support

## Proactive Engagement

- AWS Shield Response Team (SRT) contacts you when it detects a performance issue in your application caused by DDoS attacks
- Must be explicitly enabled

## Visibility

- Provides real-time visibility of DDoS events and attacks via the Shield Console or CloudWatch

## Health-Based Detection

- Shield Advanced can detect attacks based on the health of your application

### Why Health-Based Detection Combines Signals (No Anki cards needed)

- Traffic anomalies alone can be false alarms (e.g., a flash sale causing a spike)
- Health signals alone can be misleading, since apps break for reasons unrelated to attacks
- AWS combines both signals to avoid false positives and false negatives

## Protection Groups

- A protection group is a collection of AWS resources you want to protect together
- You define membership criteria for a group, such as resource type
- Shield Advanced automatically includes resources that match those criteria
