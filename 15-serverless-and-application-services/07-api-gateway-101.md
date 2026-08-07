# API Gateway 101

## Core concepts

- API Gateway is a service that let you create and manage API.
- API Gateway acts as an entrypoint for applications talking to your BE services.
- Sit between applications and your BE services.
- API Gateway is highly scalable and available.
- API can handle authorization, throttling, caching, CORS, transformation, OpenAPI spec, direct integration with AWS services.
- API Gateway is a public service.
- Support HTTP(S) and Websocket.
- There are 3 phases in each API GW interaction:
  - Clients make request to the API Gateway. In this phase, API Gateway can authorize, validate, transform the request before it reaches the BE services.
  - API GW forwards the request to the BE services.
  - The response is returned from the BE services to the client via API GW. In this phase, API GW can transform the original response before returning it to the client.
- Can be integrated with CloudWatch Logs to store full stage request and response logs.
- Can be integrated with CloudWatch to store metrics for client and BE services.
- Resource: A logical grouping of endpoints. Think of it like a folder for your endpoints.

## Authentication

- API GW supports many ways of authentication:
  - Natively supported AWS services like Cognito.
  - Custom authentication:
    1. A bearer token is passed to the request.
    2. API GW calls a Lambda to verify the token.
    3. If token is valid, the Lambda return an IAM policy with principal identifier.
    4. API GW evaluates the policy and either forward the request to a BE service or return 403 HTTP status code.

## Endpoint types

- Edge-Optimized: Route the request to the nearest CloudFront POP (AKA edge location).
- Regional: Route the request to the AWS region the endpoint is deployed to.
- Private: Endpoint accessible only within a VPC via interface endpoint.

## Stages

- API are deployed to stages. Think of stage as an environment where endpoints are deployed to.
- Each stage has one deployment.
- Each stage has its own unique endpoints and settings.
- Example: V1 of an endpoint can be deployed to a PROD stage while V2 can be deployed to DEV stage for testing.
- Stages can enable canary deployment. If done, any deployments are made to the canary not the stage. You can configure a certain percentage of traffic is sent to the canary to minimize the impact. Then adjust the value overtime before completely promote the canary to the new base stage.
- Example: Once V2 is tested on DEV, we can promote it to PROD canary. When we're confident, we can promote it to new PROD stage.

## Errors

- Errors returned by API Gateway are divided into 2 categories:
  - 4xx: Client error
  - 5xx: Server error
- Some common errors:
  - 400: Bad request
  - 403: Access denied
  - 429: API Gateway can throttle
  - 502: Bad Gateway Exeception - Bad output returned by the BE services
  - 503: Service Unavailable - BE services are unavailable
  - 504: Integration Failure/Timeout: API Gateway has default timeout of 29s. If timeout exceeds, the error code will be thrown.

## Caching

- Caching is configured per stage.
- Caching size can be from 500MB to 237GB.
- Cache TTL default is 300s.
- Cache TTL can be configured from 0 to 3600s.
- Cache can be encrypted.
- Calls are only made to the BE services when cache miss => Improve performance, cost and load.
