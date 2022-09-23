---
title: Intro
weight: 1
---

# Intro

## Naming
Atreyu is a critical character in Michael Endes 'never ending story' who, together with falcor, facilitates the success of the hero. Sitting between falcor and svelte in the tech stack we think this is a very fitting description for the framwork. In most code contexts like CLI, APIs and data structures, atreyu is abreviated as 'ayu'.

If you stumble accross 'cloudless' somewhere: this is the parent compnay which offers consulting, hosting and custom development.

'Neverland', abbreviated as 'nv' in code context, is the internal codename for the hosting environment cloudless is building and which combines a database, edge worker runtime and elastic search/kibana intance with single API key. You should normally not see this name directly, as the product will be marketed as cloudlessOne once it is ready.

## Where in the ecosystem does atreyu live



## Why another framework

## What is Atreyu?
Atreyu is a web framework that builds on svelte and falcor.

The guide assume knowledge of at least the basics of svelte, knowledge about falcor can be filled in as necessary.
The scope of atreyu is roughly comparable to a combination of react with create-react-app and redux with graphQL and appollo with a nodejs graphql backend.
The motivation and differentiation to this stack will be apparent in the goals and non goals section.

There is another webframework build for svelte called sapper, but our focus is explicitly to build data rich web applications, that run for days in open tabs, sync data in real time and are ok without server side rendering.

Simply put, if you want to create a dynamic website like a blog, landingpage or online newspaper use sapper, if you want to create a web application, atreyu is there for you.

{{<Aside type="warning">}}
This is an early developer preview. The goal is to get early feedback and improve the developer experience and high level design. Expect changes of the API and stability issues.
{{</Aside>}}

## Values

## Goals and non goals

atreyu does:
- build on svelte for rendering
	- write style with real css
	- write markup as close to real html as possible
	- compile components to self contained js files or web-components to build full apps or gradually enhance existing ones
	- fast and lightwight


- build on falcor for data and state management
	- initial data fetching
	- data updating
	- caching
	- request batching
	- garbage collection for cache / local state to control memory consumption
	- sync server and client state
	- retries and error handling
	- stitching different apis and microservices


- atreyu brings to the game (most features are totally optional):
	- integrating and binding data to UI state
	- offline first approach were apps are usable offline and sync data while online
	- eliminate glue code and setup
	- validation
	- testing
	- data mocking
	- auto rendering for data that has a schema
	- logging + events
	- routig
	- offloading data processing in web worker
	- endless scrolling
	- user management
	- connection to integrated websocket server with RPC protocol
	- introspection

currently out of scope or non-Goals
- Server Side Rendering or Search Engine Optimization
- Browser support before ES 6 Proxy Object Supported
- plugability or replacablility of svelte, webpack or falcor

## motivation
Atreyu is intended to be run completely on edge servers with a 4 layer data-caching system (in tab memory, indexedDB via service worker, edge cache, db).
The atreyu backend currently runs on cloudflare worker infrastructure or in browser service workers, but this is likely to become the standard for edge workers, so google and others may be releasing compatible offerings next to cloudflare in the future.
