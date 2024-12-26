import { usePagesRoutes } from './routes';
import { useTranslation } from 'react-i18next';

export const Pages = () => {
  const pages = usePagesRoutes();
  const { i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return <>loading</>;
  }

  return <>{pages}</>;
};
