import { defineStore } from 'pinia';
import AuthService from "~/api/methods/auth/AuthService";
import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";

const TOKEN_NAME = 'afToken'

export const useAuthStore = defineStore('global/auth', () => {
    const authService = new AuthService();

    /** Токен авторизации **/
    const token = useCookie(TOKEN_NAME, {
        secure: true
    })

    /** Авторизация пользователя **/
    async function login(data: ILoginRequest) {
        try {
            const res= await authService.login(data)
            if (res) token.value = res.token
        } catch (e) {
            console.log(e)
        }
    }

    /** Удаление сессии пользователя **/
    async function logout() {}

    /** Регистрация пользователя **/
    async function registration(data: IRegistrationRequest) {
        try {
            const response = await authService.registration(data)
            if (!response) return;
            localStorage.setItem('userId', String(response.id))
            // Добавить алёрт, что юзер успешно добавлен
        } catch (e) {
            console.log(e)
        }
    }

    return {
        token,
        login,
        logout,
        registration
    }
});
