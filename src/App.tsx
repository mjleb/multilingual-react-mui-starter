import { theme } from './app/themeMUI';
import { Pages } from './pages';
import { ThemeProvider } from '@mui/material/styles';
/**
 * The App component that renders a welcome message after the i18n initialization.
 * It displays "loading" until i18n is initialized and then shows the translated welcome message.
 *
 * @returns {JSX.Element} Returns JSX that either renders a loading message or the translated welcome message based on i18n initialization.
 */
function App() {
  return (
    <>
      <ThemeProvider theme={theme} noSsr defaultMode="dark">
        <Pages />
      </ThemeProvider>
    </>
  );
}

export default App;
