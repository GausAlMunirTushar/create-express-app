# Contributing to Create Express App

👋 Thank you for your interest in contributing to Create Express App! We welcome contributions from the community and are grateful for your help in making this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Making Contributions](#making-contributions)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Testing](#testing)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)
- [Commit Message Convention](#commit-message-convention)
- [Getting Help](#getting-help)
- [Recognition](#recognition)

## 🤝 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and respectful environment for everyone. Be kind, respectful, and helpful in all interactions.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **pnpm** 8 or higher
- **MongoDB** (for local development)
- **Git**

### First Time Contributors

If you're new to open source, check out issues labeled `good first issue` to get started! These are specially curated issues that are perfect for beginners.

## ⚙️ Development Setup

### 1. Fork and Clone

#### Step 1: Fork the Repository

First, you need to fork the repository to your own GitHub account:

1. Go to the repository: https://github.com/gausalmunirtushar/create-express-app
2. Click the **"Fork"** button in the top-right corner
3. This creates a copy of the repository under your GitHub account

#### Step 2: Clone Your Fork

Why Fork First?

- Isolation: Your changes don't affect the main repository directly
- Safety: You can experiment without breaking the original code
- Workflow: Standard GitHub contribution model
- Control: You manage your own copy and pull requests

After forking, clone your forked repository to your local machine:

```bash
# Using pnpm (recommended)
pnpm install

```

## Branch Naming Convention

```bash
# Features
git checkout -b feature/user-authentication

# Bug fixes
git checkout -b fix/database-connection

# Documentation
git checkout -b docs/api-reference

# Hotfix
git checkout -b hotfix/critical-security
```

## Pull Request Process

Before Submitting a PR
Ensure tests pass

```bash
pnpm test
```

Run linting

```bash
pnpm lint

```

Update documentation if needed

## PR Submission Steps

1. Create a Pull Request from your fork to the main repository

2. Use the PR template and fill out all sections

3. Link related issues using Fixes #123

4. Request reviews from maintainers

5. Address review comments promptly

## PR Description Template

```
## Description
Brief description of the changes and the problem it solves.

## Related Issues
Fixes #(issue number)

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Refactoring

## Testing
- [ ] ✅ Added new tests
- [ ] ✅ All tests pass
- [ ] ✅ Manual testing completed

## Checklist
- [ ] My code follows the project style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have updated documentation
- [ ] I have added tests
```

## Reporting Issues

When reporting bugs, include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details

## Feature Requests

For new features, describe:

- The problem you're solving
- Your proposed solution
- Use cases and examples

## Commit Message Convention

We follow conventional commits:

feat: add user authentication
fix: resolve database connection issue
docs: update API documentation
Types: `feat, fix, docs, style, refactor, test, chore`

## Getting Help

📖 Documentation: Check the README.md

🐛 Issues: Search existing issues

💬 Discussions: Start a discussion for questions

## Recognition

All contributors will be recognized in our CONTRIBUTORS.md file!

## Thank You!

Thank you for considering contributing to Create Express App! Your time and effort help make this project better for everyone.

Happy Coding! 💻
