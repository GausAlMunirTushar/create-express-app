<p align="center"><img src="./public/images/create-ex-app.svg" width="160"/></p>
<h1 align="center">Create Express App</h1>

<p align="center">
 <a href="https://create-express-app.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/_Visit_Docs-g?style=for-the-badge" />
  </a>
  <a href="https://github.com/gausalmunirtushar" target="_blank">
    <img src="https://img.shields.io/badge/MADE%20BY-Munir%20Tushar-green?style=for-the-badge&logo=express&labelColor=0000&color=000000" alt="Made by Gaus Al Munir Tushar" />
  </a>
  <a href="https://www.npmjs.com/package/create-ex-app" target="_blank">
    <img src="https://img.shields.io/npm/v/create-ex-app?style=for-the-badge&color=blue&label=NPM" alt="npm version" />
  </a>
  <a href="./LICENSE.md" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge&color=97CA00" alt="License: MIT" />
  </a>
  <a href="https://github.com/gausalmunirtushar/create-express-app/discussions" target="_blank">
    <img src="https://img.shields.io/badge/Join_the_Community-000000?style=for-the-badge&logo=github" alt="Join the community" />
  </a>
</p>

<p align="center"> Create Express App is a CLI tool that simplifies the creation of Express.js applications. It generates a ready-to-use project structure with pre-configured templates for JavaScript and TypeScript applications. Perfect for developers who want to quickly scaffold an Express.js project and start coding right away.</p>

## Installation

### Using `npm`

```bash
npx create-ex-app my-app
```

Install the package globally:

```bash
npm install -g create-ex-app
```

---

## Usage

### Create a New Express.js Application

To scaffold a new Express.js project, run:

```bash
npx create-ex-app  my-app
```

### Start the Application

Navigate to the newly created project directory and install dependencies:

```bash
cd my-app
npm install
```

Start the server:

```bash
npm run dev
```

Your application will be running at `http://localhost:4000` by default.

---

## Commands

Scaffold a new Express.js application in the specified directory.

Example:

```bash
npx create-ex-app my-app
```

### `--help`

Display help information for the CLI.

```bash
npx create-ex-app --help
```

---

## 📌 Features

- **Quick Setup**: Generate a fully functional Express.js application in seconds.
- **Customizable Templates**: Includes pre-built templates for JavaScript and TypeScript applications.
- **Extensible**: Add your own templates or modify the existing ones.
- **Command-Line Simplicity**: Easy-to-use CLI commands.
- Integrates popular ORMs/ORMs like Mongoose, Sequelize, and TypeORM.
- Preconfigured project structures for best practices.

## 📦 Available Templates

| Template Name          | Language   | Database/ORM       |
| ---------------------- | ---------- | ------------------ |
| `javascript`           | JavaScript | None               |
| `typescript`           | TypeScript | None               |
| `javascript-mongoose`  | JavaScript | MongoDB (Mongoose) |
| `typescript-mongoose`  | TypeScript | MongoDB (Mongoose) |
| `javascript-sequelize` | JavaScript | SQL (Sequelize)    |
| `typescript-typeorm`   | TypeScript | SQL (TypeORM)      |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

### Development Setup

Clone the repository:

```bash
git clone https://github.com/gausalmunirtushar/create-express-app.git
```

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm run test
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Feedback

If you encounter any issues or have suggestions for improvement, feel free to open an issue on [GitHub](https://github.com/gausalmunirtushar/create-express-app/issues).
