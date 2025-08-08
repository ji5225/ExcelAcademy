# Development Guide

This guide provides detailed instructions for setting up a development environment for the Excel Academy website.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.1 or later)
- [npm](https://www.npmjs.com/) (v9 or later) or [Yarn](https://yarnpkg.com/) (v1.22 or later)
- [Git](https://git-scm.com/)
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

## Getting Started

1. **Fork the repository**
   - Click the "Fork" button in the top-right corner of the GitHub repository
   - Clone your forked repository:
     ```bash
     git clone https://github.com/your-username/school-website.git
     cd school-website
     ```

2. **Set up the development environment**
   ```bash
   # Install dependencies
   npm install
   
   # Start the development server
   npm run dev
   ```
   The development server will be available at `http://localhost:3000`

## Project Structure

```
school-website/
├── assets/                  # Static assets (images, fonts, etc.)
│   ├── css/                 # Compiled CSS
│   ├── images/              # Image assets
│   └── js/                  # JavaScript files
├── dist/                    # Production build output
├── node_modules/            # Dependencies (ignored in git)
├── src/                     # Source files
│   ├── css/                 # Source CSS/SCSS
│   └── js/                  # Source JavaScript
├── .github/                 # GitHub configuration
│   ├── workflows/           # GitHub Actions workflows
│   └── ISSUE_TEMPLATE/      # Issue templates
├── .vscode/                 # VS Code settings (optional)
├── public/                  # Public files (copied as-is to dist)
├── .editorconfig            # Editor configuration
├── .eslintrc.json           # ESLint configuration
├── .gitattributes           # Git attributes
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier configuration
├── .stylelintrc.json       # Stylelint configuration
├── CHANGELOG.md            # Project changelog
├── CODE_OF_CONDUCT.md      # Community guidelines
├── CONTRIBUTING.md         # Contribution guidelines
├── CONTRIBUTORS.md         # List of contributors
├── LICENSE                # Project license
├── MAINTAINERS.md         # Project maintainers
├── package-lock.json      # Lockfile for npm
├── package.json           # Project configuration and scripts
├── README.md             # Project documentation
└── SECURITY.md           # Security policy
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run all linters
- `npm run lint:css` - Lint CSS/SCSS files
- `npm run lint:js` - Lint JavaScript files
- `npm run format` - Format code using Prettier
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Code Style

### HTML
- Use semantic HTML5 elements
- Use kebab-case for class names
- Use double quotes for attributes
- Include alt text for images
- Follow accessibility best practices

### CSS
- Follow the BEM methodology
- Use kebab-case for class names
- Use TailwindCSS utility classes when possible
- Keep selectors short and specific

### JavaScript
- Use ES6+ syntax
- Use `const` and `let` instead of `var`
- Use template literals for string interpolation
- Follow the Airbnb JavaScript Style Guide

## Git Workflow

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/description-of-fix
   ```

2. Make your changes and commit them with a descriptive message:
   ```bash
   git add .
   git commit -m "Add your descriptive commit message here"
   ```

3. Push your changes to your fork:
   ```bash
   git push origin your-branch-name
   ```

4. Open a pull request against the `main` branch

## Testing

We use [Jest](https://jestjs.io/) for testing. To run the test suite:

```bash
npm test
```

Write tests for new features and ensure all tests pass before submitting a pull request.

## Code Review Process

1. All pull requests require at least one approval from a maintainer
2. All CI checks must pass before merging
3. Code should be properly documented and tested
4. Follow the project's coding standards

## Deployment

### Staging

Merges to the `develop` branch are automatically deployed to the staging environment.

### Production

1. Create a release pull request from `develop` to `main`
2. Update the version number in `package.json` following semantic versioning
3. Update `CHANGELOG.md` with the new version and changes
4. Get approval from at least one other maintainer
5. Merge the pull request
6. Create a new GitHub release with the changelog

## Troubleshooting

### Common Issues

- **Dependency issues**: Try deleting `node_modules` and `package-lock.json`, then run `npm install`
- **Build errors**: Check for syntax errors in your code and ensure all dependencies are installed
- **Test failures**: Make sure all tests pass locally before pushing

## Getting Help

If you need help, please:
1. Check the [documentation](README.md)
2. Search the [issues](https://github.com/yourusername/school-website/issues)
3. Open a new issue if your problem isn't already reported

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
