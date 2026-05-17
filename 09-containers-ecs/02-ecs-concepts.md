# ECS Concepts

> ECS orchestrates containers across EC2 and Fargate, with tasks defined as blueprints and services managing desired replica counts.

## Core Components

- **ECS** is a service that accept a container and instructions user provided to decide where or how to run that container.
- **ECS Cluster** is where tasks and services run.
- **ECR** is AWS-provided container image registry .

## Task Definition & Containers

- **Task Definition**: Blueprint for the environment the containers will run on, resources (CPU, memory), networking mode, compatibility (EC2/Fargate) and **Task Role**
- **Container Definition**: Tells ECS where your container image is, which port your container is going to use, and other things.
- **Task**: Represents a self contained application; can contain 1 or many containers.

## IAM & Security

- **Task Role**: IAM role which the task can assume to access AWS Resource.

## Deployment & Scaling

- **ECS Service**: Specify how you want to scale a task. For example, how many task replicas you need to run.
- **Launch Types**: EC2 (instance-based) or Fargate (serverless container computing).
- Tasks and Services are deployed to ECS Clusters.
