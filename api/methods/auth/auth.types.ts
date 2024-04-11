export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}

export interface IRegistrationRequest {
    email: string;
    inn: number;
    lastname: string;
    name: string;
    password: string;
    surname: string;
    uniqueBotId: string;
}

export interface IRegistrationResponse {}