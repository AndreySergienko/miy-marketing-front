import { defineStore } from 'pinia';

const TOKEN_NAME = 'afToken'

export const useAuthStore = defineStore('global/auth', () => {
    /** Токен авторизации **/
    const token = useCookie(TOKEN_NAME, {
        secure: true
    })

    /** Авторизация пользователя **/
    async function login() {}

    /** Удаление сессии пользователя **/
    async function logout() {}

    /** Регистрация пользователя **/
    async function registration() {}

    return {
        token,
        login,
        logout,
        registration
    }
});
