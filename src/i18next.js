import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {
    translateEn,
    translateKr,
    translateSpa,
    translateCn,
    translateFr,
} from "./data";
import { getLanguage } from "./utilities/translate";

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: translateEn },
        kr: { translation: translateKr },
        spa: { translation: translateSpa },
        cn: { translation: translateCn },
        fr: { translation: translateFr },
    },
    lng: getLanguage(),
    fallbackLng: getLanguage(),
    interpolation: { escapeValue: false },
});

export default i18next;
