## Overview

- Layer 2 builds on Layer 1 and works across different physical mediums (Ethernet, Wi-Fi, fiber optics).
- Layer 2 is responsible for **node-to-node (device to device) data transfer** .
- Uses **frames** for local network communication between devices.

## Key Concepts

### MAC Addresses

- Unique 48-bit hardware identifier for each network interface card (NIC).
- Format: Hexadecimal (example: 00:1A:2B:3C:4D:5E).
- First 24 bits = manufacturer, last 24 bits = device.
- Assigned by manufacturer, globally unique.

### Media Access Control (MAC)

- Checks if another device is transmitting using the carrier signal (CSMA - Carrier Sense Multiple Access) before sending frames to layer 1.
- Only transmits if the carrier signal is absent.

=> Layer 2 helps reduce collisions compared to Layer 1.

### Collision Detection (CD)

- If two devices check the carrier signal at the same time, and both see that the carrier signal is not present, they may both transmit at the same time, causing a collision.
- If two devices transmit simultaneously, a collision occurs.
- Both devices send a jam signal, stop, and retry after a random delay. The random delay differs between devices to avoid repeated collisions.

## Frame Structure

- **Preamble:** Signals the start of a frame.
- **Destination MAC Address:** Identifies the recipient.
- **Source MAC Address:** Identifies the sender.
- **EtherType/Length:** Specifies protocol type of layer 3 or payload length.
- **Payload/Data:** The actual data being sent.
- **Frame Check Sequence (FCS):** Detects transmission errors.

## Layer 2 Device - Switch

### Limitations of Hubs

- Broadcast data to all devices (only the target device process it, the others ignore it due to Layer 2) wasting bandwidth.
- Collisions affect all connected devices since data broadcasts to all ports.

### Switch Operation

- **MAC Address Table:** Maps MAC addresses to ports. Store source address and port on first frame arrival.
- **Frame Forwarding:**
  - Known destination: Forwards to specific port only.
  - Unknown destination: Broadcasts to all ports (except incoming port).
- **Collision Domains:** Each port has its own collision domain; collisions on one port don't affect others.
- **Benefits:** Reduces unnecessary traffic and collisions compared to hubs.
