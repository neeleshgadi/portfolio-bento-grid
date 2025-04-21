# Personal Portfolio - Bento Grid Layout

A colorful, responsive personal portfolio website built with React and Tailwind CSS, featuring a modern bento grid layout.

## Features

- Interactive bento grid layout with uniquely styled section tiles
- Smooth animations and hover effects using Framer Motion
- Responsive design that adapts across devices
- Dark/light mode toggle
- Downloadable resume functionality
- Back-to-top navigation

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Deployment Instructions for GitHub Pages

1. First, make sure the `gh-pages` package is installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update the repository name in `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/',
   ```

3. Update the `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

5. Configure GitHub Pages in your repository settings to use the `gh-pages` branch.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Main layout components
│   ├── tiles/        # Individual tile components
│   └── ui/           # Reusable UI components
├── context/          # Context providers
├── data/             # Mock data for the portfolio
├── hooks/            # Custom React hooks
└── App.tsx           # Main application component
```

## Customization

1. Replace the mock data in `src/data/portfolioData.ts` with your personal information
2. Customize the color scheme in `tailwind.config.js`
3. Replace the sample resume PDF in the public folder with your actual resume
4. Update profile images and project screenshots

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```