import { defineStore } from 'pinia';
import AuthService from "~/api/methods/auth/AuthService";
import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";
import {toPersonalProfile} from "~/utils/links";
import {useAlertStore} from "~/store/alert/alert.store";

export const TOKEN_NAME = 'afToken'

export const useAuthStore = defineStore('global/auth', () => {
    const authService = new AuthService();
    const alertStore = useAlertStore()
    /** Токен авторизации **/
    const token = useCookie(TOKEN_NAME, {
        secure: true
    })

  /** Проверка на наличие токена **/
  const isAuth = computed<boolean>(() => !!token.value)

  const errors = ref({})

    /** Авторизация пользователя **/
    async function login(data: ILoginRequest) {
        try {
            const res= await authService.login(data)
            if (!res) return;
          token.value = res.token
          toPersonalProfile()
        } catch (e) {
          if (e.response._data.message) {
            alertStore.showError({
              title: e.response._data.message
            })
            return;
          }

          if (Array.isArray(e.response._data)) {
            for (let i = 0; i < e.response._data.length; i++) {
              const [nameError, value] = Object.values(e.response._data[i])
              errors[nameError] = value[0];
            }
            return;
          }
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
          if (e.response._data.message) {
            alertStore.showError({
              title: e.response._data.message
            })
            return;
          }
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
