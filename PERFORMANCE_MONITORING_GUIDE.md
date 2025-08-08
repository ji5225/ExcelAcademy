# Performance Monitoring Guide

*Last Updated: August 8, 2025*

This guide provides comprehensive instructions for monitoring, analyzing, and troubleshooting the performance of the Excel Academy website.

## Table of Contents
1. [Introduction](#introduction)
2. [Monitoring Tools](#monitoring-tools)
3. [Key Performance Metrics](#key-performance-metrics)
4. [Real User Monitoring (RUM)](#real-user-monitoring-rum)
5. [Synthetic Monitoring](#synthetic-monitoring)
6. [Server-Side Monitoring](#server-side-monitoring)
7. [Performance Budget](#performance-budget)
8. [Alerting and Notifications](#alerting-and-notifications)
9. [Performance Reports](#performance-reports)
10. [Troubleshooting Guide](#troubleshooting-guide)

## Introduction

Performance monitoring is crucial for maintaining an optimal user experience on the Excel Academy website. This guide covers the tools, metrics, and processes for effective performance monitoring.

## Monitoring Tools

### Core Tools
- **Google Analytics**: User behavior and site performance
- **Google Search Console**: Search performance and Core Web Vitals
- **Lighthouse CI**: Automated performance testing
- **WebPageTest**: Detailed performance analysis
- **New Relic**: Application performance monitoring
- **Cloudflare Analytics**: CDN and security monitoring

### Setup Instructions

#### Google Analytics 4
1. Create a GA4 property
2. Add the tracking code to your website
3. Set up goals and conversions
4. Configure custom dashboards

#### Lighthouse CI
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run locally
lhci autorun
```

## Key Performance Metrics

### Core Web Vitals
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Additional Metrics
- **Time to First Byte (TTFB)**: < 200ms
- **First Contentful Paint (FCP)**: < 1.8s
- **Speed Index**: < 3.4s
- **Total Blocking Time (TBT)**: < 200ms
- **Time to Interactive (TTI)**: < 3.8s

### Business Metrics
- **Conversion Rate**: Goal completions
- **Bounce Rate**: < 40%
- **Pages per Session**: > 3
- **Average Session Duration**: > 2 minutes

## Real User Monitoring (RUM)

### Implementation
```javascript
// Example: Using the Web Vitals library
import {getCLS, getFID, getLCP} from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  navigator.sendBeacon('/analytics', body);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
```

### Data Collection
- **Navigation Timing API**: Page load metrics
- **Resource Timing API**: Asset loading
- **Paint Timing API**: Visual metrics
- **Long Tasks API**: JavaScript execution

## Synthetic Monitoring

### Scheduled Tests
- **Homepage**: Every 5 minutes
- **Key User Flows**: Every 15 minutes
- **Global Locations**: 5+ geographic regions

### Test Configuration
```yaml
# WebPageTest config
browser: chrome
location: Dulles
connectivity: Cable
firstViewOnly: true
runs: 3
video: true
lighthouse: true
```

### Performance Budget
```json
{
  "performance": 90,
  "accessibility": 90,
  "best-practices": 90,
  "seo": 90,
  "pwa": 50,
  "budgets": [
    {
      "path": "/*",
      "resourceSizes": [
        {
          "resourceType": "document",
          "budget": 100
        },
        {
          "resourceType": "script",
          "budget": 350
        }
      ]
    }
  ]
}
```

## Server-Side Monitoring

### Key Metrics
- **Response Time**: < 500ms
- **Error Rate**: < 0.1%
- **CPU Usage**: < 70%
- **Memory Usage**: < 80%
- **Database Queries**: < 100ms

### Tools
- **New Relic**: Application performance
- **Datadog**: Infrastructure monitoring
- **Prometheus**: Metrics collection
- **Grafana**: Visualization

## Performance Budget

### Resource Limits
- **JavaScript**: < 200KB (gzipped)
- **CSS**: < 50KB (gzipped)
- **Images**: < 100KB each
- **Fonts**: < 100KB (subset when possible)
- **Total Page Weight**: < 1.5MB

### Budget Tracking
```bash
# Install webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to webpack config
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

## Alerting and Notifications

### Alert Conditions
- **Critical**: LCP > 4s
- **Warning**: LCP > 2.5s
- **Critical**: CLS > 0.25
- **Warning**: CLS > 0.1
- **Critical**: Error rate > 1%
- **Warning**: Error rate > 0.5%

### Notification Channels
- **Email**: Alerts to team@excelacademy.edu
- **Slack**: #website-alerts channel
- **SMS**: For critical issues
- **PagerDuty**: For on-call engineers

## Performance Reports

### Daily Report
- Core Web Vitals
- Error rates
- Top performance issues
- Comparison to previous day

### Weekly Report
- Performance trends
- User impact analysis
- Improvement opportunities
- Progress towards goals

### Monthly Report
- Performance KPIs
- Business impact
- ROI of optimizations
- Next month's priorities

## Troubleshooting Guide

### Common Issues

#### High LCP
1. **Check**: Server response time
2. **Check**: Render-blocking resources
3. **Check**: Image optimization
4. **Check**: Web font loading

#### High CLS
1. **Check**: Image dimensions
2. **Check**: Dynamic content injection
3. **Check**: Web fonts
4. **Check**: Advertisements/embeds

#### High FID
1. **Check**: Long tasks
2. **Check**: Main thread work
3. **Check**: Third-party scripts
4. **Check**: JavaScript execution time

### Performance Audits

#### Quick Audit
```bash
# Run Lighthouse
lighthouse https://www.excelacademy.edu --view

# Run WebPageTest
webpagetest test https://www.excelacademy.edu
```

#### Comprehensive Audit
1. **Analyze** Core Web Vitals
2. **Review** JavaScript execution
3. **Inspect** network waterfalls
4. **Profile** rendering performance
5. **Audit** accessibility

## Performance Optimization Workflow

1. **Measure**: Collect performance data
2. **Analyze**: Identify bottlenecks
3. **Optimize**: Implement fixes
4. **Verify**: Test changes
5. **Monitor**: Track impact
6. **Document**: Record findings

## Performance Monitoring Checklist

### Daily Tasks
- [ ] Check error rates
- [ ] Review Core Web Vitals
- [ ] Monitor server health
- [ ] Check alert history

### Weekly Tasks
- [ ] Analyze performance trends
- [ ] Review resource usage
- [ ] Audit third-party scripts
- [ ] Update monitoring dashboards

### Monthly Tasks
- [ ] Review performance budget
- [ ] Analyze user impact
- [ ] Update monitoring strategy
- [ ] Train team members

## Performance Monitoring Tools Comparison

| Tool | Type | Best For | Cost |
|------|------|----------|------|
| Google Analytics | RUM | User behavior | Free |
| New Relic | APM | Deep diagnostics | Paid |
| WebPageTest | Synthetic | Detailed analysis | Free/Paid |
| Lighthouse CI | Synthetic | Build-time checks | Free |
| Cloudflare | CDN | Edge performance | Free/Paid |

## Performance Monitoring Best Practices

1. **Set Baselines**: Know your current performance
2. **Define Thresholds**: Set clear performance goals
3. **Monitor Continuously**: 24/7 monitoring
4. **Alert Smartly**: Avoid alert fatigue
5. **Document Everything**: Keep records of issues and fixes
6. **Review Regularly**: Continuous improvement

## Getting Help

### Internal Resources
- [Performance Dashboard](https://analytics.excelacademy.edu/dashboard)
- [Performance Playbook](/docs/performance-playbook.md)
- [On-Call Engineer Guide](/docs/on-call.md)

### External Resources
- [Web.dev](https://web.dev/learn/)
- [Lighthouse Scoring](https://web.dev/performance-scoring/)
- [Web Vitals](https://web.dev/vitals/)

---
*This document was last updated on August 8, 2025.*
