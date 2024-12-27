import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import Box from '@mui/material/Box';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useColorScheme } from '@mui/material/styles';
import { useState } from 'react';
import { StyledThemeSwitcher } from '../../app/themeMUI';
import { useTranslation } from 'react-i18next';

/**
 * A component that switches between light, dark, and system color modes.
 * It displays an icon corresponding to the current theme and allows the user
 * to change the theme via a dropdown menu.
 *
 * This component uses Material UI's `useColorScheme` hook to determine the
 * current color mode and provides options to switch between light, dark, or system default mode.
 * The icon changes based on the selected theme and a menu is shown when the icon is clicked,
 * allowing the user to select the theme they want to apply.
 *
 * @example
 * return (
 *   <ThemeSwitcher />
 * )
 *
 * @param {IconButtonOwnProps} props - Props passed to the `IconButton` component (e.g., onClick, size).
 *
 * @returns {JSX.Element} A button that opens a menu to switch between themes and displays the corresponding icon.
 */

export default function ThemeSwitcher(props: IconButtonOwnProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { i18n } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMode = (targetMode: 'system' | 'light' | 'dark') => () => {
    setMode(targetMode);
    handleClose();
  };
  if (!mode) {
    return (
      <StyledThemeSwitcher>
        <Box data-screenshot="toggle-mode" />
      </StyledThemeSwitcher>
    );
  }
  const resolvedMode = (systemMode || mode) as 'light' | 'dark';
  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />,
  }[resolvedMode];
  return (
    <>
      <IconButton
        data-screenshot="toggle-mode"
        data-testid="toggle-mode"
        onClick={handleClick}
        disableRipple
        size="small"
        aria-controls={open ? 'color-scheme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        {...props}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: 'outlined',
            elevation: 0,
            sx: {
              my: '4px',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem selected={mode === 'system'} onClick={handleMode('system')}>
          {i18n.t('main:themeswitcher.name.system')}
        </MenuItem>
        <MenuItem selected={mode === 'light'} onClick={handleMode('light')}>
          {i18n.t('main:themeswitcher.name.light')}
        </MenuItem>
        <MenuItem selected={mode === 'dark'} onClick={handleMode('dark')}>
          {i18n.t('main:themeswitcher.name.dark')}
        </MenuItem>
      </Menu>
    </>
  );
}
