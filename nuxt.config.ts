// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig ({
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})
