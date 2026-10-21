# API Gateway

## Overview

- Service for creating and managing APIs
- Acts as the entrypoint between applications and BE services
- Highly scalable and available
- Public service
- Supports HTTP(S) and WebSocket
- Resource: A logical grouping of endpoints. Think of it like a folder for your endpoints.

## Built-in capabilities

- Handles authorization
- Handles throttling
- Handles caching
- Handles CORS
- Handles request/response transformation
- Supports OpenAPI spec
- Integrates directly with AWS services

## Request lifecycle

- Each API GW interaction has 3 phases:
  1. client sends the request to API GW. API GW can authorize, validate and transform the request before it reaches the BE
  2. API GW forwards the request to the BE services
  3. BE response returns to the client via API GW. API GW can transform the original response before returning it

## Monitoring

- Integrates with CloudWatch Logs to store full stage request and response logs
- Integrates with CloudWatch to store client and BE metrics

## Authentication

- Supports many authentication methods
- Natively supports AWS services such as Cognito

### Custom authentication

1. A bearer token is passed to the request.
2. API GW calls a Lambda to verify the token.
3. If token is valid, the Lambda return an IAM policy with principal identifier.
4. API GW evaluates the policy and either forward the request to a BE service or return 403 HTTP status code.

## Endpoint types

- Edge-Optimized: routes requests to the nearest CloudFront POP (AKA edge location).
- Regional: Route the request to the AWS region the endpoint is deployed to.
- Private: accessible only within a VPC via an interface endpoint

## Stages

- APIs are deployed to stages
- A stage is an environment that endpoints are deployed to
- Each stage has one deployment
- Each stage has its own unique endpoints
- Each stage has its own settings
- Example: V1 of an endpoint can be deployed to a PROD stage while V2 can be deployed to DEV stage for testing.

### Canary deployments

- Stages can enable canary deployment
- With canary enabled, deployments go to the canary, not the stage
- A configurable percentage of traffic goes to the canary to minimize impact
- Adjust the percentage over time
- Once confident, promote the canary to the new base stage
- Example: after V2 is tested on DEV, promote it to PROD canary, then to the PROD stage

## Errors (No Anki Cards Needed)

- 4xx: client errors
- 5xx: server errors

### Common errors

- 400: Bad Request
- 403: Access Denied
- 429: Too Many Requests, API GW can throttle
- 502: Bad Gateway Exception, BE services returned bad output
- 503: Service Unavailable, BE services are unavailable
- 504: Integration Failure/Timeout, raised when the integration exceeds the default 29s timeout

## Caching

- Configured per stage
- Cache size ranges from 500MB to 237GB
- Default TTL is 300s
- TTL configurable from 0 to 3600s
- Cache can be encrypted
- Improves performance, cost and BE load
