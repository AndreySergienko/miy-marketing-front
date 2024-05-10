import ApiService from "~/api/core/ApiService";
import type {
  IUserRequest,
  IUserResponse
} from "~/api/methods/user/user.types";

export default class UserService extends ApiService {
  private readonly userURL: string;
  constructor() {
    super();
    this.userURL = 'user/'
  }
  async updateUser(data:IUserRequest): Promise<IUserResponse> {
    return await this.$api(this.userURL + 'update', {
      method: 'post',
      body: JSON.stringify(data)
    })
  }
}