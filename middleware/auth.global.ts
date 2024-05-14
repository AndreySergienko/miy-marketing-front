import { useAuthStore } from "~/store/auth/auth.store";
import { useUserStore } from "~/store/user/user.store";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();

  if (!authStore.isAuth) return;

  const userStore = useUserStore();
  await userStore.getMe();
});
