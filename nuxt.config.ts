// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],

  primevue: {
    /* Opsi Konfigurasi PrimeVue */
    options: {
      ripple: true,
    },
    components: {
      // Impor hanya komponen yang dibutuhkan
      include: [
        "Menubar",
        "Button",
        "Avatar",
        "Panel",
        "Card",
        "Image",
        "Chip",
        "Breadcrumb",
      ],
    },
  },

  css: [
    // File CSS untuk tema dan ikon PrimeVue
    "primevue/resources/themes/aura-light-blue/theme.css",
    "primeicons/primeicons.css",
    "~/assets/css/main.css",
  ],
});
