import type { ISuccessResponse } from "~/types/api.types";
import type {IUser} from "~/store/user/user.types";

export interface IUserResponse extends ISuccessResponse {
  id: number;
}
export interface IUserRequest extends Omit<IUser, 'permissions'> {
  isNotification: boolean;
}
export type TKeysIUserRequest = keyof IUserRequest;
