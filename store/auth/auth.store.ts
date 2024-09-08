import { defineStore } from "pinia";
import AuthService from "~/api/methods/auth/AuthService";
import type {
  ILoginRequest,
  IRegistrationRequest,
} from "~/api/methods/auth/auth.types";
import { toPersonalProfile } from "~/utils/links";
import { TPossibleError } from "~/types/api.types";

export const TOKEN_NAME = "afToken";

export const useAuthStore = defineStore("global/auth", () => {
  const authService = new AuthService();

  const token = useCookie(TOKEN_NAME);

  const isLoading = ref(false);

  const isAuth = computed(() => token.value);

  /** Авторизация пользователя **/
  async function login(data: ILoginRequest) {
    try {
      isLoading.value = true;
      const res = await authService.login(data);
      if (!res) return;
      token.value = res.token;

      toPersonalProfile();
    } catch (e: TPossibleError) {
      useShowError(e);
    } finally {
      isLoading.value = false;
    }
  }

  /** Удаление сессии пользователя **/
  function logout() {
    token.value = "";
    const route = useRoute();
    if (route.meta.layout !== "authentication" || route.path !== "/")
      return navigateTo("/");
  }

  /** Регистрация пользователя **/
  async function registration(data: IRegistrationRequest) {
    try {
      isLoading.value = true;
      const response = await authService.registration(data);
      if (!response) return false;

      localStorage.setItem("userId", String(response.id));
      return true;
    } catch (e: TPossibleError) {
      useShowError(e);
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    isAuth,
    token,
    login,
    logout,
    registration,
  };
});
