# CloudFront Architecture

## Overview

- CloudFront is a content delivery network (CDN)
- Speeds up content delivery by caching assets across a global network
- Caches read-only content
- Write operations go directly to the origin, bypassing CloudFront

## Core Terms

- **Origin**: the source location of your content, can be an S3 origin or a custom origin
- **Distribution**: the configuration unit for CloudFront
- **Edge location**: the physical location where CloudFront caches your content
- **Regional edge cache**: a cache layer between the origin and the edge locations. Edge locations check the regional edge cache first, before going to the origin

## Distribution

- Each distribution has a unique domain name for accessing your content
- The domain name can be AWS-generated or a custom domain name you own
- Each distribution is associated with a set of edge locations
- Must be deployed before it can serve content
- Holds the general configurations
- Integrates with AWS Certificate Manager (ACM) for SSL/TLS encryption of your content

## Behaviors

- Determine how a distribution handles requests for different content
- A distribution can have one or more behaviors
- Each behavior has its own configurations
- Hold the "how to handle a request" configurations
- Match requests based on path patterns
- The more specific behavior takes precedence over less specific behaviors
- Each behavior is associated with one origin or origin group
- Mental note: configurations are usually said to be set on the distribution, but most important configuration is done in behaviors (No Anki cards needed)

## Origin Groups

- Contain one primary origin and one secondary origin
- The secondary origin is used if the primary is unavailable

## Restricting Access

- A behavior can be configured to restrict access to your content
- Users must then use signed URLs or signed cookies to access the content
- EXAM POWER UP: "trusted signer" or "trusted key group" in a question refers to signed URLs or signed cookies
