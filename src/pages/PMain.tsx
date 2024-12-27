import { useTranslation } from 'react-i18next';

const PMain: React.FC = () => {
  const { i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return <>loading</>;
  }
  return (
    <>
      <div>{i18n.t('main:message.welcome')}</div>
    </>
  );
};

export default PMain;
