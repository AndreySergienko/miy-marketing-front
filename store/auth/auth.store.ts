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

  const token = useCookie(TOKEN_NAME, {
    default() {
      return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bm5hbGVuQG1haWwucnUiLCJpZCI6MiwicGVybWlzc2lvbnMiOlt7ImlkIjoyLCJ2YWx1ZSI6IkNBTl9QVUJMSUNfQ0hBTk5FTCIsImRlc2NyaXB0aW9uIjoi0J_Rg9Cx0LvQuNC60LDRhtC40Y8g0LrQsNC90LDQu9CwIiwiVXNlclBlcm1pc3Npb24iOnsiaWQiOjUxLCJwZXJtaXNzaW9uSWQiOjIsInVzZXJJZCI6Mn19LHsiaWQiOjgsInZhbHVlIjoiQ0FOX0NIRUNLX0NIQU5ORUwiLCJkZXNjcmlwdGlvbiI6ItCf0YDQvtCy0LXRgNGP0YLRjCDQutCw0L3QsNC7INC90LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCIsIlVzZXJQZXJtaXNzaW9uIjp7ImlkIjo1MCwicGVybWlzc2lvbklkIjo4LCJ1c2VySWQiOjJ9fSx7ImlkIjo2LCJ2YWx1ZSI6IkNBTl9VU0VSX1VQREFURSIsImRlc2NyaXB0aW9uIjoi0J7QsdC90L7QstC40YLRjCDQtNCw0L3QvdGL0LUg0L4g0L_QvtC70YzQt9C-0LLQsNGC0LXQu9C1IiwiVXNlclBlcm1pc3Npb24iOnsiaWQiOjQ5LCJwZXJtaXNzaW9uSWQiOjYsInVzZXJJZCI6Mn19LHsiaWQiOjMsInZhbHVlIjoiQ0FOX1NFTkRfVkFMSURfTUVTU0FHRSIsImRlc2NyaXB0aW9uIjoi0J7RgtC_0YDQsNCy0LjRgtGMINC90LAg0LLQsNC70LjQtNCw0YbQuNGOINGB0L7QvtCx0YnQtdC90LjRjyIsIlVzZXJQZXJtaXNzaW9uIjp7ImlkIjo0OCwicGVybWlzc2lvbklkIjozLCJ1c2VySWQiOjJ9fSx7ImlkIjoxLCJ2YWx1ZSI6IkNBTl9CVVkiLCJkZXNjcmlwdGlvbiI6ItCf0L7QutGD0L_QutCwINGA0LXQutC70LDQvNGLIiwiVXNlclBlcm1pc3Npb24iOnsiaWQiOjQ3LCJwZXJtaXNzaW9uSWQiOjEsInVzZXJJZCI6Mn19XSwiaWF0IjoxNzMzNTAxMDA1LCJleHAiOjE3MzQxMDU4MDV9.RYXoEAf7uWYGO_psnpidBhCtF44m4l9k-pH5Syit3Wk'
    }
  });

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
