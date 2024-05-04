import type { ISuccessResponse } from "~/types/api.types";

export interface IProfileRequest {
  fio: string;
  inn: number | null;
  email: string;
}

export interface IProfileResponse extends ISuccessResponse {
  id: number;
}

export type TRequestMethods = 'delete' | 'put' | 'post' | 'get';

export interface IDataError {
}

export interface IServerError {
  data: IDataError;
  status: boolean;
}

export interface IDefaultError<T = IServerError> {
  data?: T;
}

export interface IConfigApiMethod<T> {
  // тело запроса
  body?: object;
  headers?: object;
  // преобразовать в camelCase
  isMapped?: boolean;
  // использовать текущий урл
  isTargetUrl?: boolean;
  // кастомный метод обработки ошибок
  manualErrorHandler?: <T = IDefaultError>(e: T) => T;
  // преобразовывать данные до отправки
  mapBeforeSend?: boolean;
  // прочие опции
  opts?: Parameters<typeof $fetch<T>>[1];
}