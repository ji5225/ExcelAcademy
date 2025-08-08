# Deployment Checklist

*Last Updated: August 2025*

This document outlines the step-by-step process for deploying the Excel Academy website to various environments. Following this checklist ensures consistent and reliable deployments.

## Table of Contents
1. [Environments](#environments)
2. [Pre-Deployment Checks](#pre-deployment-checks)
3. [Local Development Deployment](#local-development-deployment)
4. [Staging Deployment](#staging-deployment)
5. [Production Deployment](#production-deployment)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Rollback Procedures](#rollback-procedures)
8. [Environment Configuration](#environment-configuration)
9. [CI/CD Pipeline](#cicd-pipeline)
10. [Troubleshooting](#troubleshooting)

## Environments

| Environment | URL | Branch | Purpose |
|-------------|-----|--------|----------|
| Local | http://localhost:3000 | feature/* | Development and testing |
| Staging | https://staging.excelacademy.edu | staging | Pre-production testing |
| Production | https://www.excelacademy.edu | main | Live site |

## Pre-Deployment Checks

### Code Quality
- [ ] All tests are passing
- [ ] Code has been reviewed and approved
- [ ] No merge conflicts exist
- [ ] Branch is up to date with target branch

### Dependencies
- [ ] All dependencies are up to date
- [ ] No security vulnerabilities in dependencies
- [ ] `package-lock.json` is committed

### Documentation
- [ ] CHANGELOG.md is updated
- [ ] Version numbers are updated
- [ ] Deployment notes are documented

### Configuration
- [ ] Environment variables are properly set
- [ ] Feature flags are configured
- [ ] Third-party services are properly configured

## Local Development Deployment

### Prerequisites
- [ ] Node.js 18.x installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/excelacademy/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update the values in `.env` as needed.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Verify the site is running at http://localhost:3000

## Staging Deployment

### Prerequisites
- [ ] Access to the staging server
- [ ] Necessary environment variables set
- [ ] Database migrations run (if applicable)

### Steps
1. Ensure you're on the `staging` branch:
   ```bash
   git checkout staging
   git pull origin staging
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Build the application:
   ```bash
   npm run build
   ```

4. Deploy to staging:
   ```bash
   npm run deploy:staging
   ```

5. Verify the deployment:
   - Visit https://staging.excelacademy.edu
   - Check for any console errors
   - Test critical user flows

## Production Deployment

### Prerequisites
- [ ] All tests are passing on staging
- [ ] Stakeholder approval obtained
- [ ] Maintenance window scheduled (if needed)
- [ ] Backup of current production environment

### Steps
1. Merge `staging` into `main`:
   ```bash
   git checkout main
   git pull origin main
   git merge staging
   ```

2. Create a version tag:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

3. Deploy to production:
   ```bash
   npm run deploy:production
   ```

4. Verify the deployment:
   - Visit https://www.excelacademy.edu
   - Check for any console errors
   - Test critical user flows
   - Verify analytics tracking

## Post-Deployment Verification

### Functional Testing
- [ ] Homepage loads correctly
- [ ] Navigation works as expected
- [ ] Forms submit successfully
- [ ] Authentication flows work
- [ ] All links are valid

### Performance Testing
- [ ] Page load times are acceptable
- [ ] No 404 errors in the console
- [ ] Images and assets load correctly
- [ ] Mobile responsiveness is maintained

### SEO Verification
- [ ] Meta tags are correct
- [ ] Sitemap is updated
- [ ] robots.txt is accessible
- [ ] Structured data is valid

## Rollback Procedures

### Automated Rollback
If using CI/CD with automated rollback:
1. Identify the failed deployment
2. Trigger rollback through the CI/CD interface
3. Verify the previous version is live

### Manual Rollback
1. Identify the last known good version:
   ```bash
   git log --oneline
   ```

2. Revert to the previous version:
   ```bash
   git checkout <commit-hash>
   ```

3. Force push to the main branch (use with caution):
   ```bash
   git push -f origin main
   ```

4. Re-deploy the previous version

## Environment Configuration

### Environment Variables
```env
NODE_ENV=production
API_BASE_URL=https://api.excelacademy.edu
GA_TRACKING_ID=UA-XXXXX-Y
SENTRY_DSN=your-sentry-dsn
```

### Required Services
- [ ] CDN (Cloudflare, CloudFront, etc.)
- [ ] Monitoring (New Relic, Datadog, etc.)
- [ ] Error Tracking (Sentry, Rollbar, etc.)
- [ ] Analytics (Google Analytics, etc.)

## CI/CD Pipeline

### GitHub Actions Workflow
```yaml
name: Deploy

on:
  push:
    branches: [main, staging]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js 18
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Staging
      if: github.ref == 'refs/heads/staging'
      run: npm run deploy:staging
    
    - name: Deploy to Production
      if: github.ref == 'refs/heads/main'
      run: npm run deploy:production
```

### Deployment Scripts
```json
{
  "scripts": {
    "deploy:staging": "netlify deploy --dir=build --alias=staging",
    "deploy:production": "netlify deploy --dir=build --prod"
  }
}
```

## Troubleshooting

### Common Issues

#### Deployment Fails
1. Check CI/CD logs for errors
2. Verify environment variables are set
3. Ensure sufficient permissions

#### Build Errors
1. Check for dependency issues
2. Verify Node.js version
3. Clear npm cache: `npm cache clean --force`

#### Performance Issues
1. Check server response times
2. Optimize images and assets
3. Review database queries (if applicable)

### Getting Help
1. Check the project's README
2. Review recent changes in the changelog
3. Open an issue in the repository
4. Contact the development team

---
*This document was last updated on August 8, 2025.*
