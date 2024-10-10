import ApiService from "~/api/core/ApiService";
import type { IMyChannel } from "~/store/myChannels/myChannels.types";
import type {
  IApiChannelsListItem,
  IChannelsRegistrationBody,
  IInitialChannelData,
  IGetAll,
  IFormat,
} from "./channels.types";

export default class ChannelsService extends ApiService {
  private readonly apiUrl: string;

  constructor() {
    super();
    this.apiUrl = "channels/";
  }

  async getFormat(): Promise<IFormat[]> {
    const fullUrl = "channels/format/all";
    return await this.$api(fullUrl, {
      method: "get",
    });
  }

  async register(data: IChannelsRegistrationBody) {
    return await this.$authApi(this.apiUrl + "registration", {
      method: "post",
      body: data,
    });
  }

  async update(data: IChannelsRegistrationBody) {
    return await this.$authApi(this.apiUrl + "update", {
      method: "post",
      body: data,
    });
  }

  async buy(slotId: number, dateIdx: number) {
    return await this.$authApi<{ message: string }>(this.apiUrl + "buy", {
      method: "post",
      body: {
        slotId,
        dateIdx,
      },
    });
  }

  async getAll(dates: Date[], url?: string): Promise<IGetAll[]> {
    const parsedDates = dates
      .map((item) => {
        const day = item.getDate();
        const month = item.getMonth() + 1;
        const year = item.getFullYear();

        return `${day}.${month}.${year}`;
      })
      .join(",");

    const fullUrl = url ? this.apiUrl + "all" + url : this.apiUrl + "all";
    return await this.$api<IGetAll[]>(fullUrl, {
      method: "get",
      params: {
        dates: parsedDates,
      },
    });
  }

  async getMy(): Promise<IMyChannel[]> {
    const data = await this.$authApi<IApiChannelsListItem[]>(
      this.apiUrl + "my",
      {
        method: "get",
        params: {
          page: 1,
          size: 100,
        },
      }
    );

    return data.map((item) => ({
      id: item.id,
      image: item.avatar,
      title: item.name,
      categoryId: item.categories[0],
      url: item.link,
      subscribers: item.subscribers,
      isActive: item.statusId === 3,
      dates: item.channelDates,
    }));
  }

  async check(channelName: string): Promise<IInitialChannelData> {
    return await this.$authApi(this.apiUrl + "check", {
      method: "post",
      body: JSON.stringify({ channelName }),
    });
  }
}
