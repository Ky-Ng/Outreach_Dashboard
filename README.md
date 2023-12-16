# Curriculum Dashboard
Welcome to `Curriculm Dashboard`: a single source of truth and open-source platform for sustainably maintaining Special Education coding curriculum. 

The motivation for creating `Curriculum Dashboard` is for teacher's to be able to quickly access, edit, and contribute to the curriculum repository in a UI friendly and data-secure manner.

`Curriculum Dashboard` is used and managed by `30+` Special Education instructors including the largest Special Education non-profit in Northern California, [Friends of Children with Special Needs](https://fcsn1996.org) and [Serendipity STEM](http://serendipitySTEM.org).

Below is the live deployed web app in addition to key features and the entire documented engineering design process.
____
## Table of Contents
Introduction:
1. [Live Deployment](#live-deployment)
2. [Frameworks Used](#frameworks-used)
3. [Documentation and Quick Start](#Documentation-and-Quick-Start)

High Level Features
1. Google OAuth Sign In
2. Quick Links (Curriculum Backpack)
3. Curriculum View
4. Data Manipulation (Edit/Add)
5. Auto Redirects
___
## 1) Introduction
____
### Live Deployment
- Curriculum Dashboard is available at  [outreach-dash.web.app](https://outreach-dash.web.app)hosted by `Google Firebase Hosting`
	- Note: due to the Safari Content Security Policy for Google Auth in this project's configuration, the app is not supported on Safari at this time.
____
### Frameworks used
1. Toolchain:
	1. `NodeJS` and `NPM` for local live-server development and deployment builds
	2. `Figma` for frontend wire framing and design
2. Frontend
	1. `VueJS` for dynamic web application rendering
	2. `VuetifyJS` for Material CSS design components
3. Backend
	1. `Firebase` for NoSQL Database Bucket management
	2. `Google OAuth` for Authentication and webpage security
4. Hosting
	1. `Firebase Hosting` and `Firebase CLI` for compiling and building deployable webapp
___
### Documentation and Quick Start
