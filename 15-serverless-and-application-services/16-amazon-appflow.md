# Amazon AppFlow

## Overview

- AWS AppFlow allows you to exchange data between applications.
- Fully managed integration service

## Use cases

- Sync data across applications
- Aggregate data from different sources to avoid data silos

## Network connectivity

- Uses a public endpoint by default
- Supports PrivateLink

## Connectors

- Offers many connectors for popular applications
- Custom connectors can be built with the SDK

## Core components

- Three main components: Flow, Connector, and Connection

### Flow

- Pipeline that moves data between a source and a destination
- Can transform data while moving it

### Connector

- Plugin that lets AppFlow communicate with other applications

### Connection

- Resource that stores the credentials and configuration for a connector
- Can be reused across multiple flows

## Flow configuration

- Source and Field mapping needs to be defined in the flow.
- Data Transformation, Filtering, and Validation can optionally be applied in the flow.
