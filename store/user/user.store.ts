import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {IUser} from "./user.types";

export const useUserStore = defineStore('global/user', () => {
    /** Данные об активном юзере **/
    const user = ref<IUser>({})

    /** Получить юзера **/
    async function getUser() {}

    return {
        user,
        getUser
    }
});
