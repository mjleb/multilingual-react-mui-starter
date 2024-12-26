import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const PNotFound = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <h1>404</h1>
      <Link to="/">{i18n.t('main:pnotfound.a.name')}</Link>
    </>
  );
};
