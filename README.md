# SPADE-AI Website

A website for the SPADE-AI research project

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Deployment**: Vercel, Neon


## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Impact.tsx
│   └── Team.tsx
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   cd /Spade-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

5. **Export static site**
   ```bash
   npm run export
   ```
   Output will be in `out/` directory

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Deployment

### Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

```bash
npm install -g vercel
vercel
```

## Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export as static site
npm run export

# Run linter
npm run lint
```

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling issues
```bash
npm run build
# Clear browser cache
```

## Links

- Project Website: [SPADE-AI](/)

---
