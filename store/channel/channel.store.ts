import type {
  IChannelsListItem,
  IChannelsRegistrationBody,
  IInitialChannelData,
  IGetAll,
} from "~/api/methods/channels/channels.types";
import ChannelsService from "~/api/methods/channels/ChannelsService";
import {useShowError} from "~/composobles/useShowError";

export const useChannelStore = defineStore("global/channel", () => {
  const channelsService = new ChannelsService();

  /** Список каналов **/
  const channels = ref<IChannelsListItem[]>([]);
  const channelsAll = ref<IGetAll[]>([]);
  const initialChannelData = ref<IInitialChannelData | null>(null);

  /** Получение всего списка каналов **/
  async function getAll(url?: string) {
    try {
      const channelList = await channelsService.getAll(url);
      channelsAll.value.push(...channelList)
    } catch (e) {
      useShowError(e)
    }
  }

  /** Получить список каналов для текущего юзера **/
  async function getMy() {
    try {
      channels.value = await channelsService.getMy();
    } catch (e) {
      useShowError(e)
    }
  }

  /** Купить канал **/
  async function buy(slotId: number) {
    try {
      const response = await channelsService.buy(slotId)
      console.log(response)
    } catch (e) {
      useShowError(e)
    }
  }

  /** Проверить канал **/
  async function check(channelName: string) {
    try {
      const response = await channelsService.check(channelName);
      if (!response) return;
      initialChannelData.value = response
      await navigateTo("/personal/location");
    } catch (e) {
      useShowError(e)
    }
  }

  /** Создать канал **/
  async function create(data: IChannelsRegistrationBody) {
    try {
      const response = await channelsService.register(data);
      if (!response) return;
      await navigateTo("/personal/telegram");
    } catch (e) {
      useShowError(e)
    }
  }

  /** Обновить канал **/
  async function update() {}

  return {
    channels,
    channelsAll,
    check,
    initialChannelData,
    update,
    buy,
    create,
    getMy,
    getAll,
  };
});
