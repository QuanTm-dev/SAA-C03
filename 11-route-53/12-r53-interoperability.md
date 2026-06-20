# R53 Interoperability

- R53 normally has 2 jobs:
  - Domain registration
  - DNS hosting
- R53 can do both or just one of those jobs.

## Both jobs: How R53 works

1. R53 accepts your money and registers your domain with the appropriate registry.
2. R53 allocates 4 name servers for your domain.
3. R53 creates a zone file on the above name servers.
4. R53 communnicates with the registry of the Top Level Domain (TLD) to set the NS records for the domain to point to the 4 name servers.

## Just Domain registration: How R53 works

1. R53 accepts your money and registers your domain with the appropriate registry.
2. You pass the NS records of your DNS hosting provider to R53.
3. R53 communnicates with the registry of the Top Level Domain (TLD) to set the NS records for the domain to point to the NS records of your DNS hosting provider.

## Just DNS hosting: How R53 works

1. You register your domain with any registrar.
2. R53 allocates 4 name servers for your domain.
3. R53 creates a zone file on the above name servers.
4. You pass the NS records of R53 to your registrar.
