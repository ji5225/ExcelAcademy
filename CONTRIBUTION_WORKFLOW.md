# Contribution Workflow

This document outlines the standard workflow for contributing to the Excel Academy website project. Following these guidelines helps ensure a smooth and efficient contribution process.

## Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Getting Started](#2-getting-started)
3. [Making Changes](#3-making-changes)
4. [Code Review](#4-code-review)
5. [Merging](#5-merging)
6. [Release Process](#6-release-process)
7. [Best Practices](#7-best-practices)
8. [Troubleshooting](#8-troubleshooting)

## 1. Prerequisites

Before you begin, make sure you have:

- [Git](https://git-scm.com/) installed
- A [GitHub](https://github.com/) account
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

## 2. Getting Started

### Fork the Repository
1. Navigate to the [Excel Academy repository](https://github.com/yourusername/school-website)
2. Click the "Fork" button in the top-right corner
3. Clone your forked repository:
   ```bash
   git clone https://github.com/yourusername/school-website.git
   cd school-website
   ```

### Set Up the Development Environment
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   Branch naming conventions:
   - `feature/` - New features
   - `bugfix/` - Bug fixes
   - `docs/` - Documentation changes
   - `refactor/` - Code refactoring
   - `test/` - Adding or updating tests
   - `chore/` - Maintenance tasks

### Set Up Upstream Remote
```bash
git remote add upstream https://github.com/excelacademy/school-website.git
```

## 3. Making Changes

### Before You Start
1. Make sure your local `main` branch is up to date:
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Process
1. Make your changes following the [coding standards](STYLEGUIDE.md)
2. Write tests for your changes
3. Run the test suite:
   ```bash
   npm test
   ```
4. Ensure all tests pass
5. Run the linter:
   ```bash
   npm run lint
   ```
6. Fix any linting errors

### Committing Changes
1. Stage your changes:
   ```bash
   git add .
   ```
2. Commit your changes with a descriptive message:
   ```bash
   git commit -m "feat: add new feature"
   ```
   Commit message format:
   ```
   type(scope): subject
   
   [optional body]
   
   [optional footer]
   ```
   Types:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes
   - `refactor`: Code changes that neither fix bugs nor add features
   - `test`: Adding or updating tests
   - `chore`: Changes to the build process or auxiliary tools

### Pushing Changes
```bash
git push origin feature/your-feature-name
```

## 4. Code Review

### Creating a Pull Request (PR)
1. Go to your forked repository on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template
4. Add reviewers
5. Link any related issues
6. Click "Create pull request"

### PR Review Process
1. Automated checks will run (tests, linting, etc.)
2. Reviewers will provide feedback
3. Make requested changes
4. Push updates to your branch
5. The PR will be approved once all checks pass and reviewers are satisfied

## 5. Merging

### Squash and Merge
1. Once approved, a maintainer will squash and merge your PR
2. The PR will be closed automatically
3. Delete the feature branch (both locally and remotely)

### Syncing Your Fork
```bash
git checkout main
git pull upstream main
git push origin main
```

## 6. Release Process

### Versioning
We follow [Semantic Versioning](https://semver.org/):
- MAJOR version for incompatible API changes
- MINOR version for added functionality in a backward-compatible manner
- PATCH version for backward-compatible bug fixes

### Creating a Release
1. Update the version in `package.json`
2. Update `CHANGELOG.md` with the new version and changes
3. Create a new tag:
   ```bash
   git tag -a v1.0.0 -m "Version 1.0.0"
   git push origin v1.0.0
   ```
4. Create a new release on GitHub

## 7. Best Practices

### Code Quality
- Write clean, maintainable code
- Follow the [style guide](STYLEGUIDE.md)
- Write meaningful commit messages
- Keep PRs small and focused

### Documentation
- Update documentation when making changes
- Add comments for complex logic
- Document any breaking changes

### Testing
- Write tests for new features
- Update tests when fixing bugs
- Ensure all tests pass before submitting a PR

## 8. Troubleshooting

### Common Issues
- **Merge conflicts**: Resolve conflicts in your branch before creating a PR
- **Failing tests**: Run tests locally before pushing
- **Linting errors**: Fix all linting errors before submitting a PR

### Getting Help
If you need help, you can:
1. Check the [documentation](README.md)
2. Search the [issues](https://github.com/excelacademy/school-website/issues)
3. Ask in the [community forum](#)
4. Open a new issue if you've found a bug

## 9. Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## 10. License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---
*Last Updated: August 2025*
