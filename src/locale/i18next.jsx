import i18n, { init } from "i18next"
import { initReactI18next } from 'react-i18next';
import Ru from './data/Ru.json'
import Uz from './data/Uz.json'
import En from './data/En.json'


const resources = {
    ru: {
        translation: Ru
    },
    uz: {
        translation: Uz
    },
    en: {
        translation: En
    },

}

i18n.use(initReactI18next)
init({
    resources,
    lng:"uz",
    keySeparator: false,
    detection: {
        order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
        caches: ['cookie']
    },

    interpolation: {
        escapeValue: false
    }
});
export default i18n;