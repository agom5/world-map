# Interactive World GDP Map 🌍

An interactive React application that visualizes global GDP and population data using an SVG world map.  
Built to demonstrate modern frontend practices, performance-aware SVG interactions, and clean styling architecture.

## Why This Project

I built this project to practice:

- Data visualization using real-world APIs
- SVG interactivity and event delegation
- Scalable styling with Tailwind + CSS Modules
- Performance-conscious UI patterns in React

## Tech Stack

- **Core:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS (Layouts) + CSS Modules (SVG Control)
- **Data:** World Bank API
- **Performance:** Event Delegation, Skeleton Loading States

## Key Features

- **Interactive SVG Map**  
  Clickable countries with performant path selection using direct DOM manipulation.

- **Live Data Integration**  
  Fetches GDP and population data from the World Bank API.

- **Hybrid Styling Architecture**  
  Utility-first layouts with Tailwind + scoped SVG styling via CSS Modules.

- **Responsive UI**  
  Fully adaptive layout for mobile and desktop.

## What I Learned

- Optimizing SVG interactions without unnecessary re-renders
- Structuring a hybrid CSS approach for large UI components
- Managing async API data with loading states
- Building scalable React components in TypeScript

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/agom5/world-map.git
cd world-map
npm install
npm run dev

```
