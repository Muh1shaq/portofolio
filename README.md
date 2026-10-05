# Portfolio Website

A modern, interactive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark Mode Aesthetic**: Sleek dark theme with glowing/neon accents and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for 60fps smooth animations
- **Interactive Components**: Hover effects, parallax scrolling, and micro-interactions
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Project Showcase**: Interactive project cards with filtering and detailed modals
- **Tech Stack Display**: Organized grid showing technologies by category
- **Contact Form**: Interactive contact form with validation and feedback
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd porto
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
porto/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── projects/          # Project screenshots
│   │   │   └── profile.jpg        # Profile photo
│   │   └── icons/                 # Custom icons/SVGs
│   └── resume.pdf                 # Your CV/Resume
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css            # Global styles and utilities
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Main page
│   ├── components/
│   │   ├── ui/                    # Base UI components
│   │   ├── animations/            # Reusable animation wrappers
│   │   ├── sections/              # Page sections
│   │   └── layout/                # Layout components
│   ├── data/
│   │   └── portfolioData.ts       # Central data file
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   └── types/                     # TypeScript types
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolioData.ts` to customize:
- Personal information
- Contact details
- Social media links
- Tech stack
- Projects
- Experience
- Education
- Milestones

### Add Project Screenshots

1. Place screenshots in `public/assets/images/projects/`
2. Name them according to project IDs (e.g., `smartify.png`, `rsis.png`)
3. Update the `image` field in portfolioData.ts

### Customize Styling

Edit `tailwind.config.ts` to:
- Change color schemes
- Add custom animations
- Modify breakpoints
- Extend theme

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder to your preferred hosting platform.

## Performance Tips

- Optimize images before adding to the project
- Use lazy loading for heavy components
- Minimize bundle size by tree-shaking
- Enable caching strategies

## License

This project is licensed under the MIT License.

## Credits

- Inspired by design patterns from modern portfolio websites
- Built with modern web technologies and best practices
