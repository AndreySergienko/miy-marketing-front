import ApiService from "~/api/core/ApiService";
import type { IChannelsRegistrationBody } from "./channels.types";

export default class ChannelsService extends ApiService {
  private readonly apiUrl: string;

  constructor() {
    super();
    this.apiUrl = "channels/";
  }

  async register(data: IChannelsRegistrationBody) {
    return await this.$authApi(this.apiUrl + "registration", {
      method: "post",
      body: data,
    });
  }

  async getMy() {
    return await this.$authApi<unknown[]>(this.apiUrl + "my");
  }

  async check(channelName: string) {
    return await this.$authApi(this.apiUrl + "check", {
      method: "post",
      body: JSON.stringify({ channelName }),
    });
  }
}
