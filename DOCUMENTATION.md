# Portfolio Website - Complete Documentation

## 🎨 Design System

### Color Palette

#### Dark Theme Colors
```css
--dark-bg: #0a0e1a        /* Main background */
--dark-surface: #0f1419   /* Surface level 1 */
--dark-elevated: #151b26  /* Surface level 2 */
--dark-border: #1f2937    /* Border color */
```

#### Primary Accent (Electric Blue/Cyan)
```css
--accent-500: #00baff  /* Main accent */
--accent-400: #26c6ff  /* Lighter */
--accent-600: #00a3e6  /* Darker */
```

#### Secondary Accent (Soft Purple)
```css
--secondary-500: #8b5cf6  /* Main secondary */
--secondary-400: #a78bfa  /* Lighter */
--secondary-600: #7c3aed  /* Darker */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Headings**: Bold, gradient text effects
- **Body**: Regular weight, gray tones

### Spacing Scale
- Small: 4px, 8px, 12px
- Medium: 16px, 24px, 32px
- Large: 48px, 64px, 80px

### Border Radius
- Small: 8px
- Medium: 12px, 16px
- Large: 24px, 32px
- Full: 9999px (rounded-full)

## 🧩 Component Library

### UI Components

#### Button Component
Location: `src/components/ui/Button.jsx`

**Variants:**
- `primary` - Gradient background with glow
- `secondary` - Glass effect with border
- `outline` - Border only

**Props:**
- `variant` - Button style variant
- `onClick` - Click handler
- `href` - Link URL (optional)
- `icon` - Icon component (optional)
- `className` - Additional classes

**Usage:**
```jsx
<Button variant="primary" href="#contact">
  Get In Touch
</Button>
```

#### GlowCard Component
Location: `src/components/ui/GlowCard.jsx`

**Features:**
- Glassmorphism effect
- Hover animation (lift up)
- Top glow line on hover

**Props:**
- `children` - Card content
- `className` - Additional classes
- `delay` - Animation delay

**Usage:**
```jsx
<GlowCard delay={0.1}>
  <h3>Card Title</h3>
  <p>Card content</p>
</GlowCard>
```

#### SectionHeading Component
Location: `src/components/ui/SectionHeading.jsx`

**Features:**
- Gradient text effect
- Subtitle support
- Alignment options

**Props:**
- `title` - Main heading text
- `subtitle` - Optional subtitle
- `align` - 'left' | 'center' (default: 'left')

**Usage:**
```jsx
<SectionHeading
  title="About Me"
  subtitle="Get to know me better"
  align="center"
/>
```

## 📐 Layout Sections

### 1. Hero Section
Location: `src/components/Hero.jsx`

**Features:**
- Animated gradient background blobs
- Rotating code symbol decoration
- Social media links
- Scroll indicator
- Responsive two-column layout

**Customization:**
- Update name and title
- Modify social links array
- Change introduction text

### 2. About Section
Location: `src/components/About.jsx`

**Features:**
- Two-column layout
- Highlight cards with icons
- Technology badges
- Scroll animations

**Customization:**
- Update highlights array
- Modify description text
- Add/remove technology tags

### 3. Skills Section
Location: `src/components/Skills.jsx`

**Features:**
- Three-column grid
- Animated progress bars
- Skill categories (Frontend, Backend, Tools)
- Additional skills badges

**Customization:**
```javascript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      // Add more skills
    ],
  },
  // Add more categories
];
```

### 4. Projects Section
Location: `src/components/Projects.jsx`

**Features:**
- Grid layout (3 columns on desktop)
- Hover effects on cards
- Project images
- Live demo and GitHub links
- Technology tags

**Customization:**
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    tags: ['React', 'Node.js'],
    image: 'image-url',
    liveLink: 'https://...',
    githubLink: 'https://...',
  },
  // Add more projects
];
```

### 5. Experience Section
Location: `src/components/Experience.jsx`

**Features:**
- Timeline layout with animated line
- Alternating card positions (desktop)
- Timeline dots with ping animation
- Education section

**Customization:**
```javascript
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    period: 'Jan 2023 - Present',
    description: [
      'Achievement 1',
      'Achievement 2',
    ],
    tags: ['React', 'Node.js'],
  },
  // Add more experiences
];
```

### 6. Contact Section
Location: `src/components/Contact.jsx`

**Features:**
- Two-column layout
- Contact information cards
- Contact form
- Social media links
- Form validation

**Customization:**
- Update contact info array
- Configure form submission
- Modify social links

### 7. Footer
Location: `src/components/Footer.jsx`

