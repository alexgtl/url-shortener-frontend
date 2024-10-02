// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/scss/main.scss'],

  app: {
    baseURL: '/',
    head: {
      link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }]
    }
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      baseApiUrl: process.env.BASE_API_URL
    }
  },

  compatibilityDate: '2024-07-27'
})
