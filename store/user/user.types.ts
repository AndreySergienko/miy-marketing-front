import { PERMISSIONS_SCOPES } from "~/modules/permissions/permissions.scopes";

export interface IUser {
  id: number;
  fio: string;
  inn: number;
  email: string;
  card: string;
}
export type TPermissions = typeof PERMISSIONS_SCOPES;
