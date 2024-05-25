import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";

interface IAuthControllerExportData<LoginMethod, RegistrationMethod> {
    registrationData: IRegistrationRequest;
    loginData: ILoginRequest;
    sendLogin: LoginMethod;
    loginRules: object;
    registrationRules: object;
    sendRegistration: RegistrationMethod;
}

export interface IAuthControllerSlots<LoginMethod, RegistrationMethod> {
    (name: 'default', props: IAuthControllerExportData<LoginMethod, RegistrationMethod>): unknown
}
