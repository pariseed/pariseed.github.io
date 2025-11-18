
# Blueprint: Landing Page for Local AI Solutions

## Overview

This document outlines the plan for creating a landing page for a service that offers local AI solutions to Italian companies. The goal is to create a modern, professional, and persuasive landing page that effectively communicates the value proposition of the service.

## Project Outline

### Design and Style

*   **Aesthetics:** Modern, professional, and trustworthy.
*   **Layout:** Clean, spacious, and responsive.
*   **Colors:** A dark theme with shades of grey and black, accented with a warm orange for a modern and professional feel.
    *   `--primary-color: #e67e22` (Warm Orange)
    *   `--secondary-color: #d35400` (Darker Orange)
    *   `--background-color: #2c3e50` (Dark Slate Blue/Grey)
    *   `--text-color: #ecf0f1` (Light Grey/Off-white)
    *   `--card-background: #34495e` (Lighter Slate)
*   **Typography:** Clear and legible, with strong headlines using the 'Inter' font.
*   **Iconography:** Material Symbols icons to represent services and benefits.
*   **Imagery:** High-quality images related to AI and business.

### Features

*   **Hero Section:** A compelling headline and a clear call-to-action, with a background image related to AI and a semi-transparent overlay to ensure text legibility.
*   **Services Section:** Detailed information about the local AI solutions offered (AI Automation, Custom Models, RAG).
*   **Benefits Section:** Highlighting the advantages of local AI (privacy, performance, cost, independence, customization, competitive advantage).
*   **Use Cases Section:** Examples of how local AI can be applied (data analysis, process automation, predictive monitoring).
*   **Why Us Section:** Explaining the company's experience in data analysis, automation, and monitoring.
*   **Contact Form:** A simple and secure contact form powered by Formspree with asynchronous submission. Upon successful submission, a thank-you message is displayed without redirecting the user.
*   **Footer:** With copyright information.

## Current Plan

1.  **Create the HTML structure:** Define the main sections of the landing page in `index.html`.
2.  **Style the page:** Apply a modern and professional design using `style.css`.
3.  **Add content:** Write persuasive copy in Italian.
4.  **Add imagery:** Find and add relevant images.
5.  **Refine Color Scheme:** Updated the color palette to a dark theme with shades of grey and a warm orange accent.
6.  **Update Hero Section:** Changed the hero section to use an AI image as a background with a dark overlay for text contrast.
7.  **Integrate Formspree:** Replaced the default form submission with an asynchronous request to the Formspree endpoint.
8.  **Add AJAX Submission:** Created `main.js` to handle the form submission via AJAX, preventing page redirection and displaying a dynamic success/error message to the user.
