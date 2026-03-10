## Layer 3 limitations

- No guarantee of ordered delivery.
- No method for channels of communication (No multiple simultaneous conversations between 2 devices).
- Packet loss is possible.
- Different packets can experience different routes and delays.
- No flow control. If the source sends data faster than the destination can handle, packets may be dropped.

## Layer 4 - Transport Layer

- Layer 4 has two main protocols:
  - TCP (Transmission Control Protocol): reliable, slower.
  - UDP (User Datagram Protocol): less reliable, faster.

### TCP

- TCP is a connection-oriented protocol. A connection is established between two devices using a random port on a client and a known port on a server. Once established, the connection is bi-directional.
- TCP use **segments** to communicate.

#### Segments structure (important fields)

**Header:**

- Source Port: identifies the sending application.
- Destination Port: identifies the receiving application.
- Sequence Number: used to order segments.
- Acknowledgment Number: used to confirm receipt of segments.
- Flags 'N' things:
  - SYN: Synchronize sequence numbers to initiate a connection.
  - ACK: Acknowledgment field is significant.
  - FIN: No more data from sender, used to terminate a connection.
- Window: Specifies the maximum amount of unacknowledged data the receiver can accept at one time.
- Checksum: Used for error-checking of the header and data.
- Urgent Pointer: Indicates if there is urgent data in the segment.

- Data: The actual payload being transmitted.

## Layer 5 - Session and State

- To add security to the client, you need to use firewall. There are 2 types of firewall:
  - Stateless Firewall: Configure inbound (response) and outbound (initiated/request) connection rules separately. It does not keep track of the state of connections.
  - Stateful Firewall: View inbound and outbound connections as part of a single session. If an outbound connection is allowed, the corresponding inbound response is automatically allowed.
