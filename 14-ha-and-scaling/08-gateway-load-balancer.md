# Gateway Load Balancer

## Why do we need a Gateway Load Balancer?

- Your app might need to use a third-party virtual appliance for security, monitoring, or other purposes. For example, you might want to use a third-party firewall appliance to inspect and filter traffic before it reaches your application or goes out to the internet.
- Building a highly available and scalable solution for this can be challenging.

## What is a Gateway Load Balancer?

- A service to **run and scale third‑party virtual appliances**.
- Works for **inbound and outbound traffic**.
- There are 2 main components of a Gateway Load Balancer:
  - **Gateway Load Balancer Endpoint (GWLBE)**: This is an elastic network interface (ENI) that you can create in your VPC. It serves as the entry point for traffic that go to or exit your VPC.
  - **Gateway Load Balancer (GWLB)**: A service used to balance the traffic across multiple backend instances - which is just EC2 instances running virtual appliance software.
- Uses **GENEVE protocol** for traffic encapsulation between GWLB and virtual appliances. This preserves original packet without modification.

## How it works

- There are 2 VPCs in this architecture:
  - **VPC A**: This is where IGW, GWLBE, ALB and your application instances are running. The GWLBE is used to send traffic to the GWLB in VPC B.
  - **VPC B**: This is where the GWLB and your virtual appliances are running.

### Inbound traffic

1. Clients send traffic to the IGW.
2. The IGW sends the traffic to the GWLBE.
3. The GWLBE sends it to the GWLB.
4. The GWLB encapsulates the traffic using the GENEVE protocol and distributes the traffic to the backend virtual appliances (EC2 instances).
5. The virtual appliances process the traffic and send it back to the GWLB.
6. The GWLB sends the processed traffic back to the GWLBE, which sends it to the ALB.
7. The ALB distributes the traffic to 1 of your application instances.

### Outbound traffic

1. Your application instances send traffic to the GWLBE.
2. The ALB sends the traffic to the GWLBE.
3. The GWLBE sends it to the GWLB.
4. The GWLB encapsulates the traffic using the GENEVE protocol and distributes the traffic to the backend virtual appliances (EC2 instances).
5. The virtual appliances process the traffic and send it back to the GWLB.
6. The GWLB sends the processed traffic back to the GWLBE, which sends it to the IGW.
7. The IGW sends the traffic to the clients.
