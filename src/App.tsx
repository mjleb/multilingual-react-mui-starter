import { useTranslation } from 'react-i18next';
import WLanguageSwitcher from './components/i18n/WLanguageSwitcher';
import ErrorBoundary from './app/ErrorBoundary';
/**
 * The App component that renders a welcome message after the i18n initialization.
 * It displays "loading" until i18n is initialized and then shows the translated welcome message.
 *
 * @returns {JSX.Element} Returns JSX that either renders a loading message or the translated welcome message based on i18n initialization.
 */
function App() {
  const { i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return <>loading</>;
  }

  return (
    <>
      <ErrorBoundary>
        <div>
          <WLanguageSwitcher />
        </div>
        <div>{i18n.t('main:message.welcome')}</div>
      </ErrorBoundary>
    </>
  );
}

export default App;
