import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationEN from "./locales/en.json";
import translationTR from "./locales/tr.json";

const resources = {
  en: {
    common: translationEN,
  },
  tr: {
    common: translationTR,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "tr",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
  });

export default i18n;
