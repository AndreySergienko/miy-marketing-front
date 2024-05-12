import type { IChannel } from "./channel.types";
import type { IChannelsRegistrationBody } from "~/api/methods/channels/channels.types";
import ChannelsService from "~/api/methods/channels/ChannelsService";

export const useChannelStore = defineStore("global/channel", () => {
  const channelsService = new ChannelsService();

  /** Список каналов **/
  const channels = ref<IChannel[]>([]);

  /** Получить список каналов **/
  async function getAll() {
    try {
      const data = await channelsService.getMy();
      channels.value = data as IChannel[];
    } catch {
      console.log("Не удалось получить список каналов");
    }
  }

  /** Купить канал **/
  async function buy() {}

  /** Создать канал **/
  async function create(data: IChannelsRegistrationBody) {
    try {
      await channelsService.register(data);
      await navigateTo("/personal/telegram");
    } catch {
      console.log("Не удалось создать канал");
    }
  }

  /** Обновить канал **/
  async function update() {}

  return {
    channels,
    update,
    buy,
    create,
    getAll,
  };
});
