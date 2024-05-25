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
  // app: {
  //   head: {
  //     meta: [
  //       {
  //         content: 'upgrade-insecure-requests',
  //         "http-equiv": 'Content-Security-Policy'
  //       }
  //     ]
  //   }
  // },
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
