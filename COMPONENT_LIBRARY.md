# Excel Academy Component Library

*Last Updated: August 8, 2025*

This document serves as a comprehensive guide to the reusable UI components used throughout the Excel Academy website. Each component is designed to be modular, accessible, and consistent with the design system.

## Table of Contents
1. [Component Principles](#component-principles)
2. [Atomic Design Structure](#atomic-design-structure)
3. [Component Documentation](#component-documentation)
4. [Component API](#component-api)
5. [Usage Guidelines](#usage-guidelines)
6. [Accessibility](#accessibility)
7. [Browser Support](#browser-support)
8. [Performance Considerations](#performance-considerations)
9. [Testing](#testing)
10. [Contributing](#contributing)

## Component Principles

### 1. Single Responsibility
Each component should have a single responsibility and do it well.

### 2. Reusability
Components should be designed for reuse across the application.

### 3. Composition
Favor composition over inheritance for building complex UIs.

### 4. Accessibility
All components must meet WCAG 2.1 AA standards.

### 5. Performance
Components should be optimized for performance.

## Atomic Design Structure

### 1. Atoms
Basic building blocks (buttons, inputs, labels, etc.)

### 2. Molecules
Groups of atoms functioning together (search form, card header, etc.)

### 3. Organisms
Complex UI components composed of molecules and/or atoms (header, footer, cards, etc.)

### 4. Templates
Page-level objects that provide context for components

### 5. Pages
Specific instances of templates with real content

## Component Documentation

Each component is documented with:
- **Description**: Purpose and usage
- **Visual Example**: Rendered component
- **Code Example**: Implementation code
- **Props**: Configuration options
- **Slots**: Content areas
- **Events**: Emitted events
- **Accessibility Notes**: ARIA attributes and keyboard navigation

## Component API

### Button Component

#### Description
A clickable button that triggers an action.

#### Visual Example
[Button examples showing different variants]

#### Code Example
```html
<Button 
  variant="primary"
  size="md"
  :disabled="false"
  :loading="false"
  @click="handleClick"
>
  Click me
</Button>
```

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | String | 'primary' | Button style variant |
| size | String | 'md' | Button size |
| disabled | Boolean | false | Disable the button |
| loading | Boolean | false | Show loading state |
| type | String | 'button' | HTML button type |

#### Slots
- **default**: Button label/content
- **icon**: Optional icon slot

#### Events
- **click**: Emitted when button is clicked

#### Accessibility
- Role: button
- Keyboard: Space/Enter to activate
- Focus state: Visible focus ring

### Card Component

#### Description
A flexible container for displaying content.

#### Visual Example
[Card example with header, body, and footer]

#### Code Example
```html
<Card>
  <template #header>
    <h3>Card Title</h3>
  </template>
  
  <p>Card content goes here.</p>
  
  <template #footer>
    <Button variant="secondary">Learn More</Button>
  </template>
</Card>
```

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | String | 'default' | Card style variant |
| padding | String | 'md' | Inner spacing |
| shadow | String | 'sm' | Box shadow level |
| border | Boolean | true | Show border |

#### Slots
- **header**: Card header content
- **default**: Main card content
- **footer**: Card footer content

### Form Components

#### Input
```html
<FormGroup label="Email" help="Enter your email address">
  <Input 
    type="email" 
    v-model="email"
    placeholder="you@example.com"
    :disabled="false"
    :required="true"
  />
</FormGroup>
```

#### Select
```html
<FormGroup label="Grade Level">
  <Select 
    v-model="grade"
    :options="gradeOptions"
    placeholder="Select grade"
  />
</FormGroup>
```

#### Checkbox
```html
<Checkbox 
  v-model="agreed"
  :disabled="false"
  :required="true"
>
  I agree to the terms and conditions
</Checkbox>
```

## Navigation Components

### Navbar
```html
<Navbar>
  <NavbarBrand>
    <Logo />
  </NavbarBrand>
  
  <Nav>
    <NavItem to="/about">About</NavItem>
    <NavItem to="/academics">Academics</NavItem>
    <NavDropdown title="Admissions">
      <NavItem to="/admissions/process">Process</NavItem>
      <NavItem to="/admissions/tuition">Tuition</NavItem>
    </NavDropdown>
  </Nav>
  
  <NavActions>
    <Button variant="outline">Portal Login</Button>
  </NavActions>
</Navbar>
```

### Breadcrumbs
```html
<Breadcrumbs :items="[
  { text: 'Home', to: '/' },
  { text: 'Academics', to: '/academics' },
  { text: 'Curriculum' }
]" />
```

## Content Components

### Accordion
```html
<Accordion>
  <AccordionItem title="What are your school hours?">
    <p>Our school hours are from 8:00 AM to 3:00 PM, Monday through Friday.</p>
  </AccordionItem>
  
  <AccordionItem title="Do you offer transportation?">
    <p>Yes, we offer bus transportation for students within the district.</p>
  </AccordionItem>
</Accordion>
```

### Tabs
```html
<Tabs>
  <Tab title="Elementary">
    <h3>Elementary Program</h3>
    <p>Content for elementary program...</p>
  </Tab>
  
  <Tab title="Middle School">
    <h3>Middle School Program</h3>
    <p>Content for middle school program...</p>
  </Tab>
  
  <Tab title="High School">
    <h3>High School Program</h3>
    <p>Content for high school program...</p>
  </Tab>
</Tabs>
```

## Feedback Components

### Alert
```html
<Alert 
  variant="success" 
  dismissible
  @dismiss="handleDismiss"
>
  Your application has been submitted successfully!
</Alert>
```

### Toast
```javascript
// Show a toast notification
toast({
  title: 'Success!',
  message: 'Your changes have been saved.',
  variant: 'success',
  duration: 5000
});
```

## Data Display Components

### Table
```html
<Table :columns="[
  { key: 'name', label: 'Name', sortable: true },
  { key: 'grade', label: 'Grade', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' }
]" :items="students">
  <template #cell-name="{ item }">
    {{ item.firstName }} {{ item.lastName }}
  </template>
  
  <template #cell-status="{ item }">
    <Badge :variant="getStatusVariant(item.status)">
      {{ item.status }}
    </Badge>
  </template>
  
  <template #cell-actions="{ item }">
    <Button 
      size="sm" 
      variant="ghost"
      @click="viewStudent(item)"
    >
      View
    </Button>
  </template>
</Table>
```

### Pagination
```html
<Pagination
  v-model:currentPage="currentPage"
  :total-items="totalItems"
  :per-page="perPage"
  @page-change="handlePageChange"
/>
```

## Utility Components

### Modal
```html
<Button @click="showModal = true">Open Modal</Button>

<Modal 
  v-model:show="showModal"
  title="Confirm Action"
  size="md"
  @close="handleClose"
>
  <p>Are you sure you want to delete this item?</p>
  
  <template #footer>
    <div class="flex justify-end space-x-3">
      <Button @click="showModal = false">Cancel</Button>
      <Button variant="danger" @click="confirmDelete">Delete</Button>
    </div>
  </template>
</Modal>
```

### Tooltip
```html
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

## Component API Details

### Common Props

#### Size
- `xs`: Extra small
- `sm`: Small
- `md`: Medium (default)
- `lg`: Large
- `xl`: Extra large

#### Variant
- `primary`: Primary action
- `secondary`: Secondary action
- `success`: Success state
- `danger`: Error/destructive action
- `warning`: Warning state
- `info`: Informational
- `light`: Light variant
- `dark`: Dark variant
- `ghost`: Ghost/transparent
- `link`: Link-like appearance

### Common Slots
- `default`: Main content
- `prepend`: Content before main content
- `append`: Content after main content
- `icon`: Icon content

## Usage Guidelines

### When to Create a New Component
1. **Reusability**: When the UI element is used in multiple places
2. **Complexity**: When the component has its own internal state and logic
3. **Maintainability**: When the component can be developed and tested in isolation

### Naming Conventions
- Use PascalCase for component names (`Button`, `CardHeader`)
- Use kebab-case for HTML attributes (`data-testid`, `aria-label`)
- Prefix related components (e.g., `Card`, `CardHeader`, `CardBody`)

### File Structure
```
components/
  atoms/
    Button/
      Button.vue
      Button.spec.js
      Button.stories.js
      index.js
  molecules/
    SearchBar/
      SearchBar.vue
      SearchBar.spec.js
      SearchBar.stories.js
      index.js
  organisms/
    Header/
      Header.vue
      Nav.vue
      index.js
      Header.spec.js
      Header.stories.js
```

## Accessibility

### ARIA Attributes
- Use appropriate ARIA roles and attributes
- Ensure proper labeling
- Support keyboard navigation
- Manage focus appropriately

### Keyboard Navigation
- Tab order follows visual flow
- Interactive elements are focusable
- Custom components support keyboard interaction
- Focus states are clearly visible

## Browser Support

### Supported Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (latest 2 versions)
- Chrome for Android (latest 2 versions)

### Polyfills
- Include required polyfills for:
  - Intersection Observer
  - Resize Observer
  - Custom Elements
  - Fetch API
  - Promise

## Performance Considerations

### Code Splitting
- Components are code-split by route
- Large components are lazy-loaded
- Third-party libraries are dynamically imported when possible

### Bundle Size
- Components are tree-shakeable
- Icons are imported individually
- Utility functions are imported individually

## Testing

### Unit Testing
- Test component rendering
- Test props and events
- Test accessibility attributes
- Test edge cases

### Integration Testing
- Test component interactions
- Test with real data
- Test responsive behavior

### Visual Regression Testing
- Test visual consistency
- Test across browsers
- Test responsive breakpoints

## Contributing

### Component Development
1. Create a new branch: `feature/component-name`
2. Follow the existing patterns and conventions
3. Write tests for your component
4. Document the component with examples
5. Submit a pull request

### Code Review
- Ensure accessibility compliance
- Verify cross-browser compatibility
- Check performance implications
- Review documentation

---
*This document was last updated on August 8, 2025.*
