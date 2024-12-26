/**
 * Initializes i18next for multilingual support in a React application.
 * It is used for loading translations from the server and detecting the user's language.
 *
 * @module i18n
 * @see https://www.i18next.com/
 * @see https://react.i18next.com/
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import languages from '../../public/lang/index.json';

/**
 * Initializes and configures i18next.
 *
 *
 * This setup uses:
 * 1. Backend to load translations from a remote server.
 * 2. LanguageDetector to automatically detect the user's language based on their preferences (e.g., browser settings, localStorage).
 * 3. React integration through initReactI18next to manage language switching in React components.
 *
 * The configuration also includes settings for:
 * - Default language (`fallbackLng`), which is set to 'en' (English).
 * - Debug mode (`debug`), which is turned off.
 * - Synchronous or asynchronous loading of translations via `useSuspense` (set to false, meaning translations are loaded synchronously).
 * - Namespaces for translations (`ns`) such as 'main' and 'alert'.
 * - The path where translation files are stored (`loadPath`).
 * - Language detection order and cache storage (`localStorage`, `navigator`).
 *
 * @function
 * @returns {i18n}
 */

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/lang/{{lng}}/{{ns}}.json',
    },
    ns: ['main', 'alert'],
    defaultNS: 'main',
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export const availableLanguages = Object.values(languages);

export default i18n;
