# Contributing to Excel Academy Website

Thank you for your interest in contributing to the Excel Academy website! We welcome contributions from the community to help improve our website.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)
- [License](#license)

## Code of Conduct

This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/school-website.git
   cd school-website
   ```
3. **Set up the development environment**:
   - Make sure you have [Node.js](https://nodejs.org/) (v18.17.1 or later) installed
   - Install dependencies: `npm install`

## Development Workflow

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes following the [code style guidelines](#code-style).
3. Test your changes thoroughly.
4. Commit your changes with a descriptive commit message:
   ```bash
   git commit -m "Add your descriptive commit message here"
   ```
5. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a pull request against the `main` branch.

## Code Style

### HTML
- Use semantic HTML5 elements
- Use lowercase for element and attribute names
- Use double quotes for attributes
- Include alt text for images
- Follow accessibility best practices

### CSS
- Follow the [BEM methodology](http://getbem.com/)
- Use kebab-case for class names
- Use TailwindCSS utility classes when possible
- Keep selectors short and specific

### JavaScript
- Use ES6+ syntax
- Use `const` and `let` instead of `var`
- Use template literals for string interpolation
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally

## Submitting Changes

1. Ensure your code passes all tests and lints.
2. Update the documentation if necessary.
3. Submit a pull request with a clear description of your changes.
4. Be prepared to address any feedback or requested changes.

## Reporting Issues

When reporting issues, please include:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Browser/OS version
- Any relevant screenshots

## Feature Requests

We welcome feature requests! Please open an issue and:
1. Describe the feature you'd like to see
2. Explain why this would be useful
3. Include any relevant examples or mockups

## License

By contributing, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE) file.

## Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute!
