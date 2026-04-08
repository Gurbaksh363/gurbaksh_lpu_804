# Modern Portfolio Website

A sleek, modern, and creative portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

### Color Palette
- **Background**: Deep charcoal/navy (`#0a0e1a`, `#0f1419`, `#151b26`)
- **Primary Accent**: Electric Blue/Cyan (`#00baff`)
- **Secondary Accent**: Soft Purple (`#8b5cf6`)

### Design Elements
- Dark theme with deep charcoal and navy tones
- Glassmorphism effects with subtle blur and transparency
- Animated gradient backgrounds
- Smooth, lightweight transitions with Framer Motion
- Noise texture overlay for depth
- Custom scrollbar styling
- Hover effects with depth and glow

## 🚀 Tech Stack

- **React** 19.2.0 - UI framework
- **Vite** 8.0.0 - Build tool
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

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

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx          # Reusable button component
│   │   │   ├── GlowCard.jsx        # Card with glow effect
│   │   │   └── SectionHeading.jsx  # Section heading component
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Hero.jsx                # Hero section
│   │   ├── About.jsx               # About section
│   │   ├── Skills.jsx              # Skills section
│   │   ├── Projects.jsx            # Projects section
│   │   ├── Experience.jsx          # Experience timeline
│   │   ├── Contact.jsx             # Contact form
│   │   └── Footer.jsx              # Footer
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   ├── index.css                   # Global styles
│   └── App.css                     # Component styles
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── package.json                    # Dependencies
```

## 🎯 Sections

1. **Hero** - Creative introduction with animated backgrounds
2. **About** - Personal information with highlight cards
3. **Skills** - Tech stack with progress bars and badges
4. **Projects** - Project showcase with hover effects
5. **Experience** - Professional timeline with detailed descriptions
6. **Contact** - Contact form with social links
7. **Footer** - Footer with navigation and scroll-to-top

## 🎨 Customization

### Update Personal Information

Edit the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`)
2. **About Section** (`src/components/About.jsx`)
3. **Skills Section** (`src/components/Skills.jsx`)
4. **Projects Section** (`src/components/Projects.jsx`)
5. **Experience Section** (`src/components/Experience.jsx`)
6. **Contact Section** (`src/components/Contact.jsx`)

## 🌐 Deployment

Deploy to Vercel, Netlify, or GitHub Pages:

```bash
npm run build
# Deploy the dist folder
```

## 📱 Responsive Design

Fully responsive with breakpoints for mobile, tablet, and desktop.

## ⚡ Performance Optimizations

- Optimized animations with Framer Motion
- Minimal re-renders
- Code splitting with Vite
- Semantic HTML for accessibility

---

Built with ❤️ using React & Tailwind CSS

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
