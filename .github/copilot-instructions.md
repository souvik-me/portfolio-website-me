# AI Coding Agent Instructions for Portfolio Website

## Project Overview
This is a **React + Vite** portfolio website for a Business Analyst, showcasing case studies, blog posts, and professional services. The site uses **React Router** for single-page navigation with dynamically rendered content from JavaScript data files.

### Tech Stack
- **Frontend**: React 18.2.0, React Router 7.9.6, Vite 7.2.4
- **Styling**: CSS (component-scoped), react-icons for iconography
- **Build**: Vite with React plugin, ESLint flat config
- **Node**: >= 18.0.0

## Architecture & Data Flow

### URL-Based Navigation
The app uses React Router with three main route types (see `src/App.jsx`):
- **`/`**: Homepage with stacked sections (Hero → About → Skills → Projects → Blog → Contact)
- **`/case-study/:projectId`**: Dynamic case study detail pages
- **`/blog/:postId`**: Dynamic blog post detail pages
- **`/resume`**: Static resume page

**Pattern**: Components look up their data by ID from centralized data files (e.g., `caseStudyData['lirs']` for project IDs).

### Component Structure
- `src/components/`: All React components + their scoped CSS files
- `src/data/`: JavaScript objects exporting arrays/objects of content
  - `blogData.js`: Array of blog post objects with `id`, `title`, `excerpt`, `content` (HTML string), `date`, `readTime`, etc.
  - `caseStudyData.js`: Object keyed by project ID, each containing `id`, `heroTitle`, `metrics`, `challenges`, `solutions`, `comparisonData`, etc.

**Data Structure Convention**: Content is stored as JS objects (not fetched), embedded directly in components via dynamic routing.

### Homepage Section Anchors
Navbar uses DOM `id` attributes for anchor navigation:
- `id="home"`, `id="about"`, `id="skills"`, `id="projects"`, `id="blog"`, `id="contact"`
- Navbar active state is determined by scroll position (see `Navbar.jsx` scroll listener)

## Key Development Patterns

### 1. Component + CSS Co-location
Each component has a paired CSS file in the same directory:
```
components/
  Projects.jsx
  Projects.css
  Blog.jsx
  Blog.css
```
Use BEM-like naming in CSS (e.g., `.blog-grid`, `.blog-card`, `.blog-meta`).

### 2. React Router Navigation
Components use `useNavigate()` to trigger route changes:
```jsx
const navigate = useNavigate()
navigate(`/blog/${post.id}`)
navigate(`/case-study/${projectId}`)
```

### 3. Dynamic Content Rendering
When adding new blog posts or case studies:
1. Add object to `blogData.js` or `caseStudyData.js` with required fields
2. Component automatically renders via `.map()` or lookup by ID
3. Content embeds use string interpolation; HTML content is inserted via `dangerouslySetInnerHTML` (see `BlogPost.jsx`)

### 4. Responsive Design with Icons
- Icons imported from `react-icons/fa` (Font Awesome)
- Example: `import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'`
- Use them inline in components and CSS pseudo-elements (via CSS `content` property)

## Build & Development Workflow

### Commands
```bash
npm run dev        # Start Vite dev server (HMR enabled)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

### Development Notes
- Vite's Fast Refresh (HMR) automatically reloads components on save
- ESLint enforces react-hooks and react-refresh rules
- No TypeScript by default; plain JavaScript is acceptable per `eslint.config.js`

## Critical Files & Their Roles

| File | Purpose |
|------|---------|
| `src/App.jsx` | Route definitions and page layout |
| `src/main.jsx` | React root setup with BrowserRouter wrapper |
| `src/components/Navbar.jsx` | Scroll detection + active section tracking |
| `src/components/BlogPost.jsx` | Renders individual blog post by ID |
| `src/components/CaseStudy.jsx` | Renders individual case study by ID |
| `src/data/blogData.js` | Blog post content array |
| `src/data/caseStudyData.js` | Case study content objects (keyed by ID) |

## Common Tasks & Implementation Notes

### Adding a New Blog Post
1. Add object to `blogData.js` array with fields: `id`, `title`, `category`, `excerpt`, `date`, `readTime`, `image`, `content` (HTML string)
2. Increment `id` sequentially; ensure unique
3. Content field supports HTML tags (wrapped in backticks for multiline)
4. Image path uses `/src/assets/images/` convention

### Adding a New Case Study
1. Add object to `caseStudyData.js` keyed by project ID (e.g., `lirs: {...}`)
2. Required fields: `id`, `heroTitle`, `heroHighlight`, `heroSubtitle`, `tags`, `metrics`, `clientBackground`, `projectBackground`, `challenges`, `solutions`, `comparisonData`, `conclusion`
3. Icons referenced from `react-icons/fa` (imported at top of file)
4. Metrics and solution items use FaIcon components

### Modifying Homepage Sections
- Edit respective component file and its paired CSS
- Maintain `id` attributes for navbar anchor links
- Use `.section-badge`, `.section-title`, `.section-subtitle` classes for consistency

## Code Conventions

- **File naming**: PascalCase for components (`Projects.jsx`), camelCase for utilities
- **Imports**: React first, then react-router, then react-icons, then CSS
- **State management**: Use `useState` for local UI state (no Redux/Context currently)
- **Unused vars**: ESLint ignores vars starting with capital letters (for unused imports); fix with `// eslint-disable-next-line`
- **CSS structure**: `.section` container > `.section-container` > content blocks

## Performance Considerations
- No lazy loading implemented; all components load on app startup
- Consider adding `React.lazy()` + `Suspense` for large case studies if performance degrades
- Images are not optimized; ensure assets are compressed before committing
- No caching strategy on data files; consider static site generation if scale increases

## ESLint & Code Quality
- Config: `eslint.config.js` (flat config format)
- Enforces: React Hooks rules, React Refresh rules, no unused variables
- Run: ESLint is integrated with Vite; check via `npm run build`
- Fix: Most issues auto-fixable with IDE quick-fixes

## Contact & Support Integration
- `Contact.jsx` component likely sends emails via backend endpoint (implementation details TBD)
- Ensure form validation before submission
- No API key visible in frontend code (handle in backend)
