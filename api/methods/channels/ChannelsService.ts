import ApiService from "~/api/core/ApiService";
import type { IMyChannel } from "~/store/myChannels/myChannels.types";
import {
  IApiChannelsListItem,
  IChannelsRegistrationBody,
  IInitialChannelData,
  IGetAll,
  IFormat, IGetAllResponse,
} from "./channels.types";
import type { IFilterValues } from "~/types/filters";

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

  async getAll(
    dates: Date[],
    filterValues?: IFilterValues,
    paginationQuery?: string,
    getQueryCategories?: string | null
  ): Promise<IGetAllResponse> {
    const parsedDates = dates
      .map((item) => {
        let incorrectDay = String(item.getDate());
        const day = incorrectDay.length === 1 ? `0${incorrectDay}` : incorrectDay;
        const month = item.getMonth() + 1;
        const year = item.getFullYear();
  
        return `${day}.${month}.${year}`;
      })
      .join(",");
  
    const keysAndValuesFilter = {
      priceMin: filterValues?.priceMin,
      priceMax: filterValues?.priceMax,
      dateMin: filterValues?.dateMin,
      dateMax: filterValues?.dateMax,
      intervalId: filterValues?.intervalId,
      subscribersMin: filterValues?.subscribersMin,
      subscribersMax: filterValues?.subscribersMax,
    };
  
    let filterQuery = "";
    Object.entries(keysAndValuesFilter).forEach(([key, value]) => {
      if (!value) return;
      filterQuery += `&${key}=${value}`;
    });
  
    const categoriesQuery = getQueryCategories ? `&${getQueryCategories}` : "";
    const fullUrl = `${this.apiUrl}all?dates=${parsedDates}${filterQuery}&${paginationQuery}${categoriesQuery}`;
  
    return await this.$api<IGetAllResponse>(fullUrl, {
      method: "get",
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
      conditionCheck: item.conditionCheck,
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

  async remove(channelId: number) {
    return await this.$authApi(this.apiUrl + "remove", {
      method: "post",
      body: JSON.stringify({ channelId }),
    });
  }
}
