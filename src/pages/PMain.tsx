import { useTranslation } from 'react-i18next';
import WLanguageSwitcher from '../components/i18n/WLanguageSwitcher';

const PMain: React.FC = () => {
  const { i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return <>loading</>;
  }
  return (
    <>
      <div>
        <WLanguageSwitcher />
      </div>
      <div>{i18n.t('main:message.welcome')}</div>
    </>
  );
};

export default PMain;
