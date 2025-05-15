# My Project

This project is a modern web application built using Next.js, React, and Tailwind CSS. It serves as a comprehensive website showcasing various aspects of a business, including an About Us section, Services offered, a Hero section for initial engagement, and a Contact form.

## Application Functionality

The application provides a user-friendly interface for visitors to learn about the business, its services, and how to get in touch. Key functionalities include:

- **Hero Section:** An engaging initial view to capture user attention.
- **About Section:** Details about the business and its values.
- **Services Section:** A clear presentation of the services offered.
- **Contact Section:** A form and contact information for inquiries.
- **Responsive Design:** Ensures optimal viewing experience across various devices.

## Codebase Structure

The project follows a standard Next.js application structure:

- `src/app/`: Contains the main application routes and layout.
- `src/components/`: Houses reusable React components, categorized into `layout`, `sections`, and `ui`.
- `src/lib/`: Contains utility functions and helper code.
- `public/`: Stores static assets like images and videos.
- `docs/`: Documentation files.
- `src/hooks/`: Custom React hooks.

## Key Files

- `src/app/page.tsx`: The main page component that renders the different sections of the website.
- `src/app/layout.tsx`: Defines the root layout of the application, including the HTML structure and shared components like the header and footer.
- `src/app/globals.css`: Contains global CSS styles for the application, often utilizing Tailwind CSS directives.

## Components

- `src/components/sections/`: This directory contains the major sections of the website, such as `about-section.tsx`, `contact-section.tsx`, `hero-section.tsx`, and `services-section.tsx`. Each file represents a distinct part of the page content.
- `src/components/ui/`: This directory contains a collection of smaller, reusable UI components built with Tailwind CSS and often utilizing shadcn/ui. Examples include buttons, cards, forms, inputs, etc. These components are the building blocks of the larger sections.
- `src/components/layout/`: Contains layout components like `header.tsx` and `footer.tsx` that are used across multiple pages or within the main layout.

## Utility Functions

- `src/lib/utils.ts`: Contains general utility functions used throughout the application.
- `src/lib/actions.ts`: Likely contains server-side actions or functions related to form submissions or data handling.

## Technologies Used

- **Next.js:** A React framework for server-side rendering, static site generation, and routing.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **TypeScript:** A typed superset of JavaScript that enhances code maintainability and reduces errors.

## Setup and Running Locally

1. **Clone the repository:**

