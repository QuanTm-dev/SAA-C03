# SSL Offload & Session Stickiness

## Overview

- A load balancer can handle a secure connection 3 ways: **bridging**, **pass-through**, **offload**.

## Bridging

- Listener is configured for HTTPS.
- LB terminates (decrypts) the client's SSL connection, then opens a **new SSL connection** to the backend.
- LB needs an SSL certificate for the application domain (to terminate the client connection).
- Backend servers need an SSL certificate to support HTTPS (doesn't need to match the LB's certificate — the LB doesn't validate the backend's certificate).
- SSL certificate is partly exposed to AWS (LB decrypts and re-encrypts the traffic).
- Pros:
  - LB can inspect HTTP content → make routing decisions based on it.
- Cons:
  - Certificate management overhead (needed on both LB and backend).
  - Backend handles SSL decrypt/encrypt → added CPU overhead.

## Pass-through

- Listener is configured for TCP.
- LB forwards the original SSL connection directly to the backend, unmodified.
- Backend servers need the SSL certificate of the application domain to decrypt traffic.
- No SSL certificate exposed to AWS.
- Pros:
  - SSL certificate not exposed to AWS.
- Cons:
  - LB can't inspect HTTP content → no content-based routing decisions.
  - Backend still handles SSL decrypt/encrypt → added CPU overhead.

## Offload

- Listener is configured for HTTPS.
- LB terminates the client's SSL connection, forwards **unencrypted HTTP** to the backend.
- Pros:
  - LB can inspect HTTP content → make routing decisions based on it.
  - Backend doesn't handle SSL decrypt/encrypt → reduced CPU overhead.
- Cons:
  - Unencrypted traffic exposed within the AWS network (security concern).
  - SSL certificate exposed to AWS (LB holds and uses it to decrypt).

## Connection Stickiness

- Without stickiness: if the LB routes a request to a different backend, the client can lose session state stored locally on that server.
- Stickiness is an option on a **target group**.
- On the first request, LB generates a cookie: **AWSALB**.
  - Stickiness duration is configurable: **1 second – 7 days**.
  - Requests stick to the same backend instance for that duration.
- Stickiness ends early if the target fails → user moved to a different server.
- Can cause **uneven load distribution**.
- Prefer a **stateless architecture** (store state outside the backend server) over relying on stickiness.
