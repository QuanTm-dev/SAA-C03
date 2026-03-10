# Why do we need DNSSEC?

- DNSSEC provides:
  - Origin Authentication: Verify that the DNS data is from the correct source.
  - Data Integrity: Ensure that the DNS data has not been altered in transit.

# Terms

- DNSSEC: Domain Name System Security Extensions
- RRSET: Resource Record Set: A set of DNS records of the same name and type for a domain name. E.g., all A records for www.example.com form an RRSET.
- RRSIG: Resource Record Signature: A digital signature for a DNS RRSET.
- Zone Signing Key (ZSK): A key used to sign the RRSETs in a DNS zone.
- Key Signing Key (KSK): A key used to sign the ZSKs.
- DS Record: Delegation Signer Record: A record in the parent zone that points to the KSK of the child zone.
- DNSKEY Record: A record that contains the public key (ZSK or KSK) used to verify signatures in DNSSEC.

# How DNSSEC works?

## DNSSEC Chain of Trust – Detailed Step-by-Step

### Step 1: Root Trust Anchor (Starting Point)

- The resolver is preconfigured with the **Root Zone KSK public key**
- This public key is the **trust anchor**, hard coded into the resolver
- No verification is needed yet because this key is already trusted

### Step 2: Verify the Root DNSKEY RRSET

- Resolver retrieves the **Root DNSKEY RRSET**
- This RRSET contains:
  - Root KSK public key
  - Root ZSK public key
- Resolver verifies:
  - **RRSIG(DNSKEY)** using the **Root KSK public key**

✔ Result:

- Root DNSKEY RRSET is trusted
- Root ZSK public key is now trusted

### Step 3: Verify the Root Zone Data Using Root ZSK

- Root ZSK public key is used to verify:
  - **DS record RRSET for the TLD (e.g., `.com`)**
- Resolver verifies:
  - **RRSIG(DS)** using the **Root ZSK public key**

✔ Result:

- DS record for `.com` is trusted

### Step 4: Establish Trust in the TLD KSK (.com)

- Resolver queries `.com` for its **DNSKEY RRSET**
- `.com` DNSKEY RRSET contains:
  - `.com` KSK public key
  - `.com` ZSK public key
- Resolver checks:
  - Hash of `.com` KSK public key
  - Matches it against the **trusted DS record from the root**

✔ Result:

- `.com` KSK public key is trusted

### Step 5: Trust the TLD DNSKEY RRSET

- Resolver verifies:
  - **RRSIG(DNSKEY)** of `.com`
  - Using the **trusted `.com` KSK public key**

✔ Result:

- `.com` DNSKEY RRSET is trusted
- `.com` ZSK public key is now trusted

### Step 6: Verify the Domain DS Record (example.com)

- Resolver queries `.com` for `example.com`
- `.com` returns:
  - **DS record RRSET for `example.com`**
- Resolver verifies:
  - **RRSIG(DS)** using the **trusted `.com` ZSK public key**

✔ Result:

- DS record for `example.com` is trusted

### Step 7: Establish Trust in the Domain KSK (example.com)

- Resolver queries `example.com` for its **DNSKEY RRSET**
- DNSKEY RRSET contains:
  - `example.com` KSK public key
  - `example.com` ZSK public key
- Resolver checks:
  - Hash of `example.com` KSK public key
  - Matches it with the **trusted DS record from `.com`**

✔ Result:

- `example.com` KSK public key is trusted

### Step 8: Trust the Domain DNSKEY RRSET

- Resolver verifies:
  - **RRSIG(DNSKEY)** for `example.com`
  - Using the **trusted `example.com` KSK public key**

✔ Result:

- `example.com` DNSKEY RRSET is trusted
- `example.com` ZSK public key is now trusted

### Step 9: Verify Final DNS Data (RRSET)

- Resolver requests a DNS record (e.g., A record)
- `example.com` returns:
  - **RRSET (A record)**
  - **RRSIG(A)** created using the **ZSK private key**
- Resolver verifies:
  - **RRSIG(A)** using the **trusted ZSK public key**

✔ Result:

- Final DNS RRSET is trusted and authentic

# Why do we need KSK?

- With ZSK only, if we want to rotate the ZSK, we would need to update the DS record (assume the DS record is the ZSK) in the parent zone every time.
- With KSK, if we want to rotate the ZSK, we only need to update the ZSK in the child zone and sign it with the KSK. The DS record in the parent zone remains unchanged until we decide to rotate the KSK. The frequency of KSK rotation is typically much lower than that of ZSK rotation.
