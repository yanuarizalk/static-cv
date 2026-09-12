# Static CV / Resume Website

[![Node Version](https://img.shields.io/badge/node-%3E%3D12.0.0%20%3C%3D14.21.3-brightgreen.svg)](package.json)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.0.15-38B2AC.svg)](https://tailwindcss.com/)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-v3.4.1-8BC0D0.svg)](https://alpinejs.dev/)

A modern, high-performance, print-optimized static curriculum vitae (CV) & personal portfolio website. Built with a data-driven architecture using **Alpine.js**, styled with **Tailwind CSS**, bundled with **Webpack**, and designed to produce pixel-perfect output for both web browsers and printed PDF exports.

Repository: [https://github.yanuarizal.net/static-cv](https://github.yanuarizal.net/static-cv)

---

## Table of Contents

- [Static CV / Resume Website](#static-cv--resume-website)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Key Features](#key-features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development Server](#development-server)
    - [Production Build](#production-build)
  - [Available Scripts](#available-scripts)
  - [Customization Guide](#customization-guide)
    - [1. Updating Resume Content](#1-updating-resume-content)
    - [2. Site Configuration \& Metadata](#2-site-configuration--metadata)
    - [3. Certificates \& Media Assets](#3-certificates--media-assets)
    - [4. Styling \& Theming](#4-styling--theming)
  - [Print \& PDF Export](#print--pdf-export)
  - [Deployment](#deployment)
    - [Surge](#surge)
    - [FTP](#ftp)
    - [Netlify / Static Hosts](#netlify--static-hosts)
  - [License](#license)

---

## Overview

This project provides a clean, responsive, single-page CV application. Instead of hardcoding content directly across static HTML markup, all resume data—including personal information, work experience, education, skills, and certifications—is maintained in a centralized JavaScript data object.

Alpine.js binds and renders this data reactively into an accessible HTML structure, while Tailwind CSS and customized SCSS rules ensure the document renders elegantly on screens of all sizes and outputs cleanly when printed or exported as a PDF.

---

## Key Features

- **Data-Driven Architecture:** All resume content is maintained separately in `src/javascripts/variables.js`, allowing rapid updates without modifying HTML markup.
- **Print & PDF Optimized:** Dedicated `@media print` rules, Tailwind CSS print classes, and CSS page-break properties (`break-inside-avoid-page`, `break-before-page`) deliver clean multi-page PDF generation without broken cards or awkward cutoffs.
- **Responsive Layout:** Mobile-first responsive layout that adapts seamlessly across phone, tablet, and desktop viewports.
- **Lightweight Reactivity:** Uses Alpine.js (v3) for declarative DOM rendering without the bundle overhead of larger frameworks.
- **Automated Asset Pipelines:**
  - Automatic cross-platform favicon generation for Web, iOS, and Android devices via `favicons-webpack-plugin`.
  - Automatic `sitemap.xml` and `robots.txt` generation during production builds.
  - Image optimization pipeline using `image-webpack-loader`.
  - CSS minification with `cssnano` and `mini-css-extract-plugin`.
  - ES6+ JavaScript transpilation using Babel and ESLint.
- **Live Development Server:** Fast local development with hot module reloading (`webpack-dev-server`).
- **Bundle Inspection:** Integrated `webpack-bundle-analyzer` and `size-plugin` to monitor bundle footprint and asset weight.

---

## Tech Stack

| Layer                   | Technology                                                                                      | Purpose                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Core Framework**      | [Alpine.js](https://alpinejs.dev/) (v3)                                                         | Lightweight reactive data binding for templates               |
| **Styling**             | [Tailwind CSS](https://tailwindcss.com/) (v3) & [Sass](https://sass-lang.com/)                  | Utility-first styling, responsive grids, and print rules      |
| **Icons**               | [FontAwesome SVG](https://fontawesome.com/)                                                     | Scalable vector icons for contact links & badges              |
| **Date Handling**       | [date-fns](https://date-fns.org/)                                                               | Date formatting and localized duration rendering              |
| **Bundler**             | [Webpack](https://webpack.js.org/) (v4)                                                         | Asset processing, bundling, minification, and code extraction |
| **Transpiler & Linter** | [Babel](https://babeljs.io/), [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) | JavaScript and SCSS code quality and standard enforcement     |
| **Deployment**          | [Surge](https://surge.sh/) / [Netlify](https://www.netlify.com/) / FTP                          | Static hosting deployment                                     |

---

## Project Structure

```text
static-cv/
├── .github/                   # GitHub issue templates and funding configs
├── config/                    # Webpack and site build configurations
│   ├── site.config.js         # Site metadata (name, URL, favicon, analytics)
│   ├── site.deploy.js         # FTP deployment script
│   ├── site.setup.js          # Interactive setup wizard
│   ├── webpack.config.js      # Main Webpack configuration & devServer settings
│   ├── webpack.loaders.js     # Loaders (Babel, Sass, PostCSS, Images, Fonts)
│   └── webpack.plugins.js     # Webpack plugins (HTML, Favicons, Sitemap, Robots)
├── src/                       # Application source code
│   ├── 404.html               # Custom 404 error page
│   ├── index.html             # Main CV HTML template powered by Alpine.js
│   ├── robots.txt             # Default robots rules
│   ├── assets/                # Static assets (favicons, images, certificates)
│   │   ├── favicon.png        # Source icon (512x512) for automated favicon generation
│   │   └── certs/             # Certificate previews and thumbnail images
│   ├── javascripts/           # Client-side scripts and data store
│   │   ├── methods.js         # Formatting and URL helper functions
│   │   ├── scripts.js         # Application bootstrap & Alpine initialization
│   │   └── variables.js       # Central data store (work history, skills, certs)
│   └── stylesheets/           # Global styles and resets
│       └── styles.scss        # Scss stylesheet with print media rules
├── .editorconfig              # Editor code formatting configuration
├── .eslintrc.js               # ESLint configuration (Airbnb base)
├── .stylelintrc.js            # Stylelint configuration for SCSS
├── netlify.toml               # Netlify deployment configuration
├── package.json               # Project dependencies and npm scripts
├── tailwind.config.js         # Tailwind CSS theme and purge settings
└── README.md                  # Project documentation
```

---

## Getting Started

### Prerequisites

This project uses Webpack 4 and `node-sass` 4.x, which require a compatible Node.js version as declared in `package.json`:

- **Node.js:** `>=12.0.0 <=14.21.3` (recommended via [nvm](https://github.com/nvm-sh/nvm))
- **npm:** `>=6.0.0`

If you use `nvm`, switch to a supported Node release:

```bash
nvm install 14
nvm use 14
```

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/yanuarizalk/static-cv.git
cd static-cv
npm install
```

### Development Server

Launch the local development server with hot-reloading:

```bash
npm start
```

Once running, navigate to `http://localhost:8111` in your browser. Any changes made to templates, styles, or data will trigger hot-reloading.

### Production Build

Compile and optimize all assets into the `dist/` directory:

```bash
npm run build:dist
```

To preview the built production bundle locally:

```bash
npm run start:dist
```

This runs a local production HTTP server serving the contents of the `dist/` folder.

---

## Available Scripts

| Script                | Command                                                           | Description                                                  |
| --------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| `npm start`           | `cross-env NODE_ENV=development webpack-dev-server ...`           | Runs local dev server on port `8111` with HMR                |
| `npm run build:dist`  | `cross-env NODE_ENV=production webpack ...`                       | Builds optimized production static files into `dist/`        |
| `npm run start:dist`  | `cross-env NODE_ENV=production webpack ... && http-server ./dist` | Compiles production assets and serves them via `http-server` |
| `npm run lint:js`     | `eslint "src/**/*.js"`                                            | Runs ESLint validation on JavaScript files                   |
| `npm run lint:styles` | `stylelint "src/**/*.scss"`                                       | Runs Stylelint validation on SCSS stylesheets                |
| `npm run deploy`      | `surge dist cv.yanuarizal.net`                                    | Deploys the `dist/` folder to Surge                          |
| `npm run deploy:ftp`  | `node ./config/site.deploy.js`                                    | Deploys static build via FTP using credentials in `.env`     |
| `npm run setup`       | `node ./config/site.setup.js`                                     | Interactive CLI setup wizard for third-party libraries       |

---

## Customization Guide

### 1. Updating Resume Content

All resume information is isolated in [`src/javascripts/variables.js`](src/javascripts/variables.js):

- **Personal Info:** `mobile`, `email`, `github_username`, `website`, `address`, `google_place`, and `description`.
- **Technologies / Skills:** List of strings in the `techs` array.
- **Educations:** Array of education entries containing `institution`, `since` date range tuples (`[startDate, endDate]`), and `do` bullet points.
- **Experiences:** Array of job entries containing `company`, `as` (role), `since` date range tuples, and `do` responsibility bullets.
- **Certificates:** Array of credentials with `name`, `image` path, `link`, `issuer`, and `issued_date`.

Helper functions (such as date range formatting, WhatsApp links, Google Maps links, and email anchors) can be updated or extended in [`src/javascripts/methods.js`](src/javascripts/methods.js).

### 2. Site Configuration & Metadata

Site metadata used by HTML tags, Webpack plugins, and SEO generators can be edited in [`config/site.config.js`](config/site.config.js):

```javascript
const config = {
  site_name: 'Yanuarizal\'s CV',
  site_description: 'Software Engineer / Backend Specialist CV',
  site_url: 'https://cv.yanuarizal.net',
  googleAnalyticsUA: '', // Optional Google Analytics Tracking ID
  port: process.env.PORT || 8000,
  // ...
};
```

### 3. Certificates & Media Assets

- Place certificate images and thumbnail files inside [`src/assets/certs/`](src/assets/certs/).
- Update the base favicon by replacing [`src/assets/favicon.png`](src/assets/favicon.png) (recommended size: 512x512 px). Webpack will automatically generate all necessary platform icons during build time.

### 4. Styling & Theming

- **Tailwind CSS:** Edit [`tailwind.config.js`](tailwind.config.js) to configure responsive screen breakpoints, custom colors, fonts, or purge paths.
- **SCSS Styles:** Global styling overrides, reset configurations, and print rules are located in [`src/stylesheets/styles.scss`](src/stylesheets/styles.scss).
- **Template Layout:** Modify the main markup structure and Alpine.js directives in [`src/index.html`](src/index.html).

---

## Print & PDF Export

The layout is crafted specifically for clean physical printing and PDF export via modern browser print dialogs:

1. Open the running website in Google Chrome, Chromium, or Firefox.
2. Press `Ctrl + P` (or `Cmd + P` on macOS).
3. In the print dialog settings:
   - **Destination:** Save as PDF
   - **Layout:** Portrait
   - **Paper Size:** A4 or Letter
   - **Margins:** None or Default
   - **Options:** Enable **Background graphics** to preserve header and badge styles.
4. CSS print directives (`print:m-0`, `print:shadow-none`, `break-inside-avoid-page`, and `break-before-page`) ensure headers, job cards, and certificate sections do not split awkwardly across page breaks.

---

## Deployment

### Surge

Deploy directly using the bundled npm script:

```bash
npm run build:dist
npm run deploy
```

### FTP

Configure your FTP server credentials and deploy automatically:

```bash
npm run build:dist
npm run deploy:ftp
```

*(Set your FTP host, user, password, and remote path in environment variables or configuration).*

### Netlify / Static Hosts

This project includes a [`netlify.toml`](netlify.toml) file preconfigured for static deployment:

- **Build command:** `npm run build:dist`
- **Publish directory:** `dist`

You can also deploy the contents of the `dist/` folder to GitHub Pages, Cloudflare Pages, Vercel, or AWS S3.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
