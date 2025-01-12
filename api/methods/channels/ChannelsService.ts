import ApiService from "~/api/core/ApiService";
import type { IMyChannel } from "~/store/myChannels/myChannels.types";
import type {
  IApiChannelsListItem,
  IChannelsRegistrationBody,
  IInitialChannelData,
  IGetAll,
  IFormat,
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
  ): Promise<IGetAll[]> {
    const parsedDates = dates
      .map((item) => {
        let incorrectDay = String(item.getDate());
        const day = incorrectDay.length === 1 ? `0${incorrectDay}` : incorrectDay;
        const month = item.getMonth() + 1;
        const year = item.getFullYear();

        return `${day}.${month}.${year}`;
      })
      .join(",");

    const params = new URLSearchParams();

    if (filterValues) {
      if (filterValues.price.from) {
        params.append("priceMin", filterValues.price.from);
      }
      if (filterValues.price.to) {
        params.append("priceMax", filterValues.price.to);
      }
      if (filterValues.time.from) {
        params.append("dateMin", String(filterValues.time.from));
      }
      if (filterValues.time.to) {
        params.append("dateMax", String(filterValues.time.to));
      }
      if (filterValues.interval) {
        params.append("intervalId", filterValues.interval);
      }
      if (filterValues.subscribers.from) {
        params.append("subscribersMin", filterValues.subscribers.from);
      }
      if (filterValues.subscribers.to) {
        params.append("subscribersMax", filterValues.subscribers.to);
      }
    }

    const fullPath = getQueryCategories
      ? `${paginationQuery}&${getQueryCategories}`
      : paginationQuery;

    const fullUrl = `${this.apiUrl}all?dates=${parsedDates}&${params.toString()}&${fullPath}`;

    return await this.$api<IGetAll[]>(fullUrl, {
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
