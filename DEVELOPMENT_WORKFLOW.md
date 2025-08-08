# Excel Academy Development Workflow

*Last Updated: August 8, 2025*

This document outlines the development workflow, branching strategy, and release process for the Excel Academy website project.

## Table of Contents
1. [Development Environment](#development-environment)
2. [Branching Strategy](#branching-strategy)
3. [Commit Message Guidelines](#commit-message-guidelines)
4. [Code Review Process](#code-review-process)
5. [Testing Strategy](#testing-strategy)
6. [Versioning](#versioning)
7. [Release Process](#release-process)
8. [Hotfix Process](#hotfix-process)
9. [Documentation](#documentation)
10. [Troubleshooting](#troubleshooting)

## Development Environment

### Prerequisites
- Node.js 18.x
- npm 8.x or later
- Git
- VS Code (recommended)

### Setup
1. **Fork the repository**
   ```bash
   # Clone your fork
   git clone https://github.com/your-username/school-website.git
   cd school-website
   
   # Add upstream remote
   git remote add upstream https://github.com/excelacademy/website.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Branching Strategy

We follow the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) branching model with some modifications.

### Main Branches
- `main` - Production code
- `develop` - Integration branch for features
- `release/*` - Release preparation branches

### Supporting Branches
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical production fixes
- `chore/*` - Maintenance tasks

### Branch Naming Conventions
```
type/description-in-kebab-case
```

**Examples**:
- `feature/user-authentication`
- `bugfix/login-form-validation`
- `chore/update-dependencies`
- `hotfix/security-patch`

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code changes that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples
```
feat(auth): add login functionality

- Implement login form
- Add authentication service
- Add error handling

Fixes #123
```

## Code Review Process

1. **Create a Pull Request (PR)**
   - Target the `develop` branch
   - Fill out the PR template
   - Add relevant labels
   - Request reviewers

2. **Review Process**
   - At least one approval required
   - All CI checks must pass
   - Address all review comments
   - Update documentation if needed

3. **Merge Strategy**
   - Squash and merge for feature branches
   - Rebase and merge for hotfixes
   - Delete source branch after merge

## Testing Strategy

### Unit Tests
- Test individual components/functions
- File naming: `*.test.js` or `*.spec.js`
- Run tests: `npm test`

### Integration Tests
- Test component interactions
- File naming: `*.integration.test.js`
- Run tests: `npm run test:integration`

### End-to-End Tests
- Test user flows
- File naming: `*.e2e.test.js`
- Run tests: `npm run test:e2e`

### Test Coverage
- Minimum 80% coverage required
- Run coverage: `npm run test:coverage`

## Versioning

We follow [Semantic Versioning](https://semver.org/) (SemVer):
- **MAJOR**: Breaking changes
- **MINOR**: Backward-compatible features
- **PATCH**: Backward-compatible bug fixes

## Release Process

### Preparation
1. Create a release branch from `develop`
   ```bash
   git checkout develop
   git pull
   git checkout -b release/v1.2.0
   ```

2. Update version numbers
   - Update `package.json`
   - Update CHANGELOG.md
   - Commit changes
   ```bash
   git commit -am "chore(release): prepare v1.2.0"
   ```

3. Merge to main and tag
   ```bash
   git checkout main
   git merge --no-ff release/v1.2.0
   git tag -a v1.2.0 -m "Version 1.2.0"
   ```

4. Merge back to develop
   ```bash
   git checkout develop
   git merge --no-ff release/v1.2.0
   ```

5. Push changes
   ```bash
   git push origin main
   git push origin develop
   git push --tags
   ```

6. Create GitHub release
   - Go to Releases
   - Draft a new release
   - Select the tag
   - Add release notes
   - Attach build artifacts

## Hotfix Process

1. Create hotfix branch from `main`
   ```bash
   git checkout main
   git pull
   git checkout -b hotfix/critical-issue
   ```

2. Make necessary fixes
   - Write tests
   - Update documentation
   - Update CHANGELOG.md

3. Commit changes
   ```bash
   git commit -am "fix: critical security vulnerability"
   ```

4. Merge to main and tag
   ```bash
   git checkout main
   git merge --no-ff hotfix/critical-issue
   git tag -a v1.2.1 -m "Version 1.2.1"
   ```

5. Merge to develop
   ```bash
   git checkout develop
   git merge --no-ff hotfix/critical-issue
   ```

6. Push changes
   ```bash
   git push origin main
   git push origin develop
   git push --tags
   ```

## Documentation

### Updating Documentation
1. Update relevant documentation files
2. Ensure all new features are documented
3. Update CHANGELOG.md
4. Update README.md if needed

### Generating Documentation
```bash
# Generate API documentation
npm run docs

# Serve documentation locally
npm run docs:serve
```

## Troubleshooting

### Common Issues

#### Dependencies
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules
npm install
```

#### Git Issues
```bash
# Undo last commit
git reset --soft HEAD~1

# Fix merge conflicts
git status # See conflicts
git add . # After resolving
git commit
```

#### Build Issues
```bash
# Clean build
rm -rf dist
npm run build

# Check for TypeScript errors
npm run type-check
```

### Getting Help
1. Check the project documentation
2. Search existing issues
3. Ask in the team Slack channel
4. Open a new issue if needed

## Continuous Integration

### GitHub Actions
- Runs on every push and PR
- Includes:
  - Linting
  - Type checking
  - Unit tests
  - Build verification

### Required Checks
- Linting passes
- All tests pass
- Build succeeds
- Code coverage meets threshold

## Performance Monitoring

### Tools
- Lighthouse CI
- Web Vitals
- Custom performance metrics

### Performance Budget
- Max bundle size: 500KB (gzipped)
- Max image size: 200KB
- Max font size: 100KB

## Security

### Dependencies
- Regular security audits
- Automated dependency updates
- Immediate patching of vulnerabilities

### Code Review
- Security-focused code reviews
- Static analysis tools
- Manual security testing

## Support

### Getting Help
- **Documentation**: Check the `docs` directory
- **Issues**: File an issue on GitHub
- **Chat**: Join our Slack channel

### Reporting Issues
1. Check existing issues
2. Create a new issue
3. Follow the issue template
4. Add appropriate labels

---
*This document was last updated on August 8, 2025.*
