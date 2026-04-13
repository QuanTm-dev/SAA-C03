# S3 Object Encryption

> S3 encryption is performed at the object level. All new objects are automatically encrypted with SSE-S3 by default. Server-side encryption (SSE) encrypts data at rest, while client-side encryption (CSE) encrypts data before uploading to S3.

## Encryption Types

### Server-Side Encryption (SSE)

Data is encrypted after S3 receives it. AWS handles encryption/decryption; data is encrypted at rest but may be visible to AWS during transit and processing.

### Client-Side Encryption (CSE)

Data is encrypted by the client before uploading to S3 using the S3 Encryption Client. AWS never sees plaintext data and has no role in encryption/decryption.

## SSE Options

### SSE-S3 (Default)

**How it works:**

1. Client uploads plaintext object to S3
2. S3 generates a random 256-bit data encryption key (DEK)
3. S3 encrypts the object using AES-256 with the DEK
4. S3 encrypts the DEK with the KEK (S3 Key) and stores both encrypted object and wrapped DEK
5. On retrieval, S3 decrypts the DEK using the KEK, then decrypts the object
6. Client receives plaintext object

**Key characteristics:**

- Encryption and decryption handled entirely by S3
- No CPU overhead on client side
- Limited operational control over keys

### SSE-KMS

**How it works:**

1. Client uploads plaintext object to S3 with KMS key ID specified
2. S3 calls KMS `GenerateDataKey` action with the specified KMS key
3. KMS returns plaintext DEK and the DEK encrypted with the KMS key (wrapped DEK)
4. S3 encrypts the object using AES-256 with the plaintext DEK
5. S3 stores encrypted object + wrapped DEK; plaintext DEK is discarded
6. On retrieval, S3 calls KMS `Decrypt` with the wrapped DEK
7. KMS returns plaintext DEK; S3 decrypts the object
8. Client receives plaintext object

**Key characteristics:**

- Encryption and decryption handled by S3 and KMS
- KMS key must be in same region as bucket
- Additional cost per KMS operation
- Provides role separation and centralized key management
- KMS key policies control who can decrypt data

### SSE-C (Customer-Provided Keys)

**How it works:**

1. Client generates a 256-bit encryption key and stores it locally
2. Client includes the encryption key in the request headers (HTTPS required for security)
3. S3 receives plaintext object + encryption key
4. S3 encrypts the object using AES-256 with the provided key
5. S3 stores encrypted object; the customer-provided key is immediately discarded (not stored by AWS)
6. On retrieval, client must include the same encryption key in request headers
7. S3 decrypts the object using the provided key
8. Client receives plaintext object

**Key characteristics:**

- Customer manages key lifecycle (rotation, backup, recovery)
- No additional cost beyond standard S3 request charges
- Client must provide key on every request (impractical for sharing data with other users/services)
- Cannot be used by AWS managed services to operate on data
- **DEPRECATED: Starting April 2026, SSE-C is disabled for all new buckets. Use SSE-KMS instead for customer-managed keys.**

## Comparison & Trade-offs

| Feature                 | SSE-S3      | SSE-KMS                 | SSE-C                | CSE              |
| ----------------------- | ----------- | ----------------------- | -------------------- | ---------------- |
| **Key Management**      | AWS managed | Customer or AWS managed | Customer managed     | Customer managed |
| **Cost**                | Included    | Additional KMS charges  | Included             | -                |
| **AWS Access to Key**   | Yes         | No (enforced by policy) | No                   | -                |
| **Role Separation**     | No          | Yes                     | No                   | -                |
| **Audit Logging**       | CloudTrail  | CloudTrail + KMS        | No KMS logging       | -                |
| **Client CPU Overhead** | None        | None                    | None                 | Yes              |
| **Share Data Easily**   | Yes         | Yes                     | No (key per request) | -                |

### When to Use

- **SSE-S3**: Default choice for most workloads; simplest, no operational overhead
- **SSE-KMS**: When you need key audit trails, compliance control, or cross-account encryption
- **SSE-C**: Legacy option; avoid for new buckets (deprecated April 2026)
- **CSE**: When AWS must never see plaintext data or for maximum client control
