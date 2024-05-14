import ApiService from "~/api/core/ApiService";
import type {
  IUserRequest,
  IUserResponse,
} from "~/api/methods/user/user.types";
import type { IUser } from "~/store/user/user.types";

export default class UserService extends ApiService {
  private readonly userURL: string;
  constructor() {
    super();
    this.userURL = "user/";
  }

  async getMe(): Promise<IUser> {
    return await this.$authApi(this.userURL + "me");
  }

  async updateUser(data: IUserRequest): Promise<IUserResponse> {
    return await this.$authApi(this.userURL + "update", {
      method: "put",
      body: JSON.stringify(data),
    });
  }
}
