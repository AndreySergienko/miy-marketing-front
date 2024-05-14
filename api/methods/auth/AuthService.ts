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
    return await this.$api(this.authUrl + 'login', {
      method: 'post',
      body: JSON.stringify(data)
    })
  }

  async registration(data: IRegistrationRequest): Promise<IRegistrationResponse> {
    return await this.$api(this.authUrl + 'registration', {
      method: 'post',
      body: JSON.stringify(data)
    })
  } 
}
