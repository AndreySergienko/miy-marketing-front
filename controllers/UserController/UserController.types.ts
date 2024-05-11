import type { IUserRequest } from "~/api/methods/user/user.types";

interface IUserControllerExportData<UserMethod> {
  userData: IUserRequest;
  userRules: object;
  sendUser: UserMethod;
}

export interface IUserControllerSlots<UserMethod> {
  (name: 'default', props: IUserControllerExportData<UserMethod>): unknown
}