# Contributor Onboarding Guide

*Last Updated: August 2025*

Welcome to the Excel Academy website project! This guide will help you get started as a contributor. We're excited to have you on board!

## Table of Contents
1. [Quick Start](#quick-start)
2. [Development Environment Setup](#development-environment-setup)
3. [Project Structure](#project-structure)
4. [Coding Standards](#coding-standards)
5. [Making Your First Contribution](#making-your-first-contribution)
6. [Testing](#testing)
7. [Pull Request Process](#pull-request-process)
8. [Communication](#communication)
9. [Getting Help](#getting-help)
10. [Frequently Asked Questions](#frequently-asked-questions)

## Quick Start

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/school-website.git
   cd school-website
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Start** the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Environment Setup

### Prerequisites
- Node.js 18.x
- npm 8.x or later
- Git
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

### Recommended VS Code Extensions
- ESLint
- Prettier
- Stylelint
- EditorConfig
- GitLens

### Environment Variables
1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
2. Update the values in `.env.local` as needed

## Project Structure

```
.
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   └── lib/             # External library integrations
├── .github/             # GitHub configuration
├── docs/                # Documentation
└── tests/               # Test files
```

## Coding Standards

### Git Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Example:
```
feat(auth): add login functionality

- Add login form component
- Implement authentication service
- Add error handling

Fixes #123
```

### Code Style
- 2 spaces for indentation
- Single quotes for strings
- Semicolons
- Trailing commas in multiline objects/arrays
- Max line length: 100 characters

## Making Your First Contribution

1. **Find an issue** to work on from the [issue tracker](https://github.com/excelacademy/website/issues)
2. **Claim** the issue by commenting on it
3. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**
5. **Run tests**:
   ```bash
   npm test
   ```
6. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```
7. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Open a Pull Request**

## Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run specific test file
npm test -- path/to/test/file.spec.js

# Run coverage report
npm run test:coverage
```

### Writing Tests
- Place test files next to the code they test with `.test.js` or `.spec.js` suffix
- Use `describe` and `it` blocks
- Follow the AAA pattern: Arrange, Act, Assert

## Pull Request Process

1. **Update** your branch with the latest changes from `main`:
   ```bash
   git pull --rebase origin main
   ```
2. **Push** your changes:
   ```bash
   git push origin your-branch-name
   ```
3. **Open a Pull Request** from your fork to the `main` branch
4. **Fill out** the PR template
5. **Request reviews** from at least one maintainer
6. **Address** any feedback
7. **Squash and merge** once approved

## Communication

### Where to Ask Questions
- **General Questions**: [GitHub Discussions](https://github.com/excelacademy/website/discussions)
- **Bugs**: [GitHub Issues](https://github.com/excelacademy/website/issues)
- **Urgent Issues**: [Slack Channel](#)

### Weekly Sync
- **When**: Every Monday at 10:00 AM EST
- **Where**: [Zoom Link](#)
- **Agenda**:
  1. Project updates
  2. Blockers
  3. Planning

## Getting Help

### Documentation
- [Project Wiki](https://github.com/excelacademy/website/wiki)
- [API Documentation](/docs/API.md)
- [Style Guide](/STYLEGUIDE.md)

### Mentorship
New contributors will be paired with a mentor who can help with:
- Code reviews
- Architecture decisions
- Project navigation

To request a mentor, open an issue with the `mentorship` label.

## Frequently Asked Questions

### How do I report a bug?
Open an issue with the `bug` label and include:
1. Steps to reproduce
2. Expected behavior
3. Actual behavior
4. Screenshots if applicable

### How do I request a feature?
Open an issue with the `enhancement` label and describe:
1. The problem you're trying to solve
2. Proposed solution
3. Alternative solutions considered

### How are decisions made?
- Small changes: Maintainer discretion
- Medium changes: Discussion in issues/PRs
- Major changes: RFC (Request for Comments) process

### What's the release schedule?
- **Patch releases**: As needed for critical bugs
- **Minor releases**: Every 2 weeks
- **Major releases**: Quarterly

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---
*This document was last updated on August 8, 2025.*
