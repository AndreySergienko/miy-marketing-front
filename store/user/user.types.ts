import { PERMISSIONS_SCOPES } from "~/modules/permissions/permissions.scopes";
import type {TPermissionsScopesKeys} from "~/modules/permissions/types";

export interface IUser {
  email: string;
  inn: number;
  fio: string;
  permissions: TPermissionsScopesKeys[];
  cardNumber?: string;
}
export type TPermissions = typeof PERMISSIONS_SCOPES;
