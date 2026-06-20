# EcoTrack AI – Carbon Footprint Awareness Platform

![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.1-brightgreen?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.4-skyblue?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Production-black?logo=vercel&logoColor=white)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

EcoTrack AI is a production-ready React + Vite platform for tracking carbon emissions, exploring sustainability goals, and turning insights into action.

## Features

- AI-inspired carbon footprint calculator for travel, energy, food, and flights
- Interactive sustainability dashboard with charts, progress, and recommendations
- Personalized eco recommendations based on user emissions
- Premium glassmorphism interface with responsive mobile-first layouts
- Local browser persistence for saved calculator values
- SEO and social share support with Open Graph and Twitter Card metadata

## Technology Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM
- Recharts for data visualization

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/ecotrack-ai.git
   cd ecotrack-ai
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start development server
   ```bash
   npm run dev
   ```

## Usage

- Visit `/` to see the home overview and launch the calculator
- Use `/calculator` to enter your activity profile and calculate emissions
- Open `/dashboard` for charts and performance indicators
- Visit `/recommendations` for tailored sustainability steps
- Explore `/achievements` to track your eco badge progress

## Screenshots

- Home dashboard with eco-branded analytics
- Calculator experience with responsive controls
- Recommendations and achievement panels

## Deployment

Deploy on Vercel using the default build command:

```bash
npm run build
```

In Vercel, set the root directory to the project root and use `npm run build`.

## Testing

Run the full test suite with:

```bash
npm test
```

Run coverage reporting with:

```bash
npm run coverage
```

This project uses Vitest with React Testing Library and jest-dom for UI and logic validation. Coverage reports are generated in the `coverage/` directory after running the coverage command.

## Live Demo

Live demo: [https://ecotrack.ai](https://ecotrack.ai)

## Repository

GitHub: [https://github.com/your-username/ecotrack-ai](https://github.com/your-username/ecotrack-ai)
