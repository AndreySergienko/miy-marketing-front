import type {
  IChannelsListItem,
  IChannelsRegistrationBody,
} from "~/api/methods/channels/channels.types";
import ChannelsService from "~/api/methods/channels/ChannelsService";

export const useChannelStore = defineStore("global/channel", () => {
  const channelsService = new ChannelsService();

  /** Список каналов **/
  const channels = ref<IChannelsListItem[]>([]);

  /** Получить список каналов **/
  async function getAll() {
    try {
      channels.value = await channelsService.getMy();
    } catch {
      console.log("Не удалось получить список каналов");
    }
  }

  /** Купить канал **/
  async function buy() {}

  /** Проверить канал **/
  async function check(channelName: string) {
    try {
      await channelsService.check(channelName);
      await navigateTo("/personal/location");
    } catch {
      console.log("Не удалось проверить канал");
    }
  }

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
    check,
    update,
    buy,
    create,
    getAll,
  };
});
