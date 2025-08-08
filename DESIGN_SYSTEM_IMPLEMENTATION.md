# Design System Implementation Guide

*Last Updated: August 8, 2025*

This document provides comprehensive guidance on implementing and maintaining the Excel Academy design system across the website. It covers setup, theming, component usage, and best practices for developers and designers.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Architecture](#architecture)
3. [Theming](#theming)
4. [Component Development](#component-development)
5. [Documentation](#documentation)
6. [Versioning](#versioning)
7. [Testing](#testing)
8. [Performance](#performance)
9. [Accessibility](#accessibility)
10. [Contributing](#contributing)
11. [Migration Guide](#migration-guide)
12. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites
- Node.js 16.x or later
- npm 8.x or later
- Git
- Design tokens (from `design-tokens.json`)

### Installation
```bash
# Clone the repository
git clone https://github.com/excelacademy/design-system.git
cd design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure
```
design-system/
├── assets/               # Static assets (fonts, images)
├── components/           # Reusable UI components
│   ├── atoms/            # Basic building blocks
│   ├── molecules/        # Groups of atoms
│   └── organisms/        # Complex UI components
├── styles/               # Global styles and utilities
│   ├── base/             # Resets and typography
│   ├── tokens/           # Design tokens
│   └── utilities/        # Helper classes
├── docs/                 # Documentation
├── tests/                # Test files
└── package.json          # Project configuration
```

## Architecture

### Design Tokens
Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

#### Token Categories
- **Colors**: Brand colors, semantic colors, gradients
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Margin, padding, and gap values
- **Shadows**: Box and text shadows
- **Border Radius**: Corner radius values
- **Z-Index**: Layer management
- **Breakpoints**: Responsive design breakpoints
- **Transitions**: Animation timings and easings

### CSS Architecture
We follow a modified BEM (Block Element Modifier) methodology with utility classes:

```css
/* Block */
.button {}

/* Element */
.button__icon {}

/* Modifier */
.button--primary {}

/* State */
.button.is-active {}

/* Utility */
.text-center { text-align: center; }
```

### JavaScript Architecture
- **Framework**: Vue.js 3 with Composition API
- **State Management**: Pinia
- **Build Tool**: Vite
- **Testing**: Vitest + Testing Library

## Theming

### Light Theme (Default)
```css
:root {
  /* Colors */
  --color-primary: #0ea5e9;
  --color-background: #ffffff;
  --color-text: #1f2937;
  /* ...other tokens */
}
```

### Dark Theme
```css
[data-theme="dark"] {
  --color-primary: #38bdf8;
  --color-background: #0f172a;
  --color-text: #f8fafc;
  /* ...other tokens */
}
```

### Theme Switching
```javascript
// Toggle between light and dark themes
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);
}
```

## Component Development

### Component Structure
```vue
<template>
  <button
    class="button"
    :class="[
      `button--${variant}`,
      `button--${size}`,
      { 'button--disabled': disabled },
      { 'button--loading': loading }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="$slots.icon" class="button__icon">
      <slot name="icon"></slot>
    </span>
    <span class="button__content">
      <slot></slot>
    </span>
    <span v-if="loading" class="button__loader">
      <Spinner size="sm" />
    </span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import Spinner from '../Spinner/Spinner.vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => 
      ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

function handleClick(event) {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/tokens/tokens.scss';

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-2;
  font-family: $font-sans;
  font-weight: $font-medium;
  border: 1px solid transparent;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all $duration-200 ease-in-out;
  
  &--primary {
    background-color: $color-primary-600;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: $color-primary-700;
    }
    
    &:active:not(:disabled) {
      background-color: $color-primary-800;
    }
  }
  
  &--md {
    padding: $spacing-2 $spacing-4;
    font-size: $text-sm;
    line-height: $leading-5;
  }
  
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &--loading {
    position: relative;
    color: transparent;
    pointer-events: none;
    
    .button__loader {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
```

### Component Documentation
Each component should include:
1. **Description**: Purpose and usage
2. **Examples**: Various states and variants
3. **API**: Props, slots, events
4. **Accessibility**: Keyboard navigation, ARIA attributes
5. **Best Practices**: Dos and don'ts

## Documentation

### Storybook
We use Storybook for component documentation and development:

```bash
# Start Storybook
npm run storybook

# Build static Storybook
npm run build:storybook
```

### Doc Blocks
Document components using JSDoc and Storybook Docs:

```jsx
/**
 * A button component with multiple variants and states.
 * 
 * @component
 * @example
 * <Button variant="primary" @click="handleClick">
 *   Click me
 * </Button>
 */
export default {
  name: 'Button',
  // ...
};
```

## Versioning

### Semantic Versioning
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Changelog
Maintain a `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com/) format.

### Publishing
```bash
# Build the library
npm run build

# Bump version
npm version [major|minor|patch]

# Publish to npm
npm publish --access public
```

## Testing

### Unit Tests
```javascript
// Button.spec.js
import { render, fireEvent } from '@testing-library/vue';
import Button from './Button.vue';

describe('Button', () => {
  it('renders button text', () => {
    const { getByText } = render(Button, {
      slots: { default: 'Click me' }
    });
    
    expect(getByText('Click me')).toBeInTheDocument();
  });
  
  it('emits click event', async () => {
    const { getByRole, emitted } = render(Button);
    const button = getByRole('button');
    
    await fireEvent.click(button);
    
    expect(emitted().click).toHaveLength(1);
  });
});
```

### Visual Regression Testing
```javascript
// button.stories.js
export const Primary = () => ({
  components: { Button },
  template: '<Button variant="primary">Primary Button</Button>'
});

Primary.parameters = {
  chromatic: { viewports: [320, 768, 1200] }
};
```

## Performance

### Bundle Analysis
```bash
# Analyze bundle size
npm run build -- --report
```

### Code Splitting
```javascript
// Lazy load components
const Button = () => import('./components/Button.vue');
```

### Tree Shaking
- Use ES modules
- Avoid side effects in module root
- Mark side-effect free modules in package.json:
  ```json
  {
    "sideEffects": false
  }
  ```

## Accessibility

### ARIA Attributes
```vue
<button
  :aria-label="loading ? 'Loading...' : 'Submit form'"
  :aria-busy="loading"
  :disabled="loading"
>
</button>
```

### Keyboard Navigation
- Ensure all interactive elements are focusable
- Implement keyboard event handlers
- Maintain logical tab order
- Provide visible focus states

### Screen Reader Testing
- Test with VoiceOver (Safari)
- Test with NVDA (Firefox)
- Test with JAWS (Chrome)

## Contributing

### Workflow
1. Create a feature branch: `feature/component-name`
2. Follow the code style
3. Write tests
4. Update documentation
5. Submit a pull request

### Code Review
- Check for accessibility
- Verify cross-browser compatibility
- Ensure responsive behavior
- Review performance implications

## Migration Guide

### From v1 to v2
#### Breaking Changes
1. Renamed `btn` class to `button`
2. Changed color token names
3. Updated spacing scale

#### Migration Steps
1. Run codemod:
   ```bash
   npx @excelacademy/ds-codemod v2-upgrade
   ```
2. Manually update any custom styles
3. Run tests and fix any issues

## Troubleshooting

### Common Issues

#### Styles Not Applying
- Check if the design tokens are imported
- Verify class names match
- Check for CSS specificity issues

#### Component Not Rendering
- Check console for errors
- Verify component is registered
- Check for naming conflicts

#### Performance Issues
- Check for unnecessary re-renders
- Optimize expensive computations
- Use `v-once` for static content

### Getting Help
1. Check the documentation
2. Search existing issues
3. Open a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/device information

---
*This document was last updated on August 8, 2025.*
