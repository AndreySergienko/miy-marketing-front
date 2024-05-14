import {useAuthStore} from "~/store/auth/auth.store";

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();

  if (authStore.isAuth && to.meta.layout === 'authentication') return toPersonalProfile()
  if (!authStore.isAuth && !(to.meta.layout === 'authentication' || to.path === '/')) return navigateTo('/')
});
