# IPsec Overview

**IPsec** is a protocol suite that authenticates and encrypts IP packets over networks. It creates secure tunnels for communication.

**Interesting traffic**: Traffic that matches defined rules (routes or policies). If no interesting traffic exists, the tunnel is torn down.

**Security Association (SA)**: A set of parameters used to protect IPSec (ESP/AH) traffic. Phase 1 creates one bidirectional IKE SA, and Phase 2 creates two unidirectional IPSec SAs (one in each direction).

# IPsec Two-Phase Process

## Phase 1: IKE (Internet Key Exchange)

Establishes secure channel for Phase 2 negotiation.

1. Both endpoints authenticate using pre-shared key or certificate
2. Both generate public-private key pairs and exchange public keys
3. Both use their private key + peer's public key to derive the same Diffie-Hellman (DH) shared secret
4. Both derive symmetric key from DH secret and exchange it securely
5. Result: Phase 1 tunnel created with a bidirectional SA.

**Characteristics**: Slow, heavy, long-lived. Stays open even when no traffic flows.

## Phase 2: IPsec SA

Establishes encryption for actual data transfer (on top of Phase 1 tunnel).

1. One side send a list of encryption algorithm proposals (encrypted via Phase 1 key)
2. The other picks the best compatible encryption method, and confirm with the sender.
3. Both derive IPsec symmetric key from DH secret + exchanged material
4. All interesting traffic encrypted/decrypted with IPsec key
5. Result: Phase 2 tunnel created with a pair of unidirectional SA.

**Characteristics**: Torn down when no interesting traffic exists. Phase 1 remains open.

# VPN Types

- **Policy-based VPN**: Matches traffic by policy rules. Different traffic types (HR, IT, Finance) can use different SA pairs
- **Route-based VPN**: Matches traffic by destination prefix. All traffic types use the same SA pair
