import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useTranslation } from 'react-i18next';
import WLanguageSwitcher from './WLanguageSwitcher';
import ErrorBoundary from '../../app/ErrorBoundary';

import { availableLanguages } from '../../app/i18n';
/**
 * Tests for the WLanguageSwitcher component, which provides functionality
 * for switching between available languages in the application.
 *
 * The component uses the `useTranslation` hook from `react-i18next` to manage
 * the language state and the language switching logic. It also utilizes an
 * `ErrorBoundary` component to handle rendering errors.
 *
 * @description
 * The test suite contains the following tests:
 * - **renders the current language and available language buttons**: Verifies that the language switcher displays the current language and buttons for all available languages.
 * - **highlights the current language button**: Checks that the button for the current language has the "active" class applied.
 * - **calls changeLanguage when a different language is clicked**: Verifies that clicking a language button triggers the `changeLanguage` function with the correct language code.
 * - **disables buttons when i18n is not initialized**: Ensures that language buttons are disabled when the `i18n` initialization fails or is not complete.
 *
 * **Test environment**: Jest with jsdom
 * **Mocked modules**:
 * - `react-i18next`: Mocked to simulate the `useTranslation` hook and its behavior.
 * - `../../app/i18n`: Mocked to provide a list of available languages for testing.
 */

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('../../app/i18n', () => ({
  availableLanguages: [
    { name: 'English', code: 'en' },
    { name: 'Српски', code: 'sr' },
  ],
}));

describe('WLanguageSwitcher', () => {
  const mockChangeLanguage = jest.fn();

  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        language: 'en',
        isInitialized: true,
        changeLanguage: mockChangeLanguage,
        t: (key: string) => key,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the current language and available language buttons', () => {
    render(
      <ErrorBoundary fallback={<h1>Ошибка загрузки компонента</h1>}>
        <WLanguageSwitcher />
      </ErrorBoundary>,
    );

    expect(screen.getByText(/main:language/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /English/i })).toBeInTheDocument();
    availableLanguages.forEach((language) => {
      expect(screen.getByText(language.name)).toBeInTheDocument();
    });
  });

  it('highlights the current language button', () => {
    render(
      <ErrorBoundary>
        <WLanguageSwitcher />
      </ErrorBoundary>,
    );

    const activeButton = screen.getByRole('button', { name: /English/i });
    expect(activeButton).toHaveClass('active');
  });

  it('calls changeLanguage when a different language is clicked', () => {
    render(
      <ErrorBoundary>
        <WLanguageSwitcher />
      </ErrorBoundary>,
    );

    const serbianButton = screen.getByText(/Српски/i);
    fireEvent.click(serbianButton);

    expect(mockChangeLanguage).toHaveBeenCalledWith('sr');
  });

  it('disables buttons when i18n is not initialized', () => {
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        language: 'en',
        isInitialized: false,
        changeLanguage: mockChangeLanguage,
        t: (key: string) => key,
      },
    });

    render(
      <ErrorBoundary>
        <WLanguageSwitcher />
      </ErrorBoundary>,
    );

    availableLanguages.forEach((language) => {
      const button = screen.getByRole('button', { name: language.name });
      expect(button).toBeDisabled();
    });
  });
});
