# Encryption approaches

- There are 2 encryption approaches:
  - Encryption at rest
  - Encryption in transit

## Encryption at Rest (Data Stored)

Protects stored data against physical theft and tampering. A single party encrypts data before storage and decrypts it when needed using a secret key (e.g., laptop password). If the device is stolen, the data remains useless without the decryption key.

## Encryption in Transit (Data in Motion)

Protects data transmitted between two parties using a secure tunnel that only authorized parties can decrypt. Outsiders only see encrypted data. Both parties must agree on the encryption algorithm and key to securely communicate.

# Key Encryption Concepts

- **Plaintext**: unencrypted data
- **Algorithm**: process that combines plaintext and key to produce ciphertext
- **Key**: secret value used to encrypt and decrypt data
- **Ciphertext**: encrypted/scrambled data

# Symmetric Encryption

Both parties use the same shared key to encrypt and decrypt data. Main challenge: securely sharing the key between parties without it being intercepted.

# Asymmetric Encryption

Uses a public-private key pair: the sender encrypts with the public key, and only the receiver with the private key can decrypt. Computationally expensive, so in practice, it's used to securely exchange symmetric keys, then symmetric encryption takes over.

**Digital Signing**: Sign data with your private key so others can verify authenticity using your public key, proving the message came from you.

# Steganography

- Problem with encryption: Outsider can still see we're communicating with **encrypted data**.

- Hides the existence of data by embedding it within ordinary files (e.g., images). Unlike encryption, which makes data unreadable, steganography makes data invisible, adding a layer of security through obscurity.
