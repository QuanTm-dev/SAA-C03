# CloudFront - TTL and Invalidations

## Cache expiry and revalidation

- When a cached object expires, CF makes a request to the origin, with two possible outcomes:
  - Object still valid: origin returns 304 Not Modified, and CF serves the cached object to the client
  - Object stale: origin returns 200 OK with the updated object, and CF serves it to the client
- More frequent cache hits lower the load on the origin
- More frequent cache hits improve performance for users

## TTL

### Default, min, and max TTL

- Default TTL is set on a behavior of a distribution
- Any object using the behavior has a default TTL of 24 hours
- Min TTL and max TTL can also be set on a behavior
- Min and max TTL define the range within which an object's overriding TTL can fall
- Min TTL is used if the overriding TTL is lower than min TTL
- Max TTL is used if the overriding TTL is higher than max TTL

### Per-object TTL override

- Each object's TTL can be overwritten using HTTP headers:
  - Cache-Control max-age (in seconds)
  - Cache-Control s-maxage (in seconds)
  - Expires (exact date and time)
- With S3 as the origin, these headers are defined via object metadata

## Invalidations

### Behavior

- Performed on a distribution
- Applies to all edge locations within the distribution
- Not immediate
- Marks all affected objects as expired
- Matches objects by path

### Cost

- Charged per path, regardless of the number of objects matching that path

### Usage guidance

- Should only be thought of as a way to correct cache errors

## Versioned file names

- Use versioned file names if files need to be invalidated regularly
- Example: an HTML file points to `styles-v2.css` to avoid the outdated `styles-v1.css` being served
- Always prefer versioned file names, since they work for both CF cache and browser cache
- More cost effective than invalidations
