# EC2 Instance Types

## What Choosing an Instance Type Affects

- **CPU and Memory**: Raw amount of vCPU cores and RAM;
- **Ratio of resources**: Some instance types give you more of one resource and less of another.
- **Storage**: Local instance store capacity and I/O performance.
- **Network**: Data bandwidth for storage and network traffic.
- **Processor**: Architecture choice (Intel, AMD, AWS Graviton ARM-based).
- **Specialized Hardware**: GPU, FPGA, or other accelerators for specific workloads.

## EC2 Instance Type Categories

| Category              | Use Case                                         | Resource Profile                          |
| --------------------- | ------------------------------------------------ | ----------------------------------------- |
| General Purpose       | Web servers, code repos, diverse workloads       | Balanced CPU, memory, network             |
| Burstable Performance | Low baseline + occasional spikes                 | Low CPU with burst credits (T instances)  |
| Compute Optimized     | Media encoding, HPC, gaming                      | High CPU, lower memory                    |
| Memory Optimized      | In-memory caches, databases, analytics           | High memory-to-CPU ratio                  |
| Storage Optimized     | NoSQL databases, data warehousing, Elasticsearch | High IOPS/throughput, large local storage |
| Accelerated Computing | GPU/FPGA workloads, ML training, graphics        | Specialized hardware (Tesla, NVIDIA)      |

## Naming Convention Breakdown

**Format**: `<series><generation><options>.<size>`

Example: `m7i.large`

- **m** = series (General Purpose)
- **7** = generation number (latest = 7/8)
- **i** = options modifier (i = Intel; a = AMD; g = Graviton; d = instance store; n = network optimized)
- **large** = instance size (medium, large, xlarge, 2xlarge, 4xlarge, 8xlarge, etc.)

### Series Letters (Families)

| Series  | Category                            | Examples               |
| ------- | ----------------------------------- | ---------------------- |
| **T**   | General Purpose (burstable)         | T3, T4                 |
| **M**   | General Purpose (balanced)          | M5, M6, M7, M8         |
| **A**   | General Purpose (ARM Graviton)      | A1                     |
| **C**   | Compute Optimized                   | C5, C6, C7, C8         |
| **R**   | Memory Optimized                    | R5, R6, R7, R8         |
| **X**   | Memory Intensive (large memory)     | X1, X1e (previous gen) |
| **U**   | High Memory (3–32 TiB)              | U7i                    |
| **I**   | Storage Optimized (NVMe SSD)        | I3, I3en, I4i          |
| **D**   | Storage Optimized (HDD)             | D2, D3                 |
| **H**   | Storage Optimized (high throughput) | H1                     |
| **G**   | Accelerated (GPU graphics)          | G4, G5                 |
| **P**   | Accelerated (GPU compute)           | P3, P4                 |
| **F**   | Accelerated (FPGA)                  | F1                     |
| **Inf** | Accelerated (ML inference)          | Inf1, Inf2             |

### Options Modifiers

- **a** = AMD processors
- **g** = AWS Graviton processors (ARM-based)
- **i** = Intel processors
- **d** = Instance store volumes (local NVMe SSD)
- **e** = Extra storage/memory
- **n** = Network and EBS optimized
- **b** = Block storage optimization
- **z** = High CPU frequency

### Generations

- **Always prefer latest generation** for new workloads—better performance and cost-efficiency than older generations.
- Previous generations still available but not recommended unless specific compatibility needed.

## Instance Types by Category

| Categories                | Type         | Details / Notes                                                                                     |
| :------------------------ | :----------- | :-------------------------------------------------------------------------------------------------- |
| **General Purpose**       | M7, M7i, M8g | Balanced CPU, memory, network for diverse workloads.                                                |
|                           | T3, T4, T4g  | Burst performance; low baseline + credit system; cost-effective for variable workloads.             |
|                           | A1           | ARM-based Graviton; efficient for scale-out and containerized workloads.                            |
| **Compute Optimized**     | C7, C7i, C8g | Latest generation; 3–4× more CPU than General Purpose; batch, media encoding, ML inference, gaming. |
| **Memory Optimized**      | R7, R7i, R8g | Latest generation; 3–4× more memory than General Purpose; in-memory caches, databases, analytics.   |
|                           | X2iedn       | Extra memory; lowest $/GiB memory on AWS; large-scale in-memory applications.                       |
|                           | U7i          | Ultra-high memory (12–32 TiB); largest in-memory workloads.                                         |
| **Accelerated Computing** | G5, G4dn     | NVIDIA GPU instances (A10G, T4); graphics processing, ML inference, video transcoding.              |
|                           | P5, P4       | NVIDIA GPU instances (H100, A100); deep learning training, parallel processing, large-scale ML.     |
|                           | Inf2         | AWS Inferentia; cost-optimized ML inference.                                                        |
|                           | F1           | FPGA instances; custom hardware acceleration, genomics, financial modeling.                         |
| **Storage Optimized**     | I4i, I3en    | NVMe SSD; high IOPS and throughput; NoSQL databases, data warehousing, Elasticsearch.               |
|                           | D2, D3       | Dense HDD storage; high sequential throughput; Hadoop, data warehousing, bulk processing.           |
|                           | H1           | High throughput HDD with balanced CPU/memory; HDFS, Apache Kafka, distributed file systems.         |
| **High Performance**      | Hpc7, Hpc6a  | Purpose-built HPC; scientific simulations, deep learning, molecular modeling.                       |
