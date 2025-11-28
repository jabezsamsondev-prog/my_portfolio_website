# Modern Portfolio Website# React + TypeScript + Vite



A sleek, modern portfolio website built with React + Vite and Tailwind CSS v4.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## ✨ FeaturesCurrently, two official plugins are available:



- 🚀 **Blazing Fast**: Built with Vite for lightning-fast development and builds- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- 🎨 **Modern Design**: Clean, minimal design with a professional accent color scheme- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- 📱 **Fully Responsive**: Works perfectly on all devices

- ✨ **Smooth Animations**: Framer Motion animations for a lively, interactive experience## React Compiler

- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility

- 🌈 **Moving Gradients**: Eye-catching gradient backgrounds with animationsThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- 💼 **Complete Portfolio Sections**:

  - Hero section with photo placeholder## Expanding the ESLint configuration

  - Work Experience timeline

  - Latest Work/Projects with GitHub links and tech tagsIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

  - Contact section with form

  - Floating CTA for easy user engagement```js

export default defineConfig([

## 🛠️ Tech Stack  globalIgnores(['dist']),

  {

- **React 19** - UI library    files: ['**/*.{ts,tsx}'],

- **TypeScript** - Type safety    extends: [

- **Vite 7** - Build tool & dev server      // Other configs...

- **Tailwind CSS v4** - Utility-first styling

- **Framer Motion** - Animations      // Remove tseslint.configs.recommended and replace with this

- **Lucide React** - Beautiful icons      tseslint.configs.recommendedTypeChecked,

- **class-variance-authority** - Component variants      // Alternatively, use this for stricter rules

      tseslint.configs.strictTypeChecked,

## 🚀 Getting Started      // Optionally, add this for stylistic rules

      tseslint.configs.stylisticTypeChecked,

### Prerequisites

      // Other configs...

- Node.js (v18 or higher)    ],

- npm or yarn    languageOptions: {

      parserOptions: {

### Installation        project: ['./tsconfig.node.json', './tsconfig.app.json'],

        tsconfigRootDir: import.meta.dirname,

1. Clone the repository      },

2. Install dependencies:      // other options...

\`\`\`bash    },

npm install  },

\`\`\`])

```

### Development

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

Run the development server:

\`\`\`bash```js

npm run dev// eslint.config.js

\`\`\`import reactX from 'eslint-plugin-react-x'

import reactDom from 'eslint-plugin-react-dom'

The site will be available at `http://localhost:5173` (or the next available port).

export default defineConfig([

### Build  globalIgnores(['dist']),

  {

Create a production build:    files: ['**/*.{ts,tsx}'],

\`\`\`bash    extends: [

npm run build      // Other configs...

\`\`\`      // Enable lint rules for React

      reactX.configs['recommended-typescript'],

### Preview Production Build      // Enable lint rules for React DOM

      reactDom.configs.recommended,

Preview the production build locally:    ],

\`\`\`bash    languageOptions: {

npm run preview      parserOptions: {

\`\`\`        project: ['./tsconfig.node.json', './tsconfig.app.json'],

        tsconfigRootDir: import.meta.dirname,

## 🎨 Customization      },

      // other options...

### Colors    },

  },

The color scheme is defined in `src/index.css` using Tailwind v4's `@theme` directive. You can easily modify:])

```

- `--color-primary`: Main accent color (default: Indigo #6366f1)
- `--color-accent`: Secondary accent color (default: Cyan #06b6d4)
- `--color-background`: Background color (default: #0a0a0a)
- Other semantic colors for consistency

### Content

Update the content in the following files:

**Hero Section** (`src/components/sections/Hero.tsx`)
- Update name, title and description
- Replace profile image

**Experience** (`src/components/sections/Experience.tsx`)
- Edit the `experiences` array with your work history

**Projects** (`src/components/sections/Work.tsx`)
- Edit the `projects` array with your portfolio projects
- Update GitHub links and demo URLs
- Change project images from Unsplash

**Contact** (`src/components/sections/Contact.tsx`)
- Update contact information (email, phone, location)
- Customize form fields if needed

### Adding Your Photo

Replace the placeholder image URL in `src/components/sections/Hero.tsx`:

\`\`\`tsx
<img 
  src="YOUR_IMAGE_URL_HERE" 
  alt="Profile" 
  className="..."
/>
\`\`\`

For best results, use a PNG with transparent background (no background).

## 🎯 Design System

The project uses a consistent design system with:

- **Spacing**: Consistent padding (py-16/py-24) and margins across sections
- **Border Radius**: Uniform rounded corners (rounded-xl = 0.75rem)
- **Shadows**: Subtle elevation with hover effects
- **Transitions**: 300ms smooth transitions
- **Typography**: Inter font family for modern, clean text
- **Colors**: Semantic color system using CSS variables

## 📝 SEO

The website includes proper SEO meta tags in `index.html`. Update these with your information:

- Title
- Description
- Keywords
- Author name

## 📁 Project Structure

\`\`\`
my_portfolio/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── sections/   # Page sections (Hero, Experience, Work, Contact)
│   │   └── ui/         # Reusable UI components (Button, Card, Badge, etc.)
│   ├── lib/            # Utilities (cn function for class merging)
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles & Tailwind config
├── index.html          # HTML template with SEO meta tags
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.ts      # Vite configuration
\`\`\`

## 🌐 Deployment

This site can be deployed to:

- **Vercel**: \`vercel\`
- **Netlify**: \`netlify deploy\`
- **GitHub Pages**: Configure GitHub Actions
- **Firebase Hosting**: Use Firebase CLI
- **Any static host**: Upload the \`dist\` folder after running \`npm run build\`

## 📄 License

MIT

---

Built with ❤️ using React + Vite + Tailwind CSS v4
