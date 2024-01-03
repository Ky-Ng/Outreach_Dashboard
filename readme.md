# Curriculum Dashboard
Welcome to `Curriculm Dashboard`: a single source of truth and open-source platform for sustainably maintaining Special Education coding curriculum. 

The motivation for creating `Curriculum Dashboard` is for teacher's to be able to quickly access, edit, and contribute to the curriculum repository in a UI friendly and data-secure manner.

`Curriculum Dashboard` is used and managed by `30+` Special Education instructors including the largest Special Education non-profit in Northern California, [Friends of Children with Special Needs](https://fcsn1996.org) and [Serendipity STEM](http://serendipitySTEM.org).

Below is the live deployed web app in addition to key features and the entire documented engineering design process.
____
## Table of Contents
A) Introduction:
1. [Live Deployment](#live-deployment)
2. [Documentation](#Documentation)
3. [Frameworks Used](#frameworks-used)

B) High Level Features
1. [Google OAuth Sign In](#Google-OAuth-Sign-In)
2. [Quick Links (Curriculum Backpack)](#quick-links-curriculum-dashboard)
3. [Curriculum View](#Curriculum-View)
4. [Data Manipulation (Edit/Add)](#data-manipulation-editadd)
5. [Auto Redirects](#Auto-Redirects)

C )Contribute
1. [Pull Requests](#Pull-Requests)
___
## A) Introduction
____
### Live Deployment
- Curriculum Dashboard is available at  [outreach-dash.web.app](https://outreach-dash.web.app) hosted by `Google Firebase Hosting`
	- Note: due to the Safari Content Security Policy for Google Auth in this project's configuration, the app is not supported on Safari at this time.
____
### Documentation
- As this was one of my first times managing and designing a project from the ground up, I wanted to `document` and `reflect` every step of the learning process.
	- To see the full engineering documentation for this process from project inception, follow this [90 page engineering notebook](https://drive.google.com/file/d/1rWiocHD5oEUziSY2ktYJqPlOrtbdPh96/view?usp=sharing).
	- For a quick start guide on creating your own curriculum dashboard, follow this [Curriculum Dashboard Instructable](https://www.instructables.com/Curriculum-Dashboard/).
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
## B) High Level Features
____
### Google OAuth Sign In
- In order to track the changes made by teacher's and rollback changes in the event of malicious user action, Curriculum Dashboard requires Google Authentication before accessing the `/home` server endpoint.
- Using `Google OAuth microservice` increases `PII` security and user trust
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/homepage.png)

___
### Quick Links (Curriculum Dashboard)
- After logging in, the `Serendipity Backpack` contains the top 3 most used links:
	- `Serendipity STEM Master Sheet`: Weekly logistics and class schedule
	- `Train the Trainers Program`: Teaching Philosophy for teacher participating in the `Train the Trainers Program (TTP)`
	- `Curriculum Template`: An easy duplicatable curriculum template for teacher's to create curriculum and add it to this open-source repository
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/backpack_quick_ref.png)
___
### Curriculum View
- Teacher's who are looking for curriculum can sort the curriculum based on `week` or `name`
![[alphabetical_sorting.png]]
- By pressing the dropdown, teacher's can easily access the week's curriculum and code
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/teacher_code.png)
- Curriculum documentation contains the high level concepts, applicable`NGSS Engineering Standards`, and step by step instructions on how to teach the curriculum
	- Ex: the concept related here is: [`3-5-ETS1-3 Engineering Design`](https://www.nextgenscience.org/pe/3-5-ets1-3-engineering-design)
	- Ex: [Dino Run Curriculum](https://docs.google.com/document/d/1kA0PqtdjDRLyuZOjBlbdEOGiDDWlkd3RcMDb6P-Lrk0/edit?usp=sharing) and [Scratch Coding Link](https://scratch.mit.edu/projects/407274223/editor/)
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/curriculum_documentation.png)
____
### Data Manipulation (Edit/Add)
- To edit curriculum, teacher's can click on the pencil icon on the right to open up the existing information and save the changes to the `Firebase Datastore`
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/edit_curriculum.png)
- The Plus button adds curriculum and automatically sorts the newly created curriculum in based on the current sorting method (name/week)
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/add_curriculum.png)
- In order to improve network latency, adding a curriculum item both (1) `creates a local version of the curriculum` while (2) `lazily sends a PATCH request` to the datastore so that the update does not block the user from further actions
	- During the next user session, this data will be fetched from the datastore and reflect the changes without the need for a complete refresh from the frontend client
	- Example with the "Curriculum" `Firebase Collection` implemented:
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/backend_flow.png)
- This 2 step `frontend` hiding and `lazy` backend request is used in `update` and `delete` operations
	- This way, there is no refreshes while the user perceives an up to date data view
___
### Auto Redirects
- In order to protect the data usage, unauthenticated users will automatically be redirected to the login page
- Additionally, any url endpoints not specified in the `Vue Router` will be automatically redirected to the `404 Error Page`
	- The `404 Error Page` will then attempt to redirect the user to the home page but will redirect to the authentication page if the user is not logged in
- API Keys and Secrets are stored in `Firebase Hosting` scripts to avoid privacy leakages
![](https://raw.githubusercontent.com/Ky-Ng/Outreach_Dashboard/master/readme_assets/404_error.png)
___
## C) Contribute
___
### Pull Requests
Curriculum Dashboard is an open-source project that is actively used by Special Needs organizations in the Greater Bay Area. 

Request or contribute new feature branches: https://github.com/Ky-Ng/Outreach_Dashboard/pulls