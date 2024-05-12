import {defineStore} from 'pinia';
import UserService from '~/api/methods/user/UserService';
import type { IUserRequest } from '~/api/methods/user/user.types';
import {IUser, TPermissions} from "./user.types";

const TOKEN_NAME = 'userToken'

export const useUserStore = defineStore('global/user', () => {
  const userService = new UserService();

  const token = useCookie(TOKEN_NAME, {
    secure: true
  })

  /** Данные об активном юзере **/
  const user = ref<IUser>({})

  /** Права пользоватлея **/
  const permissions = ref<Partial<TPermissions>>({})

  /** Получить юзера **/
  async function updateUser(data: IUserRequest) {
    try {
      const response = await userService.updateUser(data)
      console.log('Данные сохранены')
      if(!response) return;
      localStorage.setItem('userId', String(response.id))
    } catch (e) {
      console.log(e)
    }
  }

  return {
    permissions,
    token,
    updateUser,
    user
  }
})
