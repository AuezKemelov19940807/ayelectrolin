import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    strategy: "prefix", // теперь префиксы у всех языков
    defaultLocale: "ru",
    locales: [
      { code: "ru", iso: "ru-RU", name: "Русский", file: "ru.json" },
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "kk", iso: "kk-KK", name: "Қазақша", file: "kk.json" },
    ],
    langDir: "locales/",
    // lazy: true,
  },

  // i18n: {
  //   locales: [
  //     { code: "en", iso: "en-US", name: "English", file: "en.json" },
  //     { code: "ru", iso: "ru-RU", name: "Русский", file: "ru.json" },
  //     { code: "kk", iso: "kk-KK", name: "Қазақша", file: "kk.json" },
  //   ],
  //   defaultLocale: "ru",

  //   strategy: "prefix",
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "i18n_redirected",
  //     alwaysRedirect: true,
  //     fallbackLocale: "ru",
  //   },
  //   // Ensure this points to the correct file or object
  // },

  modules: ["@nuxt/fonts", "@nuxtjs/i18n", "nuxt-swiper"],
});