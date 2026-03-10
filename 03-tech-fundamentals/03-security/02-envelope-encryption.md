## Definition

Envelope encryption encrypts data with a data encryption key (DEK), then encrypts the DEK with a key encryption key (KEK). The encrypted DEK is stored alongside the encrypted data.

## Problems Solved

- **Single Key Risk**: Using one master key for all data means compromising that key exposes everything. Envelope encryption uses unique DEKs per data object, limiting exposure.
- **Key Rotation**: Rotating the KEK doesn't require re-encrypting all data, only the DEKs. This makes key rotation faster and more efficient.

## How It Works

1. Generate a unique symmetric DEK for each piece of data
2. Encrypt the DEK with the KEK (typically asymmetric)
3. Store the encrypted DEK with the encrypted data
4. To decrypt, use the KEK to decrypt the DEK, then use the DEK to decrypt the data
