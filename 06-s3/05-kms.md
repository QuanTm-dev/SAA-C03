# KMS Introduction

> AWS Key Management Service is a regional, public service for creating, storing, and managing cryptographic keys with FIPS 140-3 validated hardware security modules protecting sensitive encryption operations.

## Core Characteristics

- **Regional service** with public endpoints; multi-region keys available for cross-region operations
- **Keys never leave KMS unencrypted** — stored and operated only within FIPS 140-3 Security Level 3 validated HSMs
- **Supports symmetric and asymmetric keys** for encryption, decryption, signing, and signature verification
- KMS can be generated or imported; multi-region replication available

## Key Components

**KMS Key Container**

- Contains physical key material, metadata, ID, creation/rotation dates, policy, description, and state

**Key Material Retention**

- KMS retains all previous versions of key material (from rotations); only deleted when key is scheduled for deletion
- Enables decryption of data encrypted with any previous version

## Direct Encryption Limits

- **4,096 bytes maximum** for direct KMS Encrypt operations with symmetric keys
- Asymmetric keys support smaller limits (RSA_2048: 214 bytes with SHA_256; RSA_4096: 446 bytes with SHA_256)

## Envelope Encryption with Data Encryption Keys (DEKs)

**Pattern for data > 4KB**

- KMS generates DEK, encrypts it with KMS key, returns both plaintext and encrypted DEK
- You encrypt large data with plaintext DEK, store encrypted DEK alongside encrypted data
- To decrypt: send encrypted DEK to KMS, receive plaintext DEK, decrypt data

**Key points**

- KMS does not store, manage, or use DEKs for operations — only encrypts them

## Key Types and Source

**AWS Owned Keys**

- AWS creates and manages across multiple customer accounts

**AWS Managed Keys**

- Created and managed by AWS services on your behalf; appear with `aws/service-name` alias
- Cannot rotate manually, modify key policy, or use directly in cryptographic operations
- Automatically rotated every year (365 days)

**Customer Managed Keys**

- You create, own, manage; full control over lifecycle and policies
- More configurable than AWS managed keys
- Automatic key rotation is optional (disabled by default)

## Key Rotation

**Customer Managed Keys**

- Automatic rotation is optional; if enabled, default period is 365 days
- Previous key versions retained for decryption of old ciphertext
- Can rotate on-demand at any time

**AWS Managed Keys**

- Always rotate automatically every year; cannot disable

## Key Aliases and Access Control

**Aliases**

- Regional; same alias name in different regions can point to different keys

**Permissions**

- Every key has a key policy (resource-based policy) that must explicitly allow account users/roles to use it
- After granting key policy access, can further restrict or grant access via IAM policies
- Cross-account access requires key ARN or alias ARN in policy
