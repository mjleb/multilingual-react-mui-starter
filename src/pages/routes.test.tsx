import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { usePagesRoutes } from '../pages/routes';
import '@testing-library/jest-dom';

jest.mock('./PMain.tsx', () => ({
  __esModule: true,
  default: jest.fn(() => <div>PMain Component</div>),
}));

jest.mock('./PNotFound.tsx', () => ({
  __esModule: true,
  default: jest.fn(() => <div>PNotFound Component</div>),
}));
/**
 * Test suite for `usePagesRoutes` component.
 *
 * This suite tests the rendering of pages based on different routes using the `MemoryRouter` from `react-router-dom`.
 * It mocks the `PMain` and `PNotFound` components to verify that the correct components are rendered for different paths.
 *
 * @see https://testing-library.com/docs/react-testing-library/intro/
 * @see https://reactrouter.com/web/api/MemoryRouter
 */
describe('usePagesRoutes', () => {
  /**
   * Test component that renders the `usePagesRoutes` hook.
   * This component is used to test the routing functionality.
   */
  const TestComponent = () => usePagesRoutes();
  /**
   * Test case to verify that the `PMain` component is rendered for the root path `/`.
   */
  it('renders PMain for the root path "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <TestComponent />
      </MemoryRouter>,
    );
    expect(screen.getByText('PMain Component')).toBeInTheDocument();
  });
  /**
   * Test case to verify that the `PNotFound` component is rendered for an unknown path.
   */
  it('renders PNotFound for an unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <TestComponent />
      </MemoryRouter>,
    );
    expect(screen.getByText('PNotFound Component')).toBeInTheDocument();
  });
});
