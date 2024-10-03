// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "on-developer.ru",
      meta: [
        {
          name: "description",
          content:
            "Платформа для продвижения TG-каналов. Платформа предлагаем уникальный бот, который позволяет делегировать ответственность за размещение и управление рекламой в вашем канале. Если вы ищите простой и удобный способ размещения рекламы в вашем telegram-канале, on-developer - это то, что вам нужно.  Эффективное продвижение - это просто!",
        },
        {
          name: "keywords",
          content: "on-developer, tg, telegram, канал, реклама",
        },
      ],
    },
  },
  components: {
    dirs: ["~/components", "~/controllers"],
  },
  experimental: {
    typedPages: true,
  },
  modules: ["@pinia/nuxt", "@vee-validate/nuxt", "@nuxt/image", "nuxt-icons"],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  css: ["~/assets/styles/main.scss"],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      baseUrlApi: process.env.NUXT_PUBLIC_BASE_URL_API || "",
    },
  },
  ignore: ["ecosystem.config.cjs"],
  devtools: { enabled: false },
  ssr: false,
});
