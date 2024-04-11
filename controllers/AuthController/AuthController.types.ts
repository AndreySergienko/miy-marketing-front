import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";

export interface IAuthControllerExpose<LoginMethod, RegistrationMethod> {
    registrationData: Partial<IRegistrationRequest>;
    loginData: Partial<ILoginRequest>;
    sendLogin: LoginMethod;
    sendRegistration: RegistrationMethod;
}