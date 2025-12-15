import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslations from './en.json';
import frTranslations from './fr.json';
import esTranslations from './es.json';
import arTranslations from './ar.json';
import krTranslations from './kr.json';

const resources = {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
    es: { translation: esTranslations },
    ar: { translation: arTranslations },
    kr: { translation: krTranslations },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
