# 🛡️ Route 53 Health Checks

## General Behavior

- Route 53 performs periodic health checks on endpoints.
- If an endpoint is unhealthy, Route 53 removes it from DNS responses.
- Example: With 3 servers, if 1 fails, DNS only returns the 2 healthy ones.
- Health checks are separate objects in Route 53; records reference them but don’t contain them directly.

## Health Check Execution

- Performed by a global fleet of health checkers.
- Blocking these checkers (e.g., treating them as bots) may cause false alarms.
- Default frequency: 30 seconds.
- Can be increased to 10 seconds (higher cost).
- Each checker runs independently, so the check frequency is shorter.
- Endpoint considered healthy if ≥18% of checkers succeed.

## Types of Checks

- **TCP Check**
  - Attempts to establish a TCP connection within 10 seconds.
- **HTTP/HTTPS Check**
  - Similar to TCP, but expects a response within 4 seconds.
  - Endpoint must return 200 or 300 status code within 2 seconds.
- **HTTP/HTTPS String Matching**
  - Same as HTTP/HTTPS, but also verifies a specific string in the response body (within first 5120 bytes).

## Health Check Categories

- **Endpoint Check**
  - Directly monitors a specified endpoint.
- **CloudWatch Alarm Check**
  - Health depends on the state of a CloudWatch alarm.
  - If alarm is in ALARM state, health check is unhealthy.
- **Calculated Check**
  - Combines results of other health checks.
  - If any referenced check is unhealthy, this check is unhealthy.
