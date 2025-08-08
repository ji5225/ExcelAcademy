# Performance Guidelines

This document outlines performance best practices and optimization strategies for the Excel Academy website to ensure fast loading times and smooth user experience.

## Performance Budget

| Metric                     | Target       | Warning Threshold |
|----------------------------|--------------|-------------------|
| Time to Interactive (TTI)  | < 3.5s       | > 4s             |
| First Contentful Paint (FCP)| < 1.8s      | > 2.5s           |
| Total JavaScript           | < 170KB      | > 200KB          |
| Total CSS                  | < 50KB       | > 80KB           |
| Image Optimization         | WebP format  | > 100KB per image|
| HTTP/2 Server Push         | Enabled      | Disabled         |
| Cache Headers              | 1 year       | < 1 month        |

## Optimization Strategies

### 1. Asset Optimization

#### JavaScript
- [ ] Use code splitting
- [ ] Implement tree shaking
- [ ] Lazy load non-critical JavaScript
- [ ] Minify and compress
- [ ] Use `async` or `defer` for script loading

#### CSS
- [ ] Critical CSS in `<head>`
- [ ] Remove unused CSS
- [ ] Minify and compress
- [ ] Use media queries effectively
- [ ] Avoid `@import` in CSS

#### Images
- [ ] Use modern formats (WebP, AVIF)
- [ ] Implement responsive images with `srcset`
- [ ] Lazy load below-the-fold images
- [ ] Optimize SVGs
- [ ] Use CSS sprites for icons

### 2. Network Optimization

- [ ] Enable HTTP/2
- [ ] Implement server push for critical assets
- [ ] Use CDN for static assets
- [ ] Set proper cache headers
- [ ] Implement service workers for offline support

### 3. Rendering Performance

- [ ] Optimize CSS selectors
- [ ] Reduce layout thrashing
- [ ] Use `will-change` sparingly
- [ ] Implement virtual scrolling for long lists
- [ ] Use `content-visibility` for offscreen content

## Performance Testing

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Web Vitals](https://web.dev/vitals/)

### Testing Checklist

- [ ] Test on mobile and desktop
- [ ] Test on slow 3G connection
- [ ] Test with browser extensions disabled
- [ ] Test with ad blockers enabled
- [ ] Test on different devices

## Monitoring

### Real User Monitoring (RUM)
- [ ] Track Core Web Vitals
- [ ] Monitor JavaScript errors
- [ ] Track resource loading
- [ ] Monitor third-party scripts

### Synthetic Monitoring
- [ ] Regular Lighthouse audits
- [ ] Scheduled performance tests
- [ ] Uptime monitoring
- [ ] API response time monitoring

## Performance Budget Enforcement

```javascript
// Example performance budget using webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'bundle-stats.json',
    })
  ],
  performance: {
    maxAssetSize: 250000, // 250KB
    maxEntrypointSize: 250000, // 250KB
    hints: 'warning',
  },
};
```

## Critical Rendering Path

### HTML
- [ ] Minify HTML
- [ ] Load critical CSS in `<head>`
- [ ] Defer non-critical CSS
- [ ] Preload critical resources
- [ ] Preconnect to required origins

### JavaScript
- [ ] Defer non-critical JavaScript
- [ ] Use `async` for non-render-blocking scripts
- [ ] Code split large bundles
- [ ] Remove unused code

### CSS
- [ ] Inline critical CSS
- [ ] Load non-critical CSS asynchronously
- [ ] Remove unused CSS
- [ ] Avoid `@import`

## Caching Strategy

### Browser Caching
- [ ] Set appropriate `Cache-Control` headers
- [ ] Use `ETag` for validation
- [ ] Implement cache busting for static assets

### Service Worker
- [ ] Cache static assets
- [ ] Implement offline fallback
- [ ] Update strategy for new versions

## Third-Party Scripts

### Optimization
- [ ] Load asynchronously
- [ ] Use `rel="preconnect"` or `dns-prefetch`
- [ ] Lazy load non-critical scripts
- [ ] Consider self-hosting when possible

### Monitoring
- [ ] Track script loading time
- [ ] Monitor script failures
- [ ] Audit third-party impact

## Build Optimizations

### JavaScript Bundling
- [ ] Code splitting
- [ ] Tree shaking
- [ ] Module concatenation
- [ ] Minification

### Image Optimization
- [ ] Automatic WebP generation
- [ ] Responsive image generation
- [ ] Lazy loading
- [ ] Blur-up placeholders

## Performance Metrics

### Core Web Vitals
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Additional Metrics
- **Time to First Byte (TTFB)**: < 200ms
- **First Contentful Paint (FCP)**: < 1.8s
- **Time to Interactive (TTI)**: < 3.5s
- **Total Blocking Time (TBT)**: < 200ms

## Performance Checklist

### Development
- [ ] Run performance audits before commits
- [ ] Test on multiple devices
- [ ] Monitor bundle size
- [ ] Optimize images

### Production
- [ ] Enable compression
- [ ] Set cache headers
- [ ] Monitor Core Web Vitals
- [ ] Set up error tracking

## Resources

- [Web Performance Recipes With Puppeteer](https://github.com/addyosmani/puppeteer-webperf)
- [Optimize with webpack](https://webpack.js.org/guides/build-performance/)
- [Optimize with Vite](https://vitejs.dev/guide/performance.html)
- [Performance Patterns](https://addyosmani.com/blog/performance-basics/)

---
*Last Updated: August 2025*
