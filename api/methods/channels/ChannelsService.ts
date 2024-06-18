import ApiService from '~/api/core/ApiService'
import type {
  IApiChannelsListItem,
  IChannelsListItem,
  IChannelsRegistrationBody,
  IInitialChannelData,
  IGetAll,
  IFormat,
} from './channels.types'
import { API_ITEM_TYPES } from '~/components/ProfileChannelsItem/ProfileChannelsItem.types'

export default class ChannelsService extends ApiService {
  private readonly apiUrl: string

  constructor() {
    super()
    this.apiUrl = 'channels/'
  }

  async getFormat(): Promise<IFormat> {
     const fullUrl ='channels/format/all'
     return await this.$api(fullUrl, {
      method: 'get',
     })
  }

  async register(data: IChannelsRegistrationBody) {
    return await this.$authApi(this.apiUrl + 'registration', {
      method: 'post',
      body: data,
    })
  }

  async buy(slotId: number, dateIdx: number) {
    return await this.$authApi<{ message: string }>(this.apiUrl + 'buy', {
      method: 'post',
      body: {
        slotId,
        dateIdx,
      },
    })
  }

  async getAll(url?: string): Promise<IGetAll[]> {
    const fullUrl = url ? this.apiUrl + 'all' + url : this.apiUrl + 'all'
    return await this.$api<IGetAll[]>(fullUrl, {
      method: 'get',
    })
  }

  async getMy(): Promise<IChannelsListItem[]> {
    const data = await this.$authApi<IApiChannelsListItem[]>(
      this.apiUrl + 'my',
      {
        method: 'get',
      },
    )

    return data.map((item) => ({
      id: item.id,
      slots: item.slots,
      avatar: item.avatar,
      description: item.description,
      categories: item.categories,
      name: item.name,
      link: item.link,
      status:
        API_ITEM_TYPES[item.statusId as keyof typeof API_ITEM_TYPES] || '',
      conditionCheck: item.conditionCheck,
      days: item.days,
      formatChannelId: item.formatChannelId,
      price: item.price,
      subscribers: item.subscribers,
    }))
  }

  async check(channelName: string): Promise<IInitialChannelData> {
    return await this.$authApi(this.apiUrl + 'check', {
      method: 'post',
      body: JSON.stringify({ channelName }),
    })
  }
}
