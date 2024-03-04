// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  moduls: [
    ['@pinia/nuxt', {disableVuex: true}]
  ],
  devtools: { enabled: true }
})
