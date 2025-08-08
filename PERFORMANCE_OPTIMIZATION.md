# Performance Optimization Guide

*Last Updated: August 8, 2025*

This document outlines the performance optimization strategies, metrics, and best practices for the Excel Academy website to ensure fast loading times and smooth user experience.

## Table of Contents
1. [Performance Metrics](#performance-metrics)
2. [Optimization Checklist](#optimization-checklist)
3. [Asset Optimization](#asset-optimization)
4. [Code Splitting](#code-splitting)
5. [Caching Strategies](#caching-strategies)
6. [Network Optimization](#network-optimization)
7. [Rendering Performance](#rendering-performance)
8. [Monitoring and Maintenance](#monitoring-and-maintenance)
9. [Tools and Resources](#tools-and-resources)
10. [Case Studies](#case-studies)

## Performance Metrics

### Core Web Vitals
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Secondary Metrics
- **Time to First Byte (TTFB)**: < 200ms
- **First Contentful Paint (FCP)**: < 1.8s
- **Speed Index**: < 3.4s
- **Total Blocking Time (TBT)**: < 200ms
- **Time to Interactive (TTI)**: < 3.8s

## Optimization Checklist

### Critical Rendering Path
- [ ] Minimize critical resources
- [ ] Eliminate render-blocking resources
- [ ] Optimize CSS delivery
- [ ] Defer non-critical JavaScript
- [ ] Inline critical CSS

### JavaScript
- [ ] Minify and compress
- [ ] Defer non-critical scripts
- [ ] Remove unused code
- [ ] Use code splitting
- [ ] Implement tree shaking

### CSS
- [ ] Minify and compress
- [ ] Remove unused CSS
- [ ] Inline critical CSS
- [ ] Defer non-critical CSS
- [ ] Use `preload` for critical CSS

### Images
- [ ] Optimize images (WebP format)
- [ ] Use responsive images with `srcset`
- [ ] Lazy load below-the-fold images
- [ ] Use modern image formats
- [ ] Specify image dimensions

### Fonts
- [ ] Use `font-display: swap`
- [ ] Preload critical fonts
- [ ] Subset fonts when possible
- [ ] Use `preconnect` for font origins

## Asset Optimization

### Image Optimization

#### Tools
- **WebP Converter**: `cwebp`
- **Optimization**: `imagemin`, `sharp`
- **Lazy Loading**: `loading="lazy"`

#### Implementation
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Font Optimization

#### Implementation
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" media="print" onload="this.media='all'">
```

### JavaScript Optimization

#### Code Splitting
```javascript
// Dynamic imports
const module = await import('./module.js');

// React.lazy for React components
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

#### Bundle Analysis
```bash
# Generate bundle analysis
npm run build -- --profile --json > stats.json

# View in browser
npx webpack-bundle-analyzer stats.json
```

## Code Splitting

### Route-based Splitting
```javascript
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
```

### Component-based Splitting
```javascript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

## Caching Strategies

### Service Worker
```javascript
// sw.js
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

### Cache Headers
```nginx
# Nginx configuration
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
  expires 1y;
  add_header Cache-Control "public, no-transform";
}
```

## Network Optimization

### HTTP/2
```nginx
# Nginx configuration
server {
  listen 443 ssl http2;
  http2_push /styles/main.css;
  http2_push /scripts/main.js;
}
```

### Preconnect and Prefetch
```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://api.excelacademy.edu">

<!-- Prefetch resources -->
<link rel="prefetch" href="/next-page.html" as="document">
```

## Rendering Performance

### Layout Stability
```css
/* Reserve space for dynamic content */
.image-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.image-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Optimize Animations
```css
/* Use transform and opacity for animations */
.animate {
  transition: transform 0.3s ease, opacity 0.3s ease;
  will-change: transform, opacity;
}
```

## Monitoring and Maintenance

### Performance Budget
```json
// .lighthouserc.json
{
  "ci": {
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "first-contentful-paint": ["warn", {"maxNumericValue": 2000}],
        "interactive": ["warn", {"maxNumericValue": 3800}],
        "resource-summary:script:size": ["warn", {"maxNumericValue": 500000}]
      }
    }
  }
}
```

### Monitoring Tools
- **Real User Monitoring**: New Relic, Sentry
- **Synthetic Monitoring**: WebPageTest, Lighthouse CI
- **Field Data**: Chrome UX Report

## Tools and Resources

### Build Tools
- **Bundler**: Vite, Webpack
- **Minification**: Terser, CSSNano
- **Image Optimization**: Sharp, ImageMin

### Testing Tools
- **Lighthouse**: `npm run lighthouse`
- **WebPageTest**: [webpagetest.org](https://www.webpagetest.org/)
- **Chrome DevTools**: Performance tab

### Performance Budget
- **JavaScript**: < 200KB (gzipped)
- **CSS**: < 50KB (gzipped)
- **Images**: < 100KB each (optimized)
- **Fonts**: < 100KB (subset when possible)

## Case Studies

### Homepage Optimization
**Before**: LCP 3.2s, TTI 4.5s  
**After**: LCP 1.8s, TTI 2.3s

**Optimizations**:
- Implemented image lazy loading
- Inlined critical CSS
- Deferred non-critical JavaScript
- Preloaded key requests

### News Page Optimization
**Before**: CLS 0.25, LCP 2.8s  
**After**: CLS 0.05, LCP 1.9s

**Optimizations**:
- Added explicit width/height to images
- Implemented CSS containment
- Optimized font loading
- Used `content-visibility: auto`

## Continuous Improvement

### Performance Audits
- Weekly automated Lighthouse audits
- Monthly manual performance reviews
- Quarterly deep-dive optimizations

### Performance Budget
- Monitor bundle size growth
- Track Core Web Vitals
- Set and review performance budgets

## Troubleshooting

### Common Issues

#### High LCP
- Optimize server response time
- Preload LCP image
- Remove render-blocking resources

#### Layout Shifts
- Set explicit dimensions for media
- Reserve space for dynamic content
- Avoid inserting content above existing content

#### Long Tasks
- Break up long JavaScript tasks
- Use `requestIdleCallback`
- Implement web workers for heavy computations

## Getting Help

### Resources
- [Web.dev](https://web.dev/learn/)
- [Lighthouse Scoring Guide](https://web.dev/performance-scoring/)
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)

### Support
For performance-related issues, please contact the performance team at performance@excelacademy.edu.

---
*This document was last updated on August 8, 2025.*
