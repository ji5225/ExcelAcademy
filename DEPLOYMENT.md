# Deployment Guide

This document provides detailed instructions for deploying the Excel Academy website to various hosting platforms.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Staging Deployment](#staging-deployment)
- [Production Deployment](#production-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Vercel Deployment](#vercel-deployment)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Custom Server Deployment](#custom-server-deployment)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js (v18.17.1 or later)
- npm (v9 or later) or Yarn
- Git
- An account on your chosen hosting platform (Netlify, Vercel, etc.)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/school-website.git
   cd school-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

## Staging Deployment

1. Ensure all changes are committed and pushed to the `develop` branch
2. Create a pull request from `develop` to `main`
3. After code review and approval, merge the PR
4. The CI/CD pipeline will automatically deploy to the staging environment

## Production Deployment

### Manual Deployment

1. Create a production build:
   ```bash
   npm run build
   ```
   This will create a `dist` directory with the optimized production build.

2. Deploy the contents of the `dist` directory to your hosting provider.

### Automated Deployment

1. Ensure all changes are committed and pushed to the `main` branch
2. Create a new release in GitHub:
   - Go to Releases > Draft a new release
   - Tag the release with a version number (e.g., v1.0.0)
   - Add release notes based on the changelog
   - Publish the release
3. The CI/CD pipeline will automatically deploy to production

## Netlify Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your Git provider and repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Environment Variables

Add any required environment variables in the Netlify dashboard:
1. Go to Site settings > Build & deploy > Environment
2. Add your environment variables

## Vercel Deployment

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```
   Follow the prompts to complete the deployment.

## GitHub Pages Deployment

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/school-website"
   ```

2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Custom Server Deployment

### Apache

1. Copy the contents of the `dist` directory to your web root (e.g., `/var/www/html`)
2. Ensure the `.htaccess` file is included
3. Configure your virtual host to point to this directory

### Nginx

1. Copy the contents of the `dist` directory to your web root
2. Add this server block to your Nginx configuration:
   ```nginx
   server {
       listen 80;
       server_name excelacademy.edu www.excelacademy.edu;
       root /path/to/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
3. Test and reload Nginx:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=production
API_URL=https://api.excelacademy.edu
GA_TRACKING_ID=UA-XXXXXXXXX-X
```

## Troubleshooting

### Build Failures
- Ensure all dependencies are installed
- Check for syntax errors in your code
- Check the build logs for specific error messages

### 404 Errors
- Ensure your server is configured to serve `index.html` for all routes
- Check that all file paths are correct
- Clear your browser cache

### Performance Issues
- Run a production build with `npm run build`
- Use browser developer tools to identify performance bottlenecks
- Optimize images and other assets

## Monitoring

Set up monitoring for your production environment:
- [Sentry](https://sentry.io/) for error tracking
- [Google Analytics](https://analytics.google.com/) for traffic analysis
- [Uptime Robot](https://uptimerobot.com/) for uptime monitoring

## Backup and Recovery

Regularly back up your:
- Source code (via Git repository)
- Database (if applicable)
- Uploaded files and media
- Environment variables and configuration

## Security

- Keep all dependencies up to date
- Use HTTPS
- Set appropriate security headers
- Regularly audit for vulnerabilities using `npm audit`

## Rollback

If a deployment fails or causes issues:
1. Revert to the previous working version using Git
2. Rebuild and redeploy
3. Investigate and fix the issue before attempting to deploy again
