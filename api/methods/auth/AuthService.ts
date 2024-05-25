import ApiService from "~/api/core/ApiService";
import type {
  ILoginRequest,
  ILoginResponse,
  IRegistrationRequest,
  IRegistrationResponse
} from "~/api/methods/auth/auth.types";

export default class AuthService extends ApiService {
  private readonly authUrl: string;
  constructor() {
    super();
    this.authUrl = 'auth/'
  }
  async login(data: ILoginRequest): Promise<ILoginResponse> {
    return await this.$api<ILoginResponse>(this.authUrl + 'login', {
      method: 'post',
      body: data
    })
  }

  async registration(data: IRegistrationRequest): Promise<IRegistrationResponse> {
    return await this.$api<IRegistrationResponse>(this.authUrl + 'registration', {
      method: 'post',
      body: data
    })
  }
}