**Features:**
- Copyright information
- Quick navigation links
- Scroll-to-top button (fixed position)

## 🎬 Animation Patterns

### Common Animations

#### Fade In on Scroll
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

#### Hover Lift Effect
```jsx
<motion.div
  whileHover={{ y: -5 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

#### Scale on Tap
```jsx
<motion.button
  whileTap={{ scale: 0.95 }}
>
  Button
</motion.button>
```

#### Continuous Animation
```jsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {/* Content */}
</motion.div>
```

#### Stagger Children
```jsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 🎨 Custom Tailwind Classes

### Glassmorphism
```css
.glass {
  @apply bg-white/5 backdrop-blur-md border border-white/10;
}
```

### Glow Effects
```css
.glow-accent {
  box-shadow: 0 0 20px rgba(0, 186, 255, 0.3);
}

.glow-secondary {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}
```

### Noise Texture
```css
.noise-bg::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  z-index: -1;
  pointer-events: none;
  background-image: url("data:image/svg+xml,...");
}
```

## 📱 Responsive Breakpoints

```javascript
sm: '640px'   // Small devices (phones)
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices (laptops)
xl: '1280px'  // Extra large devices (desktops)
2xl: '1536px' // 2X large devices (large desktops)
```

### Mobile-First Approach
```jsx
<div className="
  grid 
  grid-cols-1      // Mobile: 1 column
  md:grid-cols-2   // Tablet: 2 columns
  lg:grid-cols-3   // Desktop: 3 columns
">
```

## ⚡ Performance Tips

### Image Optimization
1. Use WebP format for images
2. Compress images before uploading
3. Use appropriate image sizes
4. Consider lazy loading for images below the fold

### Animation Optimization
1. Use `transform` and `opacity` (GPU-accelerated)
2. Avoid animating `width`, `height`, `top`, `left`
3. Use `will-change` sparingly
4. Keep animations under 300ms for UI feedback

### Code Splitting
Vite automatically handles code splitting. For manual splitting:
```javascript
const Component = lazy(() => import('./Component'));
```

## 🔧 Configuration Files

### Tailwind Config
Location: `tailwind.config.js`

**Key Sections:**
- `colors` - Custom color palette
- `fontFamily` - Custom fonts
- `animation` - Custom animations
- `keyframes` - Animation keyframes
- `backgroundImage` - Custom backgrounds

### PostCSS Config
Location: `postcss.config.js`

**Plugins:**
- `tailwindcss` - Tailwind CSS processing
- `autoprefixer` - Browser prefix automation

### Vite Config
Location: `vite.config.js`

**Default setup includes:**
- React plugin
- Fast refresh
- Build optimizations

## 🚀 Deployment Guide

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### Deploy to Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🔐 Environment Variables

Create `.env` file for sensitive data:

```env
VITE_API_URL=https://api.example.com
VITE_FORM_ENDPOINT=https://formspree.io/your-form-id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📝 Content Update Checklist

- [ ] Update personal name and title in Hero
- [ ] Add actual social media links
- [ ] Update About section description
- [ ] Add real skills with accurate levels
- [ ] Replace project placeholders with actual projects
- [ ] Add real project images
- [ ] Update experience timeline
- [ ] Add actual education details
- [ ] Update contact information
- [ ] Configure contact form backend
- [ ] Replace placeholder email/phone
- [ ] Update footer copyright year
- [ ] Add your profile photo (optional)
- [ ] Test all links

## 🎯 SEO Optimization

### Add Meta Tags
Update `index.html`:
```html
<head>
  <title>Your Name - Full Stack Developer</title>
  <meta name="description" content="Portfolio of Your Name, Full Stack Developer specializing in React and Node.js">
  <meta property="og:title" content="Your Name - Full Stack Developer">
  <meta property="og:description" content="Check out my portfolio">
  <meta property="og:image" content="/og-image.jpg">
</head>
```

### Add Favicon
Place favicon files in `public/` folder:
- `favicon.ico`
- `favicon-32x32.png`
- `apple-touch-icon.png`

## 🐛 Troubleshooting

### Tailwind Styles Not Working
1. Check `tailwind.config.js` content paths
2. Ensure Tailwind directives in `index.css`
3. Restart dev server

### Animations Not Smooth
1. Check browser hardware acceleration
2. Reduce animation complexity
3. Use `transform` instead of position changes

### Build Errors
1. Check for unused imports
2. Verify all file paths
3. Run `npm install` again

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

For questions or issues, refer to the documentation or create an issue in the repository.
