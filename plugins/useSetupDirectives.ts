import type {NuxtApp} from "nuxt/app";
import directives from "~/directives";
export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    (directives || []).forEach(({ name, directive }) => {
        nuxtApp.vueApp.directive(name, directive);
    });
});