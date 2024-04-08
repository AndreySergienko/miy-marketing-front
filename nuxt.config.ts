// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig ({
  modules: ['@pinia/nuxt', '@vee-validate/nuxt', "@nuxt/image", 'nuxt-icons'],
  css: ['~/assets/styles/main.scss'],
  typescipt: {
    strict: true
  },
  devtools: { enabled: true },
})