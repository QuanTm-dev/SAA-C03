# SSL/TLS

**Secure Socket Layer (SSL)** and **Transport Layer Security (TLS)** are cryptographic protocols for secure internet communication. TLS is the modern successor to SSL.

## Key Features

- **Privacy**: All communications are encrypted
- **Data Integrity**: Detects any data alteration during transmission
- **Authentication**: Verifies the server's identity (and optionally the client's)
- **Encryption Strategy**: Starts with asymmetric encryption (slower, more secure for initial exchange), then switches to symmetric encryption (faster, for actual data transfer)

## TLS Handshake (3 Phases)

### 1. Cipher Suite Agreement

Both client and server agree on the encryption method:

1. Client sends its SSL/TLS version and supported cipher suites
2. Server selects a compatible cipher suite, responds with its version, chosen suite, and server certificate

### 2. Authentication

Server certificate is verified:

3. Client verifies the certificate is valid (issued by a trusted Certificate Authority) and that the domain name matches the one mentioned in the certificate
4. Client requests proof that the server holds the private key by sending random data

**Certificate Authority (CA)**: A trusted third-party organization that issues and signs certificates. Operating systems and browsers maintain a list of trusted CAs.

### 3. Key Exchange & Encryption

Transition to symmetric encryption:

5. Client generates and sends the pre-master secret to the server (encrypted with server's public key)
6. Both client and server use this secret to generate the same master secret
7. The master secret generates session keys for encrypting/decrypting data
8. Both sides confirm successful handshake completion
