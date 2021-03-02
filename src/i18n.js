import Vue from "vue";
import VueI18n from "vue-i18n";

import enUS from "./locales/en-US.json";
import deDE from "./locales/de-DE.json";

Vue.use(VueI18n);

const messages = {
  "en-US": enUS,
  "de-DE": deDE,
};

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en-US",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en-US",
  messages,
});
