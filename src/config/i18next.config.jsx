import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import esMainBanner from '../locales/es/mainbanner.json';
import enMainBanner from '../locales/en/mainbanner.json';
import esContact from '../locales/es/contact.json';
import enContact from '../locales/en/contact.json';
import esNavBar from '../locales/es/navbar.json';
import enNavBar from '../locales/en/navbar.json';
import esProject from '../locales/es/project.json';
import enProject from '../locales/en/project.json';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    resources: {
      es: {
        mainbanner: esMainBanner,
        contact: esContact,
        navbar: esNavBar,
        project: esProject
      },
      en: {
        mainbanner: enMainBanner,
        contact: enContact,
        navbar: enNavBar,
        project: enProject
      },
    },
  });

export default i18n;