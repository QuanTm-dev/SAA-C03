# Hardware Security Module (HSM)

## Problem

Cryptographic keys stored in memory, disk, or source code are vulnerable to malware, theft, and unauthorized access. Software-only protection is insufficient.

## Solution: Hardware Security Module (HSM)

An isolated physical device that securely manages sensitive data, especially cryptographic keys. Keys never leave the HSM; all cryptographic operations occur within it.

## Key Characteristics

- **Secure Storage**: Keys remain protected inside the hardened enclave with no direct access possible.
- **Tamper-Proof**: Resistant to physical and logical attacks with built-in protection mechanisms.
- **Controlled Access**: Accessible only through industry-standard APIs.
- **Separation of Duties**: Admins can maintain and update the HSM but cannot access the keys themselves.
- **Internal Authentication**: Authentication and cryptographic operations happen entirely within the device.
