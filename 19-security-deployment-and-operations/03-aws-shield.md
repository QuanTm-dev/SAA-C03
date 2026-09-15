# AWS Shield

- AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS.
- There are 2 types of AWS Shield:
  - AWS Shield Standard
  - AWS Shield Advanced

## Shield Standard

- Shield Standard is free.
- Protects against Volumetric (Layer 3 like Saturate Capacity) and Protocol (Layer 4 like TCP SYN Flood) attacks.
- Automatically protects CloudFront, Route 53, ELB, Global Accelerator. You don't need to explicitly enable it.
- Apply protection when data starts flowing into a region (VPC) or AWS edge location (CloudFront, Route 53, Global Accelerator).
- No configurable.

## Shield Advanced

- Charge 3000$/month per **Organization**. Require 1 year commitment.
- Protects CloudFront, Route 53, ELB, Global Accelerator, ALB (Application Load Balancer), CLB, NLB and anything with Elastic IP (e.g. EC2).
- Must be explicitly enabled.
- If a DDoS attack causes unexpected AWS charges because Shield Advanced didn’t fully mitigate it, AWS covers those costs. This is called Cost Protection.
- Enable **Proactive Engagement**: When AWS Shield Response Team detects a performance issue in your application due to DDoS attacks, you will be contact by the team. You will need to enable this feature.
- Can integrate with WAF.
- Beside Layer 3 and 4, can protect against Application Layer (Layer 7 like web request floods) attacks
- Provide real time visibility of DDoS events and attacks via Shield Console or CloudWatch.
- Shield Advanced can detect attacks based on the health of your application. This is called **Health-based detection**.
- Explain for the point above (No Anki cards needed):
  - Traffic anomalies alone can be false alarms (e.g., a flash sale causing a spike).
  - Health signals alone can be misleading (apps break for reasons unrelated to attacks).
    => AWS combines them to avoid both false positives and false negatives.
- Protection Group:
  - A protection group is a collection of AWS resources that you want to protect together.
  - You can define criteria for including resources in a protection group, such as resource type or tags, and Shield Advanced will automatically include resources that match those criteria.
