// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig ({
  modules: ['@pinia/nuxt', '@vee-validate/nuxt', "@nuxt/image", 'nuxt-icons'],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  css: ['~/assets/styles/main.scss'],
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      baseUrlApi: process.env.NUXT_PUBLIC_BASE_URL_API || '',
    }
  },
  ignore: [
    '/ecosystem.config.js'
  ],
  devtools: { enabled: false },
})
