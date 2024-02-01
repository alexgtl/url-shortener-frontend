// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      baseApiUrl: process.env.BASE_API_URL
    }
  }
})
