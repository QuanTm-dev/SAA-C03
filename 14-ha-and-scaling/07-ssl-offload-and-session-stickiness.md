# SSL Offload & Session Stickiness

## SSL Offload

- There are 3 ways that a load balancer can handle secure connection:
  - Bridging
  - Pass-through
  - Offload

### Bridging

- This is the default mode for Application Load Balancer.
- Listener is configured for HTTPS.
- With bridging, the load balancer terminates (decrypts) the SSL connection between the client and the load balancer, then establishes a new SSL connection to the backend servers.
- The load balancer and the backend servers need to have the SSL certificate of the application domain installed.
- The load balancer uses the SSL certificate to decrypt the incoming traffic, and then re-encrypts it before sending it to the backend servers. The SSL certificate is partly exposed to AWS because of this.
- The backend servers also need to have the SSL certificate installed to decrypt the traffic from the load balancer.
- Pros:
  - The load balancer can inspect the HTTP content of the request and make routing decisions based on it.
- Cons:
  - The SSL certificate needs to be installed on both the load balancer and the backend servers, which can be a management overhead.
  - The backend servers need to handle the SSL decryption and encryption, which can add CPU overhead.

### Pass-through

- With pass-through, it forwards the original SSL connection directly to the backend servers.
- The backend servers need to have the SSL certificate of the application domain installed to decrypt the traffic.
- No SSL certificate expose to AWS.
- Listener is configured for TCP.
- Pros:
  - The SSL certificate is not exposed to AWS.
- Cons:
  - The load balancer cannot inspect the HTTP content of the request, so it cannot make routing decisions based on it.
  - The backend servers still need to handle the SSL decryption and encryption, which can add CPU overhead.

### Offload

- Listener is configured for HTTPS.
- With offload, the load balancer terminates (decrypts) the SSL connection between the client and the load balancer, and then forwards the unencrypted HTTP traffic to the backend servers.
- Pros:
  - The load balancer can inspect the HTTP content of the request and make routing decisions based on it.
  - The backend servers do not need to handle the SSL decryption and encryption, which can reduce CPU overhead.
  - The SSL certificate is still exposed to AWS.
- Cons:
  - The unencrypted traffic are exposed in AWS network, which can be a security concern.

## Connection Stickiness

- Without connection stickiness, if the load balancer directs a request to a different backend server, the client may lose state information, such as session data, when that state is stored locally on the backend server.
- Connection stickiness is an option which can be enabled on a target group.
- If enabled, the first time a user makes a request, the load balancer generates a cookie called AWSALB. A valid duration is between one second and seven days. For this time, sessions will be sent to the same backend instance. This will happen until:
  - If we have a server failure, then the user will be moved to a different server.
  - The cookie could expire, the whole process will repeat and will recieve a new cookie and the process will start again.
- Connection Stickiness can cause uneven load distribution.
- Always prefer stateless architecture (store the state somewhere outside of the backend server) over using this option.
