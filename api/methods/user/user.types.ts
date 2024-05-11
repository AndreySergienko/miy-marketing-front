import type { ISuccessResponse } from "~/types/api.types";

export interface IUserRequest {
  fio: string;
  inn: number | null;
  email: string;
  card: number | string;
}

export interface IUserResponse extends ISuccessResponse {
  id: number;
}