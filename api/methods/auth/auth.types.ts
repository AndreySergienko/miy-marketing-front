import type {ISuccessResponse} from "~/types/api.types";

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}

export type TRequestMethods = 'delete' | 'put' | 'post' | 'get';

export interface IRegistrationRequest {
    email: string;
    inn: number | null;
    fio: string;
    password: string;
    uniqueBotId: string;
    isNotification: boolean;
}

export interface IRegistrationResponse extends ISuccessResponse {
    id: number;
}

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

//
// export type TApi = {
//     [key in TRequestMethods]: <T>(url: string, opts?: IConfigApiMethod<T>) => Promise<T>;
// };
