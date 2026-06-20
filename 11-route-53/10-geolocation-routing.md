# Geolocation Routing

- With Geolocation Routing, you tag your resources with a geographic location. The resource locations and the user locations are then used to determine which resource to route traffic to.
- There are 4 types of locations:
  - Continent
  - Country
  - State
  - Default (Fallback)

## How it works

1. Route 53 determines the user's location via **IP lookup**.
2. Route 53 starts checking for matching records in the following order: State, Country, Continent, Default (Optional).
3. If a match is found, a record is returned and no upper levels are checked.

## Use Case

- Can be used for regional restrictions, language specific content or load balancing based on geographic distribution of users.
- **IMPORTANT**: Geolocation routing is not about the closest resource, it return relevant locations only.
