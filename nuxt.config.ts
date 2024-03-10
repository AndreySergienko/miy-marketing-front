// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig ({
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true }
})
