import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  toast: {
    settings: {
      position: "topRight",
      timeout: 4000,
      closeOnClick: true,
      closeOnEscape: true,
      pauseOnHover: true,
      progressBar: true,
      transitionIn: "fadeInDown",
      transitionOut: "fadeOutUp",
      animateInside: true,
      drag: false,
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=AW-16772821022",
          async: true,
        },
        {
          type: "text/javascript",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16772821022');
          `,
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    // strategy: "prefix_except_default",
    defaultLocale: "ru",
    // detectBrowserLanguage: false,
    locales: [
      { code: "ru", iso: "ru-RU", name: "Русский", file: "ru.json" },
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "kk", iso: "kk-KK", name: "Қазақша", file: "kk.json" },
    ],
    langDir: "locales/",
  },

  modules: ["@nuxt/fonts", "@nuxtjs/i18n", "nuxt-swiper", "nuxt-toast"],

  plugins: [
    {
      src: "~/plugins/2gis-map.js",
      mode: "client",
    },
  ],
});
