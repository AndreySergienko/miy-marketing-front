// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig ({
  modules: ['@pinia/nuxt', '@vee-validate/nuxt', "@nuxt/image", 'nuxt-icons'],
  css: ['~/assets/styles/main.scss'],
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      baseUrlApi: '',
    }
  },
  devtools: { enabled: true },
})
