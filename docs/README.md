**multilingual-react-mui-starter v0.0.0**

***

# Multilingual React MUI Starter

A boilerplate for building multilingual React applications with Material-UI (MUI), powered by Vite for fast development and i18next for internationalization.

---

## Features

- **React 18**: Latest React version with hooks and concurrent rendering.
- **Material-UI**: Modern and customizable component library.
- **Vite**: Super-fast build tool and dev server.
- **MobX**: Simple and scalable state management.
- **i18next**: Comprehensive internationalization and localization support.
- **React Router v7**: Routing solution for modern React apps.
- **TypeScript**: Type-safe development experience.
- **Prettier & ESLint**: Enforced coding standards and auto-formatting.
- **Husky**: Pre-commit hooks for maintaining code quality.
- **Jest**: Testing framework for writing and running tests.
- **TypeDoc**: Generates documentation from TypeScript files and JSDoc comments, with Markdown output.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mjleb/multilingual-react-mui-starter.git
   cd multilingual-react-mui-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The project will be available at: [http://localhost:5173/](http://localhost:5173/)

---

## Testing

This project uses **Jest** for unit testing:

1. Write your tests in files with the `.test.ts` or `.spec.ts` extension.
2. Tests are typically located in the `__tests__` folder or alongside relevant components.
3. To run tests, use the following command:

   ```bash
   npm run test
   ```

   Jest will automatically find and run all test files.

---

## Documentation

This project uses **TypeDoc** to generate documentation from the codebase and JSDoc comments. The documentation is generated in **Markdown** format using the **typedoc-plugin-markdown** plugin.

### To generate documentation in Markdown format:

1. Run the following command:

   ```bash
   npm run jsdoc:generate
   ```

2. The generated documentation will be available in the `docs` folder.

---

## Scripts

| Command                  | Description                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `npm run dev`            | Starts the development server using Vite.                                                            |
| `npm run build`          | Builds the application for production, first compiling TypeScript and then using Vite for the build. |
| `npm run lint`           | Runs ESLint to check for code quality and potential issues.                                          |
| `npm run format`         | Formats the code using Prettier according to the project’s style guide.                              |
| `npm run preview`        | Previews the production build locally using Vite.                                                    |
| `npm run test`           | Runs Jest tests to check the correctness of the application.                                         |
| `npm run prepare`        | Prepares Husky for pre-commit hooks to ensure code quality before commits.                           |
| `npm run jsdoc:generate` | Generates documentation using TypeDoc in Markdown format.                                            |

---

## Internationalization

This project uses **i18next** for multilingual support:

1. Translation files are located in `public/lang/`.
2. Add new language files (e.g., `en/index.json`, `fr/index.json`) to support additional languages.
3. These files can be edited even after the project is built, enabling dynamic updates to translations.

---

## Dependencies

**Core Libraries:**

- `@mui/material` and `@mui/icons-material` for Material-UI components.
- `react-router-dom` for navigation.
- `mobx` and `mobx-react-lite` for state management.
- `i18next` and `react-i18next` for multilingual support.

**Development Tools:**

- `vite` for building and serving the app.
- `eslint` and `prettier` for maintaining code quality.
- `husky` for managing pre-commit hooks.
- `typescript` for type-safe development.
- `jest` for testing.
- `typedoc` for generating documentation.
- `typedoc-plugin-markdown` for generating Markdown documentation.

---

## Author

**Marina Lebedeva**

- GitHub: [github.com/mjleb](https://github.com/mjleb)
- Email: [marina@mj-dev.org]

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
