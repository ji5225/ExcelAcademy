# Excel Academy Style Guide

This style guide outlines the coding standards and best practices for the Excel Academy website. Following these guidelines ensures consistency, maintainability, and quality across the codebase.

## Table of Contents
- [General Principles](#general-principles)
- [HTML Guidelines](#html-guidelines)
- [CSS Guidelines](#css-guidelines)
- [JavaScript Guidelines](#javascript-guidelines)
- [Naming Conventions](#naming-conventions)
- [File Structure](#file-structure)
- [Code Formatting](#code-formatting)
- [Documentation](#documentation)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Version Control](#version-control)
- [Linting and Formatting](#linting-and-formatting)

## General Principles

1. **Progressive Enhancement**
   - Build core functionality first
   - Enhance with JavaScript
   - Graceful degradation

2. **Mobile First**
   - Design for small screens first
   - Scale up to larger screens
   - Use responsive design patterns

3. **Accessibility First**
   - Semantic HTML
   - Keyboard navigation
   - Screen reader support
   - Color contrast

4. **Performance Conscious**
   - Optimize assets
   - Minimize render-blocking resources
   - Lazy load non-critical content

## HTML Guidelines

### Do's
- Use HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.)
- Include proper document structure with `<!DOCTYPE html>`
- Specify language attribute on `<html>`
- Use UTF-8 character encoding
- Include viewport meta tag
- Add appropriate ARIA attributes
- Use descriptive text for links
- Include alt text for images
- Use button elements for actions
- Close all tags properly
- Use kebab-case for class names

### Don'ts
- Don't use deprecated elements (`<center>`, `<font>`, etc.)
- Don't use tables for layout
- Don't skip heading levels
- Don't use inline styles
- Don't use `style` attributes
- Don't use `id` for styling
- Don't use `!important` in CSS

### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <nav class="main-nav" aria-label="Main navigation">
      <ul>
        <li><a href="/" class="nav-link">Home</a></li>
        <li><a href="/about" class="nav-link">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main id="main-content">
    <article class="content-article">
      <h1>Article Title</h1>
      <p>Article content goes here.</p>
    </article>
  </main>
  
  <footer class="site-footer">
    <p>&copy; 2025 Excel Academy. All rights reserved.</p>
  </footer>
  
  <script src="main.js"></script>
</body>
</html>
```

## CSS Guidelines

### Methodology
We follow a modified BEM (Block, Element, Modifier) methodology with Tailwind CSS utility classes.

### Do's
- Use Tailwind CSS utility classes first
- Create custom components only when necessary
- Use CSS custom properties for theming
- Use relative units (rem, em, %) for typography and spacing
- Use CSS Grid and Flexbox for layouts
- Use CSS variables for colors and spacing
- Group related properties together
- Use shorthand properties when possible
- Comment complex or non-obvious code
- Organize CSS with logical sections

### Don'ts
- Don't use ID selectors for styling
- Don't use `!important`
- Don't use too specific selectors
- Don't use fixed units for font sizes (px)
- Don't use too many media queries (use Tailwind's responsive prefixes)
- Don't nest too deeply in preprocessors

### Example
```css
/* Custom CSS (when needed) */

/* Variables */
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --spacing-unit: 1rem;
}

/* Base styles */
body {
  @apply text-gray-900 bg-white;
  line-height: 1.6;
}

/* Components */
.button {
  @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-excel-blue hover:bg-excel-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-excel-blue transition-colors duration-200;
}

/* Utility classes */
.text-balance {
  text-wrap: balance;
}

/* Responsive design */n@screen md {
  .feature-card {
    @apply flex-row;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #3b82f6;
  }
}
```

## JavaScript Guidelines

### General
- Use modern JavaScript (ES6+)
- Use strict mode (`'use strict'`)
- Use modules (`import`/`export`)
- Use `const` by default, `let` when reassignment is needed
- Avoid `var`
- Use template literals for strings
- Use arrow functions for callbacks
- Use default parameters
- Use object destructuring
- Use array methods (map, filter, reduce)
- Use optional chaining (`?.`) and nullish coalescing (`??`)

### Functions
- Use named functions for better stack traces
- Keep functions small and focused
- Maximum of 3 parameters (use object destructuring for more)
- Return early to avoid nested conditionals
- Document complex functions with JSDoc

### Error Handling
- Use try/catch for async/await
- Create custom error classes
- Don't swallow errors
- Log errors appropriately
- Show user-friendly messages

### Example
```javascript
/**
 * Fetches student data from the API
 * @param {string} studentId - The ID of the student
 * @param {Object} options - Additional options
 * @param {boolean} options.includeGrades - Whether to include grade information
 * @returns {Promise<Object>} Student data
 * @throws {Error} If the request fails
 */
async function fetchStudentData(studentId, { includeGrades = false } = {}) {
  try {
    const url = new URL(`/api/students/${studentId}`, API_BASE_URL);
    if (includeGrades) {
      url.searchParams.append('include', 'grades');
    }
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch student data:', error);
    throw new Error('Unable to load student data. Please try again later.');
  }
}

// Usage
const student = await fetchStudentData('12345', { includeGrades: true });
```

## Naming Conventions

### HTML
- Use lowercase for element names and attributes
- Use kebab-case for class names and IDs
- Use semantic, descriptive names
- Prefix JavaScript hooks with `js-`

### CSS
- Use kebab-case for class names
- Use BEM naming when needed
- Use semantic names that describe purpose, not appearance
- Prefix utility classes with `u-`
- Prefix state classes with `is-` or `has-`

### JavaScript
- Use camelCase for variables and functions
- Use PascalCase for classes and constructors
- Use UPPER_SNAKE_CASE for constants
- Prefix private members with `_`
- Use meaningful, descriptive names
- Avoid abbreviations

## File Structure

```
src/
├── assets/
│   ├── fonts/
│   ├── images/
│   │   ├── icons/
│   │   └── photos/
│   └── videos/
├── css/
│   ├── base/
│   │   ├── _reset.css
│   │   ├── _typography.css
│   │   └── _variables.css
│   ├── components/
│   │   ├── _buttons.css
│   │   └── _cards.css
│   ├── layouts/
│   │   ├── _header.css
│   │   └── _footer.css
│   └── main.css
├── js/
│   ├── components/
│   │   ├── accordion.js
│   │   └── carousel.js
│   ├── utils/
│   │   ├── api.js
│   │   └── helpers.js
│   └── main.js
└── templates/
    ├── partials/
    └── pages/
```

## Code Formatting

### General
- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons
- Max line length: 100 characters
- Trailing commas in multiline objects/arrays
- Blank lines between logical sections
- Consistent spacing around operators
- Consistent spacing in function declarations

### HTML
- Double quotes for attributes
- Self-closing tags without space before /
- Indent nested elements
- One attribute per line for multiple attributes

### CSS
- One selector per line
- One declaration per line
- Opening brace on the same line as selector
- Closing brace on a new line
- One level of indentation for declarations
- One space after colon
- No space before colon
- No units on zero values
- Lowercase hex values
- Shortest possible hex values
- Quote attribute selectors
- Comma-separated selectors on new lines
- Single space after commas
- Blank line between rulesets

### JavaScript
- No unused variables
- No console.log in production
- Consistent return statements
- Default exports over named exports
- Group imports: built-ins, external, internal
- Sort imports alphabetically
- Use object shorthand
- Use array spreads (...) to copy arrays
- Use template literals for string interpolation

## Documentation

### Comments
- Use // for single-line comments
- Use /* */ for multi-line comments
- Use JSDoc for functions, classes, and modules
- Explain why, not what
- Don't comment obvious code
- Keep comments up-to-date

### README Files
- Include in each directory
- Describe purpose of the directory
- List important files
- Document dependencies
- Include usage examples

### API Documentation
- Document all public APIs
- Include examples
- Document parameters and return values
- Document errors and edge cases
- Keep documentation up-to-date

## Accessibility

### Semantic HTML
- Use appropriate heading levels
- Use lists for lists
- Use buttons for actions
- Use links for navigation
- Use form elements for forms
- Use tables for tabular data

### ARIA
- Use native HTML elements when possible
- Use ARIA for custom components
- Don't override native semantics
- Test with screen readers
- Use appropriate roles and states

### Keyboard Navigation
- All interactive elements should be focusable
- Logical tab order
- Visible focus styles
- Skip links
- Keyboard traps

### Color and Contrast
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Don't use color alone to convey information
- Test with color blindness simulators

## Performance

### Asset Optimization
- Minify CSS and JavaScript
- Optimize images
- Use modern image formats (WebP, AVIF)
- Use responsive images
- Use font-display: swap
- Subset fonts

### Loading
- Defer non-critical JavaScript
- Lazy load images and iframes
- Preload critical resources
- Preconnect to required origins
- Use service workers for caching

### Rendering
- Minimize layout shifts
- Optimize CSS delivery
- Avoid large layout changes
- Use `content-visibility`
- Use `will-change` sparingly

## Version Control

### Commits
- Use semantic commit messages
- Use the imperative mood
- Keep commits small and focused
- Reference issues and pull requests
- Write clear, descriptive messages

### Branching
- Use feature branches
- Delete merged branches
- Keep branches up-to-date
- Use pull requests for code review
- Squash and merge for clean history

### Pull Requests
- Reference related issues
- Include screenshots for UI changes
- Write clear descriptions
- Request reviews
- Address all comments

## Linting and Formatting

### ESLint
- Use with recommended settings
- Fix all warnings and errors
- Use --fix flag when possible
- Configure for your editor

### Prettier
- Use for consistent formatting
- Configure for your editor
- Run on save
- Don't override Prettier rules in ESLint

### EditorConfig
- Use for consistent editor settings
- Configure for your team
- Include in version control

## Continuous Integration
- Run tests on every push
- Enforce code style
- Check for vulnerabilities
- Deploy on success
- Monitor performance

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [CSS Specifications](https://www.w3.org/Style/CSS/specs.en.html)
- [ECMAScript Specification](https://tc39.es/ecma262/)

### Tools
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### References
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/)

---
*Last Updated: August 2025*
