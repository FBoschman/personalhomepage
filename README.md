# SUBSTRATE

Personal research page of Ferry Boschman — decolonial learning, epistemic justice and
sustainability transitions. *Knowledge is a commons, not a commodity.*

## Brand

An activist-minimalist identity: newsprint paper, ink black and a single signal red.
No gradients, no rounded cards, no decoration that does not carry meaning.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#f2efe8` | Page background |
| `paper-dim` | `#e6e2d8` | Reserved, panels |
| `ink` | `#131210` | Text, inverted sections, rules |
| `ink-soft` / `ink-faint` | `#4b463d` / `#8a8478` | Body copy, meta |
| `signal` | `#e0341a` | Accent only: section markers, hover states |

Type: **Archivo** (300–900) for display and body, **IBM Plex Mono** for labels and meta,
uppercase with wide tracking. Rules are hairlines (`border-ink/15`), never boxes.

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (tokens in `src/index.css` via `@theme`)
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
- **Index, not grid**: the work section is a numbered index; every row inverts to ink on
  hover and routes to its page
- **Activist voice**: manifesto ticker, commitments grid, and a "work slowly" contact block
- **Accessible**: semantic landmarks, `aria-hidden` decorative marks, visible focus rings,
  and `prefers-reduced-motion` support (the ticker stops)

## Development Notes

- Uses Tailwind CSS v4 with Vite integration for optimal performance
- ESLint configured for React and TypeScript best practices
- Hot Module Replacement (HMR) enabled for fast development experience

## Future Enhancements

- Add project detail pages
- Implement blog section
- Add dark/light mode toggle
- Integrate with CMS for content management
