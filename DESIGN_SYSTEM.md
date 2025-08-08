# Excel Academy Design System

This document outlines the design system used across the Excel Academy website to maintain consistency in the user interface and experience.

## Design Principles

1. **Accessibility First**
   - WCAG 2.1 AA compliance
   - Keyboard navigable
   - Screen reader friendly
   - Sufficient color contrast

2. **Consistency**
   - Reusable components
   - Standardized spacing
   - Unified interactions

3. **Clarity**
   - Clear typography
   - Intuitive navigation
   - Helpful feedback

4. **Responsiveness**
   - Mobile-first approach
   - Fluid layouts
   - Flexible components

## Color Palette

### Primary Colors
- Excel Blue: `#2563eb`
- Excel Navy: `#1e40af`
- Excel Sky: `#3b82f6`

### Secondary Colors
- Success Green: `#10b981`
- Warning Yellow: `#f59e0b`
- Error Red: `#ef4444`
- Info Blue: `#3b82f6`

### Neutral Colors
- Black: `#1f2937`
- Dark Gray: `#4b5563`
- Gray: `#9ca3af`
- Light Gray: `#e5e7eb`
- Off-White: `#f9fafb`
- White: `#ffffff`

### Usage
- **Primary**: Buttons, links, important actions
- **Secondary**: Secondary actions, less prominent elements
- **Neutral**: Text, backgrounds, borders
- **Status**: Success, warning, error states

## Typography

### Font Family
- **Primary**: 'Inter', -apple-system, system-ui, sans-serif
- **Secondary**: 'Georgia', serif (for headings)
- **Monospace**: 'Roboto Mono', monospace (for code)

### Font Sizes
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 3rem (48px)
- `text-6xl`: 3.75rem (60px)

### Font Weights
- `font-light`: 300
- `font-normal`: 400
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700

### Line Heights
- `leading-none`: 1
- `leading-tight`: 1.25
- `leading-snug`: 1.375
- `leading-normal`: 1.5
- `leading-relaxed`: 1.625
- `leading-loose`: 2

## Spacing System

### Scale (rem)
- `0`: 0
- `px`: 1px
- `0.5`: 0.125rem (2px)
- `1`: 0.25rem (4px)
- `1.5`: 0.375rem (6px)
- `2`: 0.5rem (8px)
- `2.5`: 0.625rem (10px)
- `3`: 0.75rem (12px)
- `3.5`: 0.875rem (14px)
- `4`: 1rem (16px)
- `5`: 1.25rem (20px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `10`: 2.5rem (40px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)
- `24`: 6rem (96px)
- `32`: 8rem (128px)
- `40`: 10rem (160px)
- `48`: 12rem (192px)
- `56`: 14rem (224px)
- `64`: 16rem (256px)

### Usage
- **Padding**: `p-{size}`, `px-{size}`, `py-{size}`, etc.
- **Margin**: `m-{size}`, `mx-{size}`, `my-{size}`, etc.
- **Gap**: `gap-{size}`
- **Space Between**: `space-x-{size}`, `space-y-{size}`

## Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Components

### Buttons

#### Primary Button
```html
<button class="bg-excel-blue hover:bg-excel-navy text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
  Primary Button
</button>
```

#### Secondary Button
```html
<button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200">
  Secondary Button
</button>
```

#### Text Button
```html
<button class="text-excel-blue hover:text-excel-navy font-medium hover:underline">
  Text Button
</button>
```

### Forms

#### Text Input
```html
<div class="mb-4">
  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
  <input type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-excel-blue focus:border-excel-blue">
</div>
```

#### Select
```html
<div class="mb-4">
  <label for="grade" class="block text-sm font-medium text-gray-700 mb-1">Grade</label>
  <select id="grade" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-excel-blue focus:border-excel-blue">
    <option>Select a grade</option>
    <option>Kindergarten</option>
    <option>1st Grade</option>
    <!-- More options -->
  </select>
</div>
```

#### Checkbox
```html
<div class="flex items-start">
  <div class="flex items-center h-5">
    <input id="terms" type="checkbox" class="h-4 w-4 text-excel-blue focus:ring-excel-blue border-gray-300 rounded">
  </div>
  <div class="ml-3 text-sm">
    <label for="terms" class="font-medium text-gray-700">I agree to the terms and conditions</label>
  </div>
</div>
```

### Cards

#### Basic Card
```html
<div class="bg-white overflow-hidden shadow rounded-lg">
  <div class="px-4 py-5 sm:p-6">
    <h3 class="text-lg font-medium text-gray-900">Card Title</h3>
    <div class="mt-2 text-sm text-gray-500">
      Card content goes here.
    </div>
  </div>
</div>
```

#### Card with Image
```html
<div class="bg-white overflow-hidden shadow rounded-lg">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="">
  <div class="px-4 py-5 sm:p-6">
    <h3 class="text-lg font-medium text-gray-900">Event Title</h3>
    <div class="mt-2 text-sm text-gray-500">
      Event description goes here.
    </div>
    <div class="mt-4">
      <button class="text-excel-blue hover:text-excel-navy font-medium">
        Learn more →
      </button>
    </div>
  </div>
</div>
```

### Navigation

#### Main Navigation
```html
<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <img class="h-8 w-auto" src="/logo.svg" alt="Excel Academy">
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" class="border-excel-blue text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Home
          </a>
          <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            About
          </a>
          <!-- More navigation items -->
        </div>
      </div>
    </div>
  </div>
</nav>
```

## Icons

We use the [Heroicons](https://heroicons.com/) library for our iconography. Icons should be used consistently throughout the application.

### Example Usage
```html
<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
```

## Accessibility

### Focus States
- Visible focus indicators on all interactive elements
- Consistent focus styles across components
- No `outline: none` without proper alternative

### ARIA
- Proper ARIA attributes for custom components
- ARIA labels for icons without text
- ARIA live regions for dynamic content

### Keyboard Navigation
- Logical tab order
- Skip links for main content
- Keyboard-accessible dropdowns and modals

## Animation

### Transitions
- Hover/focus states transition smoothly
- Page transitions use consistent timing
- Prefers-reduced-motion respected

### Micro-interactions
- Feedback on user actions
- Loading states
- Success/error states

## Responsive Design

### Mobile-First
- Styles applied from smallest to largest breakpoint
- Touch targets at least 44×44px
- No horizontal scrolling

### Grid System
- 12-column grid
- Consistent gutters
- Flexible layouts

## Utilities

### Text Utilities
- Text alignment
- Text transformation
- Font weight
- Text colors

### Spacing Utilities
- Margin and padding
- Gap and space between
- Width and height

### Display Utilities
- Flexbox
- Grid
- Display properties

## Best Practices

### Component Usage
- Reuse existing components
- Follow naming conventions
- Document new components

### Customization
- Use CSS variables for theming
- Extend rather than override
- Keep styles maintainable

### Performance
- Optimize images
- Lazy load non-critical assets
- Minimize layout shifts

## Browser Support

### Supported Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Chrome for Android (latest 2 versions)

### Polyfills
- Included for modern JavaScript features
- Loaded conditionally
- Kept minimal

## Resources

### Design Tools
- [Figma Design Kit](#)
- [Adobe XD Kit](#)
- [Sketch Library](#)

### Documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)
- [Headless UI](https://headlessui.dev/)

---
*Last Updated: August 2025*
