# Josh's Portfolio Website

A modern, animated portfolio website built with Next.js 13, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- 🌗 Dark mode support
- 🎯 SEO optimized
- 📝 Contact form (placeholder)

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio/
├── app/               # Next.js App Router pages
├── components/        # React components
│   ├── animations/    # Animation components
│   └── sections/     # Page sections
├── public/           # Static assets
└── styles/          # Global styles
```

## Customization

1. Update personal information:
   - Edit contact details in `components/sections/ContactSection.js`
   - Modify projects in `components/sections/ProjectsSection.js`
   - Update experience in `components/sections/ExperienceSection.js`

2. Styling:
   - Modify `tailwind.config.js` for theme customization
   - Edit `app/globals.css` for global styles

3. Content:
   - Update sections in `app/page.js`
   - Modify navigation items in `components/Navbar.js`

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will detect Next.js and configure the build settings automatically
4. Your site will be deployed to a URL like `your-portfolio.vercel.app`

## Built With

- [Next.js 13](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License.
