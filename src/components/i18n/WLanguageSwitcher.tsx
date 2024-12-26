import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../../app/i18n';

interface Country {
  name: string;
  code: string;
}

interface IMenuItem {
  id: string;
  label: string;
  className?: string;
}

/**
 * The `WLanguageSwitcher` component allows users to switch between available languages.
 * It displays the current language and provides buttons to change the language.
 * This component is integrated with the `i18next` module for language management.
 *
 * It fetches the current language from the `i18n` instance and shows the available languages as buttons.
 * The current language is highlighted, and when a user clicks a button, the language changes accordingly.
 *
 * @returns {JSX.Element} Returns JSX that displays the current language and a set of buttons for changing the language.
 *
 * @example
 * <WLanguageSwitcher />
 *
 * @see {@link https://www.i18next.com/} for more information about i18next.
 */
const WLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const getCurrentLanguageName = (languages: Country[], currentLanguageCode: string) => {
    let current = currentLanguageCode.split('-')[0];
    const language = languages.find((lang: Country) => lang.code === current);
    return language ? language.name : '-';
  };

  const items: IMenuItem[] = (availableLanguages as Country[]).map((language) => ({
    id: language.code,
    label: language.name,
    className: language.code === i18n.language.split('-')[0] ? 'active' : '',
  }));

  if (!i18n.isInitialized) {
    // Кнопки отображаются, но отключены
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
      <div>
        <b>{i18n.t('main:language')} </b>: {getCurrentLanguageName(availableLanguages as Country[], i18n.language)}
      </div>
      <div className="language__select">
        {items.map((language) => {
          return (
            <button
              key={language.id}
              disabled={!i18n.isInitialized}
              className={language.className}
              onClick={() => {
                i18n.changeLanguage(language.id);
              }}
            >
              {language.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default WLanguageSwitcher;
