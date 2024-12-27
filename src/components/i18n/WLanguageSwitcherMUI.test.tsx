import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useTranslation } from 'react-i18next';
import WLanguageSwitcherMUI from './WLanguageSwitcherMUI';
/**
 * Tests for the WLanguageSwitcherMUI component.
 *
 * This test suite checks the functionality of the language switcher component,
 * which allows users to toggle between available languages and updates the
 * language preference in the application. The tests cover various scenarios
 * such as rendering the current language, changing the language, disabling
 * language buttons when i18n is not initialized, and highlighting the active
 * language in the menu.
 *
 * @group WLanguageSwitcherMUI
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

describe('WLanguageSwitcherMUI', () => {
  const mockChangeLanguage = jest.fn();

  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        language: 'en',
        isInitialized: true,
        changeLanguage: mockChangeLanguage,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the current language and opens the menu', () => {
    render(<WLanguageSwitcherMUI />);

    const button = screen.getByTestId('toggle-language');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('EN');

    fireEvent.click(button);
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems.length).toBe(2);
  });

  it('changes language when a menu item is clicked', () => {
    render(<WLanguageSwitcherMUI />);

    const button = screen.getByTestId('toggle-language');
    fireEvent.click(button);

    const serbianButton = screen.getByText('Српски');
    fireEvent.click(serbianButton);

    expect(mockChangeLanguage).toHaveBeenCalledWith('sr');
  });

  it('disables language buttons when i18n is not initialized', () => {
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        language: 'en',
        isInitialized: false,
        changeLanguage: mockChangeLanguage,
      },
    });

    render(<WLanguageSwitcherMUI />);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it('highlights the active language in the menu', () => {
    render(<WLanguageSwitcherMUI />);

    const button = screen.getByTestId('toggle-language');
    fireEvent.click(button);

    const activeMenuItem = screen.getByText('English');
    expect(activeMenuItem).toHaveClass('Mui-selected');
  });
});
