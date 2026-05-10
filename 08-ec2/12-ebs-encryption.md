# EBS Encryption

- EBS Encryption provides encryption at rest for volumes and snapshots using AWS KMS keys.

## How it works

1. When creating an encrypted volume, specify a KMS key (AWS-managed or customer-managed).
2. EC2 calls KMS GenerateDataKeyWithoutPlaintext, which generates and encrypts a DEK under the specified KMS key.
3. The encrypted DEK is stored with the volume metadata.
4. On volume attachment, EC2 sends the encrypted DEK to KMS for decryption.
5. KMS decrypts and returns the plaintext DEK to the EC2 host.
6. The EC2 host encrypts/decrypts all disk I/O using the plaintext DEK.

## Characteristics

- You can enable region-wide so all new volumes are encrypted using your default KMS key.
- Each volume creation can specify a default AWS-managed key or a customer-managed key.
- Each new volume gets its own encrypted DEK.
- Encrypted snapshots use the same DEK if the new volume specifies the same KMS key. If a different KMS key is used, AWS generates a new DEK.
- Cannot convert an encrypted volume to unencrypted.
- OS is unaware of encryption; no performance impact.
