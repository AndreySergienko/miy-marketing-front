import { defineStore } from 'pinia';
import AuthService from "~/api/methods/auth/AuthService";
import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";
import {toPersonalProfile} from "~/utils/links";

export const TOKEN_NAME = 'afToken'

export const useAuthStore = defineStore('global/auth', () => {
    const authService = new AuthService();

    /** Токен авторизации **/
    const token = useCookie(TOKEN_NAME, {
        secure: true
    })

  /** Проверка на наличие токена **/
  const isAuth = computed<boolean>(() => !!token.value)

    /** Авторизация пользователя **/
    async function login(data: ILoginRequest) {
        try {
            const res= await authService.login(data)
            if (!res) return;
          token.value = res.token
          toPersonalProfile()
        } catch (e) {
          console.log(e)
        }
    }

    /** Удаление сессии пользователя **/
    async function logout() {
      token.value = ''
      const route = useRoute()
      if (route.meta.layout !== 'authentication' || route.path !== '/') return navigateTo('/')
    }

    /** Регистрация пользователя **/
    async function registration(data: IRegistrationRequest, isShowGratitude: Ref<boolean>) {
        try {
            const response = await authService.registration(data)
            if (!response) return;
            localStorage.setItem('userId', String(response.id))
            isShowGratitude.value = true
        } catch (e) {
            console.log(e)
        }
    }

    return {
        isAuth,
        token,
        login,
        logout,
        registration
    }
});
