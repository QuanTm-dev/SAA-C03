# Virtualization 101

> Virtualization is a processing of running multiple operating systems on a single physical hardware.

---

## Traditional Architecture (No Virtualization)

- Physical hardware (CPU, RAM, network, devices)
- One operating system kernel (runs in privileged mode, direct hardware access)
- Applications make system calls to kernel for hardware access

---

## Emulated Virtualization

**Architecture:**

- Physical hardware
- Hypervisor (virtual machine monitor) runs in host OS and manages guest VMs
- Each VM runs its own guest OS and applications (can differ from host OS)

**How it works:**

- Hypervisor intercepts system calls from guest OS and translates privileged instructions to non-privileged equivalents via binary translation
- Guest OS is unmodified; hypervisor emulates all hardware access

**Tradeoff:** Very slow. Binary translation adds significant CPU overhead.

---

## Para-virtualization

**Architecture:** Similar to emulated virtualization, but guest OS is modified.

**How it works:**

- Modified guest OS makes hypercalls (not system calls) directly to hypervisor instead of attempting privileged instructions
- Eliminates binary translation overhead

**Tradeoff:** Faster than emulated virtualization. Requires guest OS modification; more efficient CPU usage.

---

## Hardware-assisted Virtualization

**Architecture:** Similar to emulated virtualization, but physical hardware includes virtualization extensions (Intel VT-x, AMD-V).

**How it works:**

- Guest OS runs unmodified
- When guest OS attempts privileged instructions, CPU traps them and transitions control to hypervisor without halting the system
- Hypervisor handles the trapped instruction

**Tradeoff:** Faster than para-virtualization. Reduced hypervisor overhead; but I/O operations still consume CPU resources because they still require hypervisor mediation.

---

## SR-IOV (Single Root I/O Virtualization)

**Architecture:** Physical hardware is virtualization-aware and partitioned at hardware level.

**How it works:**

- Each VM can directly access partitioned hardware resources without hypervisor involvement
- I/O operations bypass hypervisor entirely

**Tradeoff:** Fastest for I/O-intensive workloads. Direct hardware access reduces CPU overhead and latency.

**EC2 Implementation:** AWS calls this **enhanced networking**.

---

## Key Performance Implications

| Approach          | CPU Overhead | I/O Performance | Guest OS Modified |
| ----------------- | ------------ | --------------- | ----------------- |
| Emulated          | Very high    | Slow            | No                |
| Para              | Moderate     | Moderate        | Yes               |
| Hardware-assisted | Low          | Slow            | No                |
| SR-IOV            | Very low     | Very fast       | No                |
