import { PERMISSIONS_SCOPES } from "~/modules/permissions/permissions.scopes";
import type { TPermissionsScopesKeys } from "~/modules/permissions/types";

export enum UserDocumentVerificationStatus {
  PROCESS = "process",
  REJECT = "reject",
  ACCEPT = "accept",
}

export interface IUserBank {
  name: string;
  bik: string;
  correspondentAccount: string;
  currentAccount: string;
}

export interface IUserDocument {
  name: string;
  verificationStatus: UserDocumentVerificationStatus;
}

export interface IUser {
  email: string;
  inn: string;
  firstName: string;
  lastName: string;
  middleName: string;
  isNotification: boolean;
  permissions: TPermissionsScopesKeys[];
  bank?: IUserBank;
  document?: IUserDocument;
}
export type TPermissions = typeof PERMISSIONS_SCOPES;
