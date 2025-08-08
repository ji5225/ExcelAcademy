# Frequently Asked Questions

## General

### What is the Excel Academy website built with?
The website is built using modern web technologies:
- HTML5 for structure
- TailwindCSS for styling
- Vanilla JavaScript for interactivity
- No backend (static site)

### How do I get started with development?
See our [Development Guide](DEVELOPMENT.md) for detailed setup instructions.

## Contributing

### How can I contribute to the project?
We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### I found a bug. What should I do?
Please check the [existing issues](https://github.com/yourusername/school-website/issues) to see if it's already been reported. If not, you can open a new issue using our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

### I want to suggest a new feature. How?
Great! Please open a new issue using our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md).

## Technical

### What browsers are supported?
The website is tested on the latest versions of:
- Chrome
- Firefox
- Safari
- Edge
- Mobile Safari (iOS)
- Chrome for Android

### How do I update dependencies?
We use Dependabot to automatically update dependencies. You can also update them manually by running:
```bash
npm update
```

### How do I run the tests?
```bash
npm test
```

## Content Management

### How do I update the school's contact information?
Edit the relevant sections in the HTML files or configuration files. The main contact information is typically in the site header and footer.

### How do I add a new news article or event?
Edit the appropriate HTML file in the `news` or `events` directory, or update the corresponding JavaScript file if using a dynamic approach.

## Deployment

### How do I deploy the website?
See our [deployment guide](DEPLOYMENT.md) for detailed instructions.

### How do I clear the cache after updating the website?
The website includes cache-busting for static assets. If you're still seeing old content, try:
1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Clear your browser cache
3. Check your CDN settings if using one

## Troubleshooting

### I'm getting a 404 error. What should I do?
1. Check that the URL is correct
2. Make sure the file exists in the expected location
3. Check the server configuration if you're hosting the site

### The website looks broken. What should I do?
1. Clear your browser cache
2. Try a different browser
3. Check the browser's developer console for errors
4. If the issue persists, please [report it](.github/ISSUE_TEMPLATE/bug_report.md)

## Legal

### What license is the code under?
The code is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Can I use this for my own school?
Yes! Feel free to fork the repository and customize it for your needs. Please see the [LICENSE](LICENSE) for details.

## Contact

### I have a question that's not answered here. Who should I contact?
Please open an issue on our [GitHub repository](https://github.com/yourusername/school-website/issues) or contact us at support@excelacademy.edu.
