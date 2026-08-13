# Cloudfront Architecture

- CloudFront is a content delivery network (CDN).
- CloudFront speeds up content delivery by caching your assets across a global networks.

## CloudFront Terms

- Origin: The source location of your content, can be S3 Origin or Custom Origin.
- Distribution: The configuration unit for CloudFront.
- Edge Location: The physical location where CloudFront caches your content.
- Regional Edge Cache: A cache layer that sits between your origin and the edge locations. Edge locations will first check the regional edge cache before going to the origin for content.

## Architecture

- Each distribution has a unique domain name that you can use to access your content.
- The domain name can be AWS generated or a custom domain name that you own.
- Each distribution is associated with a set of edge locations.
- Distribution needs to be deployed before it can serve the content.
- Can be integrated with AWS Certificate Manager (ACM) to provide SSL/TLS encryption for your content.
- CloudFront can only be used for read-only content.
- Write operations go directly to the origin, bypassing CloudFront.
- Distributions use behaviors to determine how to handle requests for different content.
- A distribution can have one or more behaviors.
- Each behavior is associated with 1 origin or origin group.
- An origin group can have 1 primary origin and 1 secondary origin. Secondary Origin will be used if the primary is unavailable.
- Behaviors match requests based on path patterns. The more specific behavior takes precedence over less specific behaviors.
- Each behavior has its own configurations.
- You can configure behavior to restrict access to your content. The users must use signed URLs or signed cookies to access your content. - EXAM POWER UP: If the question mention about trusted signer or trusted key group, it is referring to signed URLs or signed cookies.
- Mental note: While we usually say configurations are set on Distribution, most of the important configuration is actually done in the behaviors. Distribution contains General configurations, Behavior contain "How to handle a request" configurations.
