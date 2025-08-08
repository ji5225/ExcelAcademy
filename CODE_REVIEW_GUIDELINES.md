# Code Review Guidelines

*Last Updated: August 2025*

## Table of Contents
1. [Purpose](#purpose)
2. [Code Review Principles](#code-review-principles)
3. [Review Checklist](#review-checklist)
4. [Review Process](#review-process)
5. [Writing Good Reviews](#writing-good-reviews)
6. [Receiving Reviews](#receiving-reviews)
7. [Common Issues](#common-issues)
8. [Automated Checks](#automated-checks)
9. [Best Practices](#best-practices)
10. [Resources](#resources)

## Purpose

Code reviews are a critical part of our development process that help us:

- Maintain code quality and consistency
- Share knowledge across the team
- Catch bugs and security issues early
- Ensure adherence to our coding standards
- Foster a collaborative team environment

## Code Review Principles

1. **Be Respectful**
   - Provide constructive, kind, and specific feedback
   - Focus on the code, not the person
   - Use "we" instead of "you"
   - Acknowledge good practices

2. **Be Efficient**
   - Respond to review requests promptly (within 1 business day)
   - Keep reviews focused and actionable
   - Review small, focused PRs (under 400 lines if possible)

3. **Be Thorough**
   - Understand the context and purpose of changes
   - Check for security implications
   - Consider edge cases and error handling
   - Verify tests exist and are meaningful

4. **Be Consistent**
   - Follow established patterns in the codebase
   - Apply the same standards to all team members
   - Document decisions that affect the codebase

## Review Checklist

### General
- [ ] Code follows our [style guide](STYLEGUIDE.md)
- [ ] No commented-out code
- [ ] No debugging statements (e.g., `console.log`)
- [ ] No sensitive data in code or configuration
- [ ] No hardcoded secrets or credentials

### Functionality
- [ ] Code works as intended
- [ ] Edge cases are handled
- [ ] Error messages are clear and helpful
- [ ] No performance regressions
- [ ] No security vulnerabilities

### Testing
- [ ] Tests exist for new functionality
- [ ] Existing tests pass
- [ ] Test coverage is adequate
- [ ] Test data is appropriate
- [ ] Mocks are used appropriately

### Documentation
- [ ] Code is self-documenting
- [ ] Complex logic is commented
- [ ] Public APIs are documented
- [ ] README is updated if needed
- [ ] CHANGELOG is updated if needed

### Security
- [ ] Input is validated
- [ ] Output is escaped
- [ ] Authentication/authorization is handled correctly
- [ ] No sensitive data in logs
- [ ] Dependencies are up-to-date

## Review Process

1. **Pre-Submission**
   - Run tests locally
   - Ensure code passes linting
   - Self-review your changes
   - Update documentation if needed

2. **Submission**
   - Create a descriptive PR title
   - Fill out the PR template
   - Link related issues
   - Add relevant reviewers
   - Set appropriate labels

3. **Review**
   - Reviewers examine the code
   - Provide feedback
   - Request changes if needed
   - Approve when satisfied

4. **Merge**
   - Squash and merge
   - Delete the feature branch
   - Update related issues

## Writing Good Reviews

### Do's
- Be specific about issues
- Suggest concrete improvements
- Explain the "why" behind suggestions
- Point to documentation when possible
- Acknowledge good patterns

### Don'ts
- Don't be overly prescriptive
- Don't nitpick trivial style issues (use linters instead)
- Don't make it personal
- Don't block on personal preferences

### Example Feedback

**Good:**
> I noticed that we're making multiple API calls in a loop. We could optimize this by batching the requests. Would you like me to show you how?

**Bad:**
> This is inefficient. Fix it.

## Receiving Reviews

1. **Be Open**
   - View feedback as an opportunity to learn
   - Ask questions if something isn't clear
   - Don't take criticism personally

2. **Respond to Feedback**
   - Acknowledge all comments
   - Explain your reasoning
   - Push fixes as separate commits
   - Mark comments as resolved when addressed

3. **Follow Up**
   - Thank reviewers for their time
   - Apply learnings to future work
   - Pay it forward by reviewing others' code

## Common Issues

### Performance
- N+1 queries
- Inefficient loops
- Unnecessary re-renders
- Large bundle sizes

### Security
- XSS vulnerabilities
- SQL injection risks
- Insecure dependencies
- Hardcoded secrets

### Maintainability
- Overly complex functions
- Duplicate code
- Magic numbers/strings
- Inconsistent naming

### Testing
- Brittle tests
- Missing edge cases
- Test data that doesn't reflect reality
- Tests that don't test anything

## Automated Checks

We use the following tools to automate parts of the code review process:

- **Linting**: ESLint, Stylelint
- **Formatting**: Prettier
- **Testing**: Jest, Cypress
- **Security**: npm audit, Dependabot
- **Code Quality**: SonarQube, CodeClimate

## Best Practices

### For Reviewers
- Review small chunks of code at a time
- Focus on high-impact feedback first
- Be explicit about required vs. optional changes
- Use inline comments for specific issues
- Use summary comments for general feedback

### For Authors
- Keep PRs small and focused
- Write clear commit messages
- Include context in your PR description
- Be responsive to feedback
- Learn from each review

### For the Team
- Rotate reviewers regularly
- Pair program on complex changes
- Hold regular knowledge-sharing sessions
- Continuously improve the review process

## Resources

- [Our Style Guide](STYLEGUIDE.md)
- [Contribution Guidelines](CONTRIBUTING.md)
- [Pull Request Template](.github/pull_request_template.md)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)
- [How to Do Code Reviews Like a Human](https://mtlynch.io/human-code-reviews-1/)

---
*This document was last updated on August 8, 2025.*
