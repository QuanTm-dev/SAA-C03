# R53 Private Hosted Zones

- R53 Private Hosted Zones is a zone hosted by R53 (Private Name Servers).
- Accessible only from within the VPCs associated with the Private Hosted Zone.
- Supports split-view (split-horizon) for public and internal use with same zone name.
- A common architecure is to make the public hosted zone a subset of the private hosted zone containing only those records that are meant to be accessed from the Internet, while inside VPCs associated with the private hosted zone all resource records can be accessed.
