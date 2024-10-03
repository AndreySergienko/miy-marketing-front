import { defineStore } from "pinia";
import UserService from "~/api/methods/user/UserService";
import type { IUser } from "./user.types";
import { TPermissionsScopesKeys } from "~/modules/permissions/types";
import type {
  IUserPasswordRequest,
  IUserRequest,
} from "~/api/methods/user/user.types";
import { useAlertStore } from "~/store/alert/alert.store";
import { useAuthStore } from "~/store/auth/auth.store";

export const useUserStore = defineStore("global/user", () => {
  const userService = new UserService();
  const alertStore = useAlertStore();
  const authStore = useAuthStore();
  const isLoading = ref<boolean>(false);

  /** Данные об активном юзере **/
  const user = ref<IUser | null>(null);

  /** Права пользоватлея **/
  const permissions = ref<
    Partial<Record<TPermissionsScopesKeys, TPermissionsScopesKeys>>
  >({});

  /** Получить юзера **/
  async function getMe() {
    try {
      const response = await userService.getMe();
      if (!response) {
        authStore.logout();
        return;
      }
      user.value = response;
      for (let i = 0; i < user.value.permissions.length; i++) {
        const permission = user.value.permissions[i];
        permissions.value[permission] = permission;
      }
    } catch (e) {
      useShowError(e);
    }
  }

  /** Обновить юзера **/
  async function updateUser(data: IUserRequest) {
    try {
      const response = await userService.updateUser(data);
      if (!response) return;
      alertStore.show({
        type: "success",
        title: response.message,
      });
      localStorage.setItem("userId", String(response.id));
    } catch (e) {
      useShowError(e);
    }
  }

  async function updateUserPassword(data: IUserPasswordRequest) {
    try {
      const response = await userService.updateUserPassword(data);
      if (!response) return;

      alertStore.show({
        type: "success",
        title: response.message,
      });
    } catch (e) {
      useShowError(e);
    }
  }

  return {
    permissions,
    updateUser,
    updateUserPassword,
    getMe,
    isLoading,
    user,
  };
});
