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

## Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Starts the development server.         |
| `npm run build`   | Builds the application for production. |
| `npm run lint`    | Runs ESLint for code quality checks.   |
| `npm run preview` | Previews the production build.         |

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

---

## Author

**Marina Lebedeva**

- GitHub: [github.com/mjleb](https://github.com/mjleb)
- Email: [marina@mj-dev.org]

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
