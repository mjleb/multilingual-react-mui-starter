import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

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
