# Bangladeshi Handicrafts Website

Welcome to the "Bangladeshi Handicrafts" project! This website showcases Facebook businesses in Bangladesh that sell and promote unique handicraft items. The website features business profiles, their handicrafts, and links to their Facebook pages.

## Installation
For running the project locally.
Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install .

```bash
npm install
```
or
```bash
yarn install
```
And Then

```bash
npm run dev
```
or
```bash
yarn dev
```
---
.env.local
```bash
VITE_apiKey=AIzaSyCScBUwGzuYCVnhFrQPUivczV8KhpqTouE
VITE_authDomain=bd-handicraft.firebaseapp.com
VITE_projectId=bd-handicraft
VITE_storageBucket=bd-handicraft.appspot.com
VITE_messagingSenderId=850635495177
VITE_appId=1:850635495177:web:629fe991259635943725d8

```
## Key Features

- **Navbar:** Includes website name, Home, Blog, and conditional login/profile options.
- **Footer:** Provides relevant links, contact details, and social media information.
- **Home Page:**
  - Prominent banner section featuring a leading handicraft business.
  - Business section displaying at least 20 businesses with detailed cards.
  - Sections on the importance and history of handicrafts in Bangladesh and featured products.
- **Business Page:**
  - Banner with business details and product display.
  - Product details including name, materials used, crafting method, rating, and a favorite button.
- **Login and Registration Pages:**
  - Standard login with email/password, Google Sign-in, GitHub Sign-in.
  - Registration form with fields for Name, Email, Password, and Profile Picture URL.
- **Other Features:**
  - Spinner for loading states.
  - 404 page with an appropriate image.
  - Environment variables for sensitive information.
  - Active route indication.
  - Lazy loading for images.
- **Bonus and Optional Features:**
  - Favorite business storage and "My Favorite Business" page.
  - User profile page with editable details.
  - Blog page with explanations on controlled/uncontrolled components, PropTypes, etc.
  - Responsive design and clean code organization.
  - Dark/light theme toggle.

## Technology Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js with Express or NestJs
- **Database:** MongoDB

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB
