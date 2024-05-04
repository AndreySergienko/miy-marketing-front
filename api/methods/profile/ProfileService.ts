import ApiService from "~/api/core/ApiService";
import type {
  IProfileRequest,
  IProfileResponse
} from "~/api/methods/profile/profile.types";

export default class ProfileService extends ApiService {
  private readonly profileURL: string;
  constructor() {
    super();
    this.profileURL = 'personal/'
  }
  async profile(data:IProfileRequest): Promise<IProfileResponse> {
    return await this.$api(this.profileURL + 'profile', {
      method: 'post',
      body: JSON.stringify(data)
    })
  }
}