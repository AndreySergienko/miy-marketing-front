import {Form, Field, ErrorMessage} from 'vee-validate';
import type {NuxtApp} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.vueApp.component('VForm', Form);
  nuxtApp.vueApp.component('VField', Field);
  nuxtApp.vueApp.component('VErrorMessage', ErrorMessage);
});