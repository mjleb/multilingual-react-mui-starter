import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[700],
        },
        // ...other tokens
      },
    },
    dark: {
      palette: {
        primary: {
          light: blue[300],
          main: blue[500],
          dark: blue[700],
        },
        // ...other tokens
      },
    },
  },
  palette: {
    secondary: grey,
    primary: blue,
  },
});

/** LMain styles */
export const StyledLMainBox = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
  backgroundColor: 'background.paper',
};
export const StyledLMainContainer = {
  display: 'flex',
  flex: '1 0 auto',
  overflow: 'auto',
  justifyContent: 'center',
  pt: { xs: 14, sm: 20 },
  pb: { xs: 8, sm: 12 },
};

/** LMain CHeader styles */
export const StyledHeader = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: theme.shape.borderRadius + 8,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export const StyledHeaderAppBar = {
  boxShadow: 0,
  bgcolor: 'transparent',
  backgroundImage: 'none',
  mt: 'calc(var(--template-frame-height, 0px) + 28px)',
};

/** LMain CFooter styles */
export const StyledFooter = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  borderRadius: theme.shape.borderRadius + 8,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

/** ThemeSwitcher */
export const StyledThemeSwitcher = styled(Toolbar)(({ theme }) => ({
  verticalAlign: 'bottom',
  display: 'inline-flex',
  width: '2.25rem',
  height: '2.25rem',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid',
  borderColor: theme.palette.divider,
}));
