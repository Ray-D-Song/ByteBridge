// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],
  vite: {
  },
  css: ['~/assets/style/global.css'],
  routeRules: {
    '/': { redirect: '/HomePage' }
  }
})
