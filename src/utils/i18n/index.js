import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import cn from './locales/cn/translation.json';
import en from './locales/en/translation.json';
import th from './locales/th/translation.json';
import vi from './locales/vi/translation.json';

/**  fall back 用的預設檔，切勿自行加字 */
const resources = {
  // en: { translation: en },
  // th: { translation: th },
  // vi: { translation: vi },
  // hi: { translation: en },
  // zh: { translation: cn },
  en: { translation: {} },
  th: { translation: {} },
  vi: { translation: {} },
  hi: { translation: {} },
  zh: { translation: {} },
  pt: { translation: {} },
  bd: { translation: {} },
};

i18n
  // .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    // backend: {
    //   loadPath: 'https://sprodm.uni247.xyz/international/locales/{{lng}}/{{ns}}.json',
    // },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
  });

export default i18n;
