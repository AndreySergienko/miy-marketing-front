import {PERMISSIONS_SCOPES} from "~/modules/permissions/permissions.scopes";
import {TPermissions} from "~/store/user/user.types";

export type TPermissionsScopes = typeof PERMISSIONS_SCOPES;
export type TPermissionsScopesKeys = keyof TPermissions;
