import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../../app/i18n';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/LanguageRounded';
import Button from '@mui/material/Button';
import { useState } from 'react';

/**
 * The `WLanguageSwitcherMUI` component provides a Material-UI-based dropdown menu for switching languages.
 * It displays the current language as a button, and when clicked, it shows a menu with available language options.
 * Users can select a language, and the application will switch to the selected language using the `i18n` library.
 *
 * Features:
 * - Displays the current language code in uppercase (e.g., "EN", "FR").
 * - Shows a dropdown menu with all available languages.
 * - Changes the language dynamically using `i18n.changeLanguage`.
 * - Uses Material-UI components like `Button` and `Menu` for styling and functionality.
 *
 * Props:
 * - Accepts `IconButtonOwnProps` for additional customization of the button if needed.
 *
 * @param {IconButtonOwnProps} props - Optional properties for customizing the button.
 * @returns {JSX.Element} A Material-UI button and dropdown menu for language selection.
 *
 * @example
 * <WLanguageSwitcherMUI />
 *
 * @see {@link https://mui.com/} for Material-UI documentation.
 * @see {@link https://www.i18next.com/} for i18next documentation.
 */

interface Country {
  name: string;
  code: string;
}

interface IMenuItem {
  id: string;
  label: string;
  className?: string;
}

const WLanguageSwitcherMUI = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCurrentLanguageName = () => {
    const languages: Country[] = availableLanguages;
    const currentLanguageCode: string = i18n.language;

    let current = currentLanguageCode.split('-')[0];
    const language = languages.find((lang: Country) => lang.code === current);
    return language ? language.code.toUpperCase() : '-';
  };

  const items: IMenuItem[] = (availableLanguages as Country[]).map((language) => ({
    id: language.code,
    label: language.name,
    className: language.code === i18n.language.split('-')[0] ? 'active' : '',
  }));

  if (!i18n.isInitialized) {
    // Buttons are displayed but disabled
    return (
      <div>
        {items.map((lang) => (
          <button key={lang.id} disabled>
            {lang.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <>
      {/*<IconButton
          data-testid="toggle-language"
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          {...props}
        >
          <LanguageIcon />{' '}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {getCurrentLanguageName()}
          </Box>
        </IconButton> */}
      <Button
        variant="text"
        size="small"
        color="inherit"
        onClick={handleClick}
        data-testid="toggle-language"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <LanguageIcon sx={{ marginRight: '3px' }} /> {getCurrentLanguageName()}
      </Button>

      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {items.map((language) => (
          <MenuItem
            key={language.id}
            selected={i18n.language.split('-')[0] === language.id}
            onClick={() => {
              i18n.changeLanguage(language.id);
            }}
          >
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default WLanguageSwitcherMUI;
