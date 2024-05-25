import ApiService from "~/api/core/ApiService";
import type {
  IApiChannelsListItem,
  IChannelsListItem,
  IChannelsRegistrationBody,
  IInitialChannelData,
} from "./channels.types";
import { API_ITEM_TYPES } from "~/components/ProfileChannelsItem/ProfileChannelsItem.types";

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

  async getMy(): Promise<IChannelsListItem[]> {
    const data = await this.$authApi<IApiChannelsListItem[]>(
      this.apiUrl + "my"
    );

    return data.map((item) => ({
      id: item.id,
      avatar: item.avatar,
      description: item.description,
      categories: item.categories,
      name: item.name,
      link: item.link,
      status:
        API_ITEM_TYPES[item.statusId as keyof typeof API_ITEM_TYPES] || "",
      conditionCheck: item.conditionCheck,
      day: new Date(+item.day),
      formatChannelId: item.formatChannelId,
      price: item.price,
      subscribers: item.subscribers,
    }));
  }

  async check(channelName: string): Promise<IInitialChannelData> {
    return await this.$authApi(this.apiUrl + "check", {
      method: "post",
      body: JSON.stringify({ channelName }),
    });
  }
}
