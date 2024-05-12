import {useUserStore} from "~/store/user/user.store";
import type {TPermissionsScopesKeys} from "~/modules/permissions/types";

export function useCheckScopes(scopes: TPermissionsScopesKeys[]): boolean {
  const userStore = useUserStore()
  return scopes.every((value) => userStore.permissions[value])
}
