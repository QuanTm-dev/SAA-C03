# Digital Signatures

## 1. Problems (Why Hashing Alone Is Not Enough)

Hashing provides:

- ✔ **Integrity** — detects whether data has been modified

Hashing cannot provide:

- ❌ **Authenticity** — anyone can generate a hash
- ❌ **Sender identification** — no proof of who created the hash
- ❌ **Non-repudiation** — sender can deny sending the message

**Main issue:**
An attacker can modify the message and recompute the hash, so the receiver cannot verify the sender’s identity.

## 2. What It Is (Digital Signature)

A **digital signature** is a electronic signatures that:

- Ensures **integrity** of the message
- Verifies **authenticity** of the sender
- Provides **non-repudiation**

**Key idea:**
A digital signature is a **hash of the message encrypted using the sender’s private key**.

It combines:

- Hash functions
- Asymmetric (public-key) cryptography

## 3. How It Works

### Signing Process (Sender)

1. Create a hash of the message
2. Encrypt the hash using the sender’s **private key**
3. The encrypted hash becomes the **digital signature**
4. Send:
   - The original message
   - The digital signature

### Verification Process (Receiver)

1. Hash the received message
2. Decrypt the digital signature using the sender’s **public key**
3. Compare the two hashes

If the hashes match:

- ✔ The message has not been altered (integrity)
- ✔ The sender is authenticated (authenticity)
