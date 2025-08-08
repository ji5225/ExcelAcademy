const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  sourceDir: '.',
  buildDir: 'dist',
  excludeDirs: ['node_modules', '.git', 'dist', '.github'],
  excludeFiles: ['.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock'],
  fileTypes: {
    html: ['.html', '.htm'],
    css: ['.css'],
    js: ['.js'],
    images: ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'],
    fonts: ['.woff', '.woff2', '.eot', '.ttf', '.otf']
  }
};

// Ensure build directory exists
if (!fs.existsSync(config.buildDir)) {
  fs.mkdirSync(config.buildDir, { recursive: true });
}

// Copy files recursively
function copyFiles(source, target) {
  if (fs.lstatSync(source).isDirectory()) {
    // Skip excluded directories
    if (config.excludeDirs.includes(path.basename(source))) {
      console.log(`Skipping directory: ${source}`);
      return;
    }

    // Create target directory if it doesn't exist
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }

    // Process directory contents
    const items = fs.readdirSync(source);
    for (const item of items) {
      const srcPath = path.join(source, item);
      const destPath = path.join(target, item);
      copyFiles(srcPath, destPath);
    }
  } else {
    // Skip excluded files
    if (config.excludeFiles.includes(path.basename(source))) {
      console.log(`Skipping file: ${source}`);
      return;
    }

    // Get file extension
    const ext = path.extname(source).toLowerCase();
    
    // Create target directory if it doesn't exist
    const targetDir = path.dirname(target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy the file
    fs.copyFileSync(source, target);
    console.log(`Copied: ${source} -> ${target}`);

    // Minify files if needed
    try {
      if (config.fileTypes.html.includes(ext)) {
        minifyFile(target, 'html');
      } else if (config.fileTypes.css.includes(ext)) {
        minifyFile(target, 'css');
      } else if (config.fileTypes.js.includes(ext)) {
        minifyFile(target, 'js');
      }
    } catch (error) {
      console.error(`Error processing ${target}:`, error.message);
    }
  }
}

// Minify a file based on its type
function minifyFile(filePath, type) {
  const content = fs.readFileSync(filePath, 'utf8');
  let minified = content;
  
  try {
    switch (type) {
      case 'html':
        // Simple HTML minification (remove comments and extra whitespace)
        minified = content
          .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
          .replace(/\s+/g, ' ') // Replace multiple spaces with one
          .replace(/>\s+</g, '><'); // Remove spaces between tags
        break;
        
      case 'css':
        // Simple CSS minification
        minified = content
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
          .replace(/\s+/g, ' ') // Replace multiple spaces with one
          .replace(/\s*([{}|:;,])\s*/g, '$1') // Remove spaces around CSS syntax
          .replace(/;}/g, '}') // Remove last semicolon in a rule
          .replace(/\s*!important/g, '!important') // Fix spaces before !important
          .replace(/\s*\{\s*/g, '{') // Remove spaces around {
          .replace(/\s*\}\s*/g, '}') // Remove spaces around }
          .trim();
        break;
        
      case 'js':
        // Simple JS minification
        minified = content
          .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '') // Remove comments
          .replace(/\s+/g, ' ') // Replace multiple spaces with one
          .replace(/\s*([=+\-*/%!&|^~<>?;:,{}()\[\]])\s*/g, '$1') // Remove spaces around operators
          .replace(/([;{}\[\](),])\s+/g, '$1') // Remove spaces after syntax characters
          .replace(/\s+([;{}\[\](),])/g, '$1') // Remove spaces before syntax characters
          .trim();
        break;
    }
    
    // Write minified content back to file
    if (minified.length < content.length) {
      fs.writeFileSync(filePath, minified);
      console.log(`Minified: ${filePath} (${(content.length / 1024).toFixed(2)}KB -> ${(minified.length / 1024).toFixed(2)}KB)`);
    }
  } catch (error) {
    console.error(`Error minifying ${filePath}:`, error.message);
  }
}

// Generate sitemap.xml
function generateSitemap() {
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
function generateRobotsTxt() {
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
function build() {
  console.log('Starting build process...');
  
  try {
    // Clean build directory
    if (fs.existsSync(config.buildDir)) {
      console.log(`Cleaning build directory: ${config.buildDir}`);
      fs.rmSync(config.buildDir, { recursive: true });
      fs.mkdirSync(config.buildDir, { recursive: true });
    }
    
    // Copy and process all files
    console.log('\nCopying and processing files...');
    copyFiles(config.sourceDir, config.buildDir);
    
    // Generate additional files
    console.log('\nGenerating sitemap and robots.txt...');
    generateSitemap();
    generateRobotsTxt();
    
    console.log('\nBuild completed successfully!');
    console.log(`Output directory: ${path.resolve(config.buildDir)}`);
    
    // Calculate build size
    const { size } = getDirectorySize(config.buildDir);
    console.log(`Total build size: ${(size / (1024 * 1024)).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Helper function to calculate directory size
function getDirectorySize(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  return files.reduce((acc, file) => {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      const dirSize = getDirectorySize(filePath);
      return {
        size: acc.size + dirSize.size,
        files: acc.files + dirSize.files
      };
    }
    
    const stats = fs.statSync(filePath);
    return {
      size: acc.size + stats.size,
      files: acc.files + 1
    };
  }, { size: 0, files: 0 });
}

// Run the build
build();
