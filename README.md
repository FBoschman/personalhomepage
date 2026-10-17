# Fboschman Personal

Personal portfolio and project showcase built with React, TypeScript, and Vite.

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Henry VIII Atlas

A standalone Next.js + Tailwind CSS interactive map and timeline of Henry
VIII's reign lives in [`henry-viii/`](henry-viii/README.md). It has its own
`package.json`, build pipeline and map data, and does not affect the Vite
portfolio in this directory.

```bash
cd henry-viii
npm install
npm run dev
```

## Project Structure

```
src/
├── component/     # Reusable React components
├── data/         # Data files and hooks
├── types/        # TypeScript type definitions
├── assets/       # Images and static assets
├── App.tsx       # Main application component
├── main.tsx      # Entry point
└── index.css     # Global styles
```

## Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Dark Theme**: Modern dark gradient background
- **Portfolio Showcase**: Display recent work and projects
- **Contact Section**: Easy ways to get in touch
- **Navigation**: Smooth scrolling to different sections

## Development Notes

- Uses Tailwind CSS v4 with Vite integration for optimal performance
- ESLint configured for React and TypeScript best practices
- Hot Module Replacement (HMR) enabled for fast development experience

## Future Enhancements

- Add project detail pages
- Implement blog section
- Add dark/light mode toggle
- Integrate with CMS for content management
