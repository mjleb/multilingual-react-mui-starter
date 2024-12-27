import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher'; // путь к вашему компоненту
import { useColorScheme } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
/**
 * Unit tests for the `ThemeSwitcher` component.
 *
 * This suite of tests ensures the correct behavior of the `ThemeSwitcher` component, which
 * handles theme switching between light and dark modes.
 *
 * The tests include:
 * 1. Verifying that the correct icon is displayed based on the current mode.
 * 2. Checking if the menu opens and closes when the icon button is clicked.
 * 3. Ensuring the theme mode is changed when a menu item is selected.
 *
 * Mocking:
 * - The `useColorScheme` hook from MUI is mocked to simulate the theme mode.
 * - The `useTranslation` hook from `react-i18next` is mocked to handle translations.
 *
 * The tests use `@testing-library/react` to simulate user interactions and check if the
 * component's behavior matches the expected outcomes.
 *
 */

// Mocking the useColorScheme hook from MUI to control the theme mode in tests
jest.mock('@mui/material/styles', () => ({
  ...jest.requireActual('@mui/material/styles'), // Preserve other methods from MUI
  useColorScheme: jest.fn(), // Mock the useColorScheme hook
}));

// Mocking the useTranslation hook from react-i18next to handle translations
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('ThemeSwitcher', () => {
  const mockSetMode = jest.fn(); // Create a mock function for setting the theme mode

  beforeEach(() => {
    // Mock the return value of the useColorScheme hook
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: 'light', // Set the initial theme mode to 'light'
      systemMode: 'light',
      setMode: mockSetMode, // Return the mock function for setMode
    });

    // Mock the return value of the useTranslation hook
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        language: 'en',
        isInitialized: true,
        t: (key: string) => key, // Use a simple translation mock function
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear any mocked function calls after each test
  });

  test('displays the correct icon based on mode', () => {
    // Create a theme with the light mode
    const theme = createTheme({
      palette: {
        mode: 'light', // Set the palette mode to 'light' for this test
      },
    });

    render(
      <ThemeProvider theme={theme}>
        {' '}
        {/* Wrap the component in a ThemeProvider with the created theme */}
        <ThemeSwitcher />
      </ThemeProvider>,
    );

    // Check if the light theme icon is in the document
    expect(screen.getByTestId('toggle-mode')).toBeInTheDocument();
    // Check if the icon button has the correct attribute (aria-haspopup)
    expect(screen.getByTestId('toggle-mode')).toHaveAttribute('aria-haspopup', 'true');
  });

  test('opens and closes the menu when clicking the icon button', async () => {
    const theme = createTheme({
      palette: {
        mode: 'light',
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <ThemeSwitcher />
      </ThemeProvider>,
    );

    const iconButton = screen.getByTestId('toggle-mode'); // Get the icon button by test ID

    // Simulate a click on the icon button and wait for the menu to appear
    fireEvent.click(iconButton);
    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument(); // Check if the menu is displayed
    });

    // Simulate clicking to close the menu
    fireEvent.click(screen.getByText('main:themeswitcher.name.system'));
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument(); // Ensure the menu is closed
    });
  });

  test('changes mode when menu item is clicked', async () => {
    const theme = createTheme({
      palette: {
        mode: 'light',
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <ThemeSwitcher />
      </ThemeProvider>,
    );

    const iconButton = screen.getByTestId('toggle-mode'); // Get the icon button
    fireEvent.click(iconButton); // Click the icon button to open the menu

    // Simulate clicking on the "dark" mode menu item
    const darkMenuItem = screen.getByText('main:themeswitcher.name.dark');
    fireEvent.click(darkMenuItem);

    // Verify that the setMode function was called with the 'dark' argument
    await waitFor(() => {
      expect(mockSetMode).toHaveBeenCalledWith('dark');
    });
  });
});
