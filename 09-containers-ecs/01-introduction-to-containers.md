# Introduction to Containers

## The Problem with Virtualization

- Each virtual machine requires a full OS and file system, consuming significant storage and memory.
- Multiple VMs on a host compete for resources, limiting application capacity.

## Docker & Containers: The Solution

### How Containers Work

- Containers run on a host OS without requiring their own OS, drastically reducing resource overhead.
- Containers only run the application and environment it needs to run.
- Ports need to be exposed to allow outside access from the host and beyond.
- Shared OS layers make containers lightweight and efficient compared to virtual machines.
- Containers are portable across different environments.

### Docker Images

- Docker images are stacks of read-only layers, where each layer contains changes from the previous one.
- Images serve as templates for creating and running containers.
- Read-only layers in image are shared between multiple containers.

### Docker Containers

- A container is a separate process that adds a read-write layer on top of an image.
- Changes inside a container are isolated to its read-write layer, not affecting the image.
