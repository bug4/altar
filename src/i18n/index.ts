import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ICU from 'i18next-icu';
import 'intl-pluralrules';

import en from './translations/en';
import ro from './translations/ro';
import ru from './translations/ru';

export const LANGUAGES = {
  en: { nativeName: 'English' },
  ro: { nativeName: 'Română' },
  ru: { nativeName: 'Русский' },
};

export const getStoredLanguage = async () => {
  try {
    return await AsyncStorage.getItem('userLanguage') || 'en';
  } catch {
    return 'en';
  }
};

i18n
  .use(ICU)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export { LANGUAGES };
export default i18n;