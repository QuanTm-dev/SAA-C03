# CloudFront - TTL and Invalidations

- When an object cached at edge locations expires, and CF makes a request to the origin server, there are two possible outcomes:
  - The object is still valid at the origin server, the origin server returns a 304 Not Modified response to CF, and CF serves the cached object to the client.
  - The object is stale at the origin server, the origin server returns a 200 OK response with the updated object to CF, and CF serves the updated object to the client.
- More frequent cache hits = lower origin load + better performance for users.

## TTL

- Default TTL of an object is 24 hours. It can be set on a behavior of a distribution. This means any object using the behavior will have the TTL of 24 hours.
- You can also set the min TTL and max TTL on a behavior. These values define the range within which an object can override the default TTL. Min TTL will be used if the overwrite TTL is lower than Min TTL. Max TTL will be use if the overwrite TTL is higher than Max TTL.
- You can overwrite each object TTL using HTTP headers:
  - Cache-control max-age (use seconds)
  - Cache-control s-maxage (use seconds)
  - Expires (use exact Date and time)
- You can define these headers with S3 via object metadata.

## Invalidations

- Cache invalidation can be performed on a distribution.
- Apply to all edge locations within the distribution.
- Cache invalidation charges you the same amount no matter the number of objects.
- Cache invalidations is not immediate.
- Cache invalidations mark all affected objects as expired.
- Cache invalidations match objects by path.
- Cache invalidations should only be thought of as a way to correct cache errors.
- If you regularly need or invalidate the files, use **versioned file name**. For example, your HTML file can point to `styles-v2.css` to avoid the outdated `styles-v1.css` being served.
- You should always prefer **versioned file name** because it works for both CF cache and browser cache. Moreover, it's more cost effective.
