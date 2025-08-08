# Excel Academy Design Tokens

*Last Updated: August 8, 2025*

This document defines the design tokens used across the Excel Academy website to maintain visual consistency and enable systematic theming.

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Shadows](#shadows)
5. [Border Radius](#border-radius)
6. [Transitions](#transitions)
7. [Z-Index](#z-index)
8. [Breakpoints](#breakpoints)
9. [Usage in CSS](#usage-in-css)
10. [Usage in JavaScript](#usage-in-javascript)

## Color Palette

### Primary Colors
- `--color-primary-50`: #f0f9ff
- `--color-primary-100`: #e0f2fe
- `--color-primary-200`: #bae6fd
- `--color-primary-300`: #7dd3fc
- `--color-primary-400`: #38bdf8
- `--color-primary-500`: #0ea5e9
- `--color-primary-600`: #0284c7
- `--color-primary-700`: #0369a1
- `--color-primary-800`: #075985
- `--color-primary-900`: #0c4a6e

### Secondary Colors
- `--color-secondary-50`: #f5f3ff
- `--color-secondary-100`: #ede9fe
- `--color-secondary-200`: #ddd6fe
- `--color-secondary-300`: #c4b5fd
- `--color-secondary-400`: #a78bfa
- `--color-secondary-500`: #8b5cf6
- `--color-secondary-600`: #7c3aed
- `--color-secondary-700`: #6d28d9
- `--color-secondary-800`: #5b21b6
- `--color-secondary-900`: #4c1d95

### Neutral Colors
- `--color-gray-50`: #f9fafb
- `--color-gray-100`: #f3f4f6
- `--color-gray-200`: #e5e7eb
- `--color-gray-300`: #d1d5db
- `--color-gray-400`: #9ca3af
- `--color-gray-500`: #6b7280
- `--color-gray-600`: #4b5563
- `--color-gray-700`: #374151
- `--color-gray-800`: #1f2937
- `--color-gray-900`: #111827

### Semantic Colors
- `--color-success`: #10b981
- `--color-warning`: #f59e0b
- `--color-error`: #ef4444
- `--color-info`: #3b82f6

## Typography

### Font Families
- `--font-sans`: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `--font-serif`: 'Georgia', 'Times New Roman', serif
- `--font-mono`: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace

### Font Sizes (rem)
- `--text-xs`: 0.75rem
- `--text-sm`: 0.875rem
- `--text-base`: 1rem
- `--text-lg`: 1.125rem
- `--text-xl`: 1.25rem
- `--text-2xl`: 1.5rem
- `--text-3xl`: 1.875rem
- `--text-4xl`: 2.25rem
- `--text-5xl`: 3rem
- `--text-6xl`: 3.75rem

### Font Weights
- `--font-thin`: 100
- `--font-extralight`: 200
- `--font-light`: 300
- `--font-normal`: 400
- `--font-medium`: 500
- `--font-semibold`: 600
- `--font-bold`: 700
- `--font-extrabold`: 800
- `--font-black`: 900

### Line Heights
- `--leading-none`: 1
- `--leading-tight`: 1.25
- `--leading-snug`: 1.375
- `--leading-normal`: 1.5
- `--leading-relaxed`: 1.625
- `--leading-loose`: 2

## Spacing

### Padding & Margin (rem)
- `--space-0`: 0
- `--space-px`: 1px
- `--space-0.5`: 0.125rem
- `--space-1`: 0.25rem
- `--space-1.5`: 0.375rem
- `--space-2`: 0.5rem
- `--space-2.5`: 0.625rem
- `--space-3`: 0.75rem
- `--space-3.5`: 0.875rem
- `--space-4`: 1rem
- `--space-5`: 1.25rem
- `--space-6`: 1.5rem
- `--space-7`: 1.75rem
- `--space-8`: 2rem
- `--space-9`: 2.25rem
- `--space-10`: 2.5rem
- `--space-11`: 2.75rem
- `--space-12`: 3rem
- `--space-14`: 3.5rem
- `--space-16`: 4rem
- `--space-20`: 5rem
- `--space-24`: 6rem
- `--space-28`: 7rem
- `--space-32`: 8rem
- `--space-36`: 9rem
- `--space-40`: 10rem
- `--space-44`: 11rem
- `--space-48`: 12rem
- `--space-52`: 13rem
- `--space-56`: 14rem
- `--space-60`: 15rem
- `--space-64`: 16rem
- `--space-72`: 18rem
- `--space-80`: 20rem
- `--space-96`: 24rem

## Shadows

### Box Shadows
- `--shadow-sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- `--shadow`: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
- `--shadow-md`: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- `--shadow-lg`: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- `--shadow-xl`: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
- `--shadow-2xl`: 0 25px 50px -12px rgb(0 0 0 / 0.25)
- `--shadow-inner`: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)
- `--shadow-none`: 0 0 #0000

### Text Shadows
- `--text-shadow-sm`: 0 1px 2px rgb(0 0 0 / 0.05)
- `--text-shadow`: 0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px rgb(0 0 0 / 0.06)
- `--text-shadow-md`: 0 4px 6px rgb(0 0 0 / 0.1), 0 2px 4px rgb(0 0 0 / 0.06)
- `--text-shadow-lg`: 0 10px 15px rgb(0 0 0 / 0.1), 0 4px 6px rgb(0 0 0 / 0.05)
- `--text-shadow-xl`: 0 20px 25px rgb(0 0 0 / 0.1), 0 10px 10px rgb(0 0 0 / 0.04)
- `--text-shadow-none`: none

## Border Radius

### Radius Values (rem)
- `--rounded-none`: 0px
- `--rounded-sm`: 0.125rem
- `--rounded`: 0.25rem
- `--rounded-md`: 0.375rem
- `--rounded-lg`: 0.5rem
- `--rounded-xl`: 0.75rem
- `--rounded-2xl`: 1rem
- `--rounded-3xl`: 1.5rem
- `--rounded-full`: 9999px

### Individual Corner Radius
- `--rounded-t-*`: Top corners
- `--rounded-r-*`: Right corners
- `--rounded-b-*`: Bottom corners
- `--rounded-l-*`: Left corners
- `--rounded-tl-*`: Top-left corner
- `--rounded-tr-*`: Top-right corner
- `--rounded-br-*`: Bottom-right corner
- `--rounded-bl-*`: Bottom-left corner

## Transitions

### Duration
- `--duration-75`: 75ms
- `--duration-100`: 100ms
- `--duration-150`: 150ms
- `--duration-200`: 200ms
- `--duration-300`: 300ms
- `--duration-500`: 500ms
- `--duration-700`: 700ms
- `--duration-1000`: 1000ms

### Timing Functions
- `--ease-linear`: linear
- `--ease-in`: cubic-bezier(0.4, 0, 1, 1)
- `--ease-out`: cubic-bezier(0, 0, 0.2, 1)
- `--ease-in-out`: cubic-bezier(0.4, 0, 0.2, 1)

## Z-Index

### Z-Index Scale
- `--z-0`: 0
- `--z-10`: 10
- `--z-20`: 20
- `--z-30`: 30
- `--z-40`: 40
- `--z-50`: 50
- `--z-auto`: auto

### Component Z-Indices
- `--z-dropdown`: 1000
- `--z-sticky`: 1020
- `--z-fixed`: 1030
- `--z-modal-backdrop`: 1040
- `--z-offcanvas`: 1050
- `--z-modal`: 1060
- `--z-popover`: 1070
- `--z-tooltip`: 1080
- `--z-toast`: 1090

## Breakpoints

### Screen Sizes (min-width)
- `--screen-sm`: 640px
- `--screen-md`: 768px
- `--screen-lg`: 1024px
- `--screen-xl`: 1280px
- `--screen-2xl`: 1536px

### Container Max Widths
- `--container-sm`: 640px
- `--container-md`: 768px
- `--container-lg`: 1024px
- `--container-xl`: 1280px
- `--container-2xl`: 1536px

## Usage in CSS

### CSS Variables
```css
:root {
  /* Colors */
  --color-primary: var(--color-primary-500);
  --color-primary-hover: var(--color-primary-600);
  --color-primary-active: var(--color-primary-700);
  
  /* Typography */
  --font-body: var(--font-sans);
  --font-heading: var(--font-sans);
  --text-base: var(--text-base);
  
  /* Spacing */
  --spacing-1: var(--space-4);
  --spacing-2: var(--space-8);
  
  /* Borders */
  --border-radius: var(--rounded-md);
  --border-width: 1px;
  --border-color: var(--color-gray-200);
  
  /* Shadows */
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  
  /* Transitions */
  --transition-fast: var(--duration-150) var(--ease-in-out);
  --transition-normal: var(--duration-300) var(--ease-in-out);
  --transition-slow: var(--duration-500) var(--ease-in-out);
}
```

### Example Component
```css
.button {
  font-family: var(--font-sans);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  line-height: var(--leading-5);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--rounded-md);
  border: 1px solid transparent;
  background-color: var(--color-primary-500);
  color: white;
  transition: var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.button:hover {
  background-color: var(--color-primary-600);
  box-shadow: var(--shadow);
}

.button:focus {
  outline: 2px solid var(--color-primary-200);
  outline-offset: 2px;
}

.button:active {
  background-color: var(--color-primary-700);
  transform: translateY(1px);
}
```

## Usage in JavaScript

### Accessing Tokens
```javascript
// Get a CSS variable value
function getCssVar(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${name}`)
    .trim();
}

// Example usage
const primaryColor = getCssVar('color-primary-500');
const spacingUnit = getCssVar('space-4');
```

### Updating Tokens
```javascript
// Set a CSS variable value
function setCssVar(name, value) {
  document.documentElement.style.setProperty(`--${name}`, value);
}

// Example usage
setCssVar('color-primary-500', '#3b82f6');
setCssVar('font-sans', 'Inter, sans-serif');
```

### Theme Switching
```javascript
// Toggle between light and dark themes
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.classList.toggle('dark', savedTheme === 'dark');
```

## Best Practices

1. **Use Semantic Naming**
   - Name tokens based on their purpose, not their visual appearance
   - Example: `--color-text-primary` instead of `--color-gray-900`

2. **Follow the 8-Point Grid**
   - Use multiples of 4px for spacing and sizing
   - Example: 4px, 8px, 12px, 16px, 24px, 32px, etc.

3. **Leverage CSS Custom Properties**
   - Use CSS variables for dynamic theming
   - Override at different breakpoints or contexts

4. **Document Token Usage**
   - Comment where and why tokens are used
   - Keep this document up to date

5. **Test Accessibility**
   - Ensure sufficient color contrast
   - Test with different font sizes and zoom levels
   - Verify keyboard navigation

## Versioning

This design tokens system follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for breaking changes
- **MINOR** version for new features
- **PATCH** version for bug fixes

## Contributing

When adding or modifying design tokens:
1. Update this document
2. Update any related components
3. Test across browsers and devices
4. Document the changes in the CHANGELOG.md

---
*This document was last updated on August 8, 2025.*
