# 🔐 Implementing DNSSEC in Route 53

## Key Steps

When enabling DNSSEC for a hosted zone in Route 53, the following steps occur:

1. Route 53 creates a **public/private KSK pair** in AWS KMS (must be in **us-east-1**).
2. Route 53 creates **ZSK** and handled rotation interally.
3. Route 53 adds **KSK and ZSK records** to the hosted zone.
4. Route 53 ask KMS to use **private KSK** to sign the keys and generates **RRSIG records**.
5. User adds the **DS record** of the public KSK is added to the parent zone.

## Monitoring & Validation

- Create alarms for:
  - **DNSSECInternalFailure**
  - **DNSSECKeySigningKeysNeedingAction**
- Enable **DNSSEC Validation** in the VPC resolver:
  - Ensures records that fail validation are **not returned**.
