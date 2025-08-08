const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const Terser = require('terser');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const { gzipSync } = require('zlib');
const brotli = require('brotli');

// Configuration
const config = {
  sourceDir: '.',
  buildDir: 'dist',
  htmlOptions: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
  },
  cssOptions: {
    level: 2,
  },
  jsOptions: {
    compress: true,
    mangle: true,
  },
};

// Ensure build directory exists
if (!fs.existsSync(config.buildDir)) {
  fs.mkdirSync(config.buildDir, { recursive: true });
}

// Copy files recursively
async function copyFiles(source, target) {
  if (fs.lstatSync(source).isDirectory()) {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }
    const files = fs.readdirSync(source);
    for (const file of files) {
      const srcPath = path.join(source, file);
      const destPath = path.join(target, file);
      await copyFiles(srcPath, destPath);
    }
  } else {
    // Skip node_modules and other unnecessary files
    if (
      source.includes('node_modules') ||
      source.includes('.git') ||
      source.includes('.github') ||
      source.endsWith('.md') ||
      source.endsWith('.json') && !source.endsWith('manifest.json')
    ) {
      return;
    }

    // Create directory if it doesn't exist
    const targetDir = path.dirname(target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Process different file types
    const ext = path.extname(source).toLowerCase();
    
    if (['.html'].includes(ext)) {
      // Minify HTML
      const html = fs.readFileSync(source, 'utf8');
      const minified = await minify(html, config.htmlOptions);
      fs.writeFileSync(target, minified);
      console.log(`Minified HTML: ${source} -> ${target}`);
      
      // Generate gzip and brotli versions
      if (minified.length > 1024) { // Only compress reasonably large files
        const gzipped = gzipSync(minified);
        fs.writeFileSync(`${target}.gz`, gzipped);
        
        const brotliCompressed = brotli.compress(Buffer.from(minified));
        if (brotliCompressed) {
          fs.writeFileSync(`${target}.br`, brotliCompressed);
        }
      }
    } 
    else if (['.css'].includes(ext)) {
      // Minify CSS
      const css = fs.readFileSync(source, 'utf8');
      const minified = new CleanCSS(config.cssOptions).minify(css).styles;
      fs.writeFileSync(target, minified);
      console.log(`Minified CSS: ${source} -> ${target}`);
      
      // Generate gzip and brotli versions
      if (minified.length > 1024) {
        const gzipped = gzipSync(minified);
        fs.writeFileSync(`${target}.gz`, gzipped);
        
        const brotliCompressed = brotli.compress(Buffer.from(minified));
        if (brotliCompressed) {
          fs.writeFileSync(`${target}.br`, brotliCompressed);
        }
      }
    } 
    else if (['.js'].includes(ext)) {
      // Minify JavaScript
      const js = fs.readFileSync(source, 'utf8');
      const minified = (await Terser.minify(js, config.jsOptions)).code;
      fs.writeFileSync(target, minified);
      console.log(`Minified JS: ${source} -> ${target}`);
      
      // Generate gzip and brotli versions
      if (minified.length > 1024) {
        const gzipped = gzipSync(minified);
        fs.writeFileSync(`${target}.gz`, gzipped);
        
        const brotliCompressed = brotli.compress(Buffer.from(minified));
        if (brotliCompressed) {
          fs.writeFileSync(`${target}.br`, brotliCompressed);
        }
      }
    } 
    else if (['.jpg', '.jpeg', '.png', '.svg', '.gif'].includes(ext)) {
      // Optimize images
      const files = await imagemin([source], {
        destination: path.dirname(target),
        plugins: [
          imageminJpegtran(),
          imageminPngquant({
            quality: [0.6, 0.8],
          }),
          imageminSvgo(),
        ],
      });
      console.log(`Optimized image: ${source} -> ${target}`);
    } 
    else {
      // Copy other files as-is
      fs.copyFileSync(source, target);
      console.log(`Copied: ${source} -> ${target}`);
    }
  }
}

// Generate service worker for offline support
async function generateServiceWorker() {
  const swContent = `
    const CACHE_NAME = 'excel-academy-v1';
    const urlsToCache = [
      '/',
      '/index.html',
      '/assets/css/styles.css',
      '/assets/js/main.js',
      '/assets/images/logo.png',
      // Add other important assets to cache
    ];

    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => cache.addAll(urlsToCache))
      );
    });

    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request)
          .then(response => response || fetch(event.request))
      );
    });
  `;
  
  const swPath = path.join(config.buildDir, 'sw.js');
  fs.writeFileSync(swPath, swContent.trim());
  console.log(`Generated service worker: ${swPath}`);
}

// Generate sitemap
async function generateSitemap() {
  const pages = [
    '',
    'about',
    'academics',
    'admissions',
    'gallery',
    'news',
    'contact',
  ];
  
  const baseUrl = 'https://excelacademy.edu';
  const date = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const page of pages) {
    const url = page ? `/${page}.html` : '/index.html';
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${url}</loc>\n`;
    sitemap += `    <lastmod>${date}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  }
  
  sitemap += '</urlset>';
  
  const sitemapPath = path.join(config.buildDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Generated sitemap: ${sitemapPath}`);
}

// Generate robots.txt
async function generateRobotsTxt() {
  const content = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: https://excelacademy.edu/sitemap.xml
  `;
  
  const robotsPath = path.join(config.buildDir, 'robots.txt');
  fs.writeFileSync(robotsPath, content.trim());
  console.log(`Generated robots.txt: ${robotsPath}`);
}

// Main build function
async function build() {
  console.log('Starting build process...');
  
  try {
    // Copy and process all files
    await copyFiles(config.sourceDir, config.buildDir);
    
    // Generate additional files
    await generateServiceWorker();
    await generateSitemap();
    await generateRobotsTxt();
    
    console.log('\nBuild completed successfully!');
    console.log(`Output directory: ${path.resolve(config.buildDir)}`);
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Run the build
build();
