# Amazon Cognito

## Overview

- Provides authentication, authorization and user management for applications
- Has two main components: User Pools and Identity Pools

## User Pools

### Characteristics

- User directory that provides sign-up and sign-in options (e.g MFA, SSO) for app users
- Identities are not AWS identities
- Identities cannot access AWS resources directly

### Architecture

1. Application calls User Pools for authentication
2. User Pools return a JWT
3. JWT can be validated by the application to access the application resources or by AWS API Gateway to access AWS Lambda (or other backend resources supported by API Gateway)

- A Cognito-generated JWT is not an AWS credential
- A Cognito-generated JWT cannot be used to access AWS resources

## Identity Pools

### Characteristics

- Provide temporary AWS credentials to access AWS services
- Swap external identities or User Pools identities for short-term AWS credentials. This swap is called federated identities
- Use IAM roles to grant permissions to identities
- Each identity provider needs its own dedicated configuration
- Authenticated identities require a configured IAM role
- If guest access is enabled, another role need to be configured for unauthenticated (guest) identities
- Application must renew AWS credentials once they expire

### Architecture

1. Application calls an identity provider (e.g. Google)
2. Identity provider returns a JWT
3. Application passes the JWT to Identity Pools
4. Identity Pools swap the JWT for AWS credentials by assuming a role
5. AWS credentials are passed back to the application to access AWS resources

## Using User Pools with Identity Pools

### Rationale

- Using Identity Pools alone forces the application to handle multiple identity providers
- Combining both delegates multiple identity provider handling to User Pools
- Application only deals with one identity provider: Cognito User Pools

### Architecture

1. Application calls User Pools for authentication
2. User Pools return a JWT
3. Application passes the JWT to Identity Pools
4. Identity Pools swap the JWT for AWS credentials by assuming a role
5. AWS credentials are passed back to the application to access AWS resources
