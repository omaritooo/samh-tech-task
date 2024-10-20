// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n', '@nuxt/test-utils/module'],
  css: ['~/assets/css/main.css', '~/assets/css/inputs.css'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'ar', iso: 'ar-EG', dir: 'rtl', file: 'ar.json' },
    ],
    langDir: './translations/',
    defaultLocale: 'ar',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
