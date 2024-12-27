import { Route, Routes } from 'react-router-dom';
import PNotFound from './PNotFound';
import PMain from './PMain';
/**
 * A custom hook that defines the routing configuration for the application.
 *
 * This component renders a set of routes using `react-router-dom`. It maps the root path (`/`) to the `PMain` component
 * and any unknown paths (`*`) to the `PNotFound` component. The `Routes` component handles the routing logic
 * by rendering the appropriate component based on the current path.
 *
 * @returns {JSX.Element} The routes configuration for the application.
 *
 * @example
 * // Usage in a React component:
 * // <usePagesRoutes />
 */
export const usePagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PMain />} />
      <Route path="*" element={<PNotFound />} />
    </Routes>
  );
};
