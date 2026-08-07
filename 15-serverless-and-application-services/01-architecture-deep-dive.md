# Architecture Deep Dive

## Limitation of Monolithic

- One error on the host can bring down the entire application.
- Expensive to scale.

## Evolve to Multi-tiered Architecture

- Breaks down into multiple tiers can solve the problems of monolithic architecture.
- The tiers still communicate synchronously, which can lead to bad user experience if one of the tiers is slow.
- The tiers still consume resources even if they are not being used.

## Evolve to Event Driven Architecture

- With asynchronous communication, the user doesn't have to wait for the response from the service.
- Mature event driven architecture only consumes resources while handling events.
