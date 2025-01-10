import ChannelsService from "~/api/methods/channels/ChannelsService";
import type { IMyChannel } from "./myChannels.types";
import type { ISlotsItem } from "~/components/TelegramEditSlots/TelegramEditSlots.types";
import type { IInitialChannelData } from "~/api/methods/channels/channels.types";

export const useMyChannelsStore = defineStore("global/my-channels", () => {
  const channelsService = new ChannelsService();

  const channels = ref<IMyChannel[]>([]);
  const selectedChannel = ref<IMyChannel | null>(null);
  const initialChannelData = ref<IInitialChannelData | null>(null);

  const fetch = async () => {
    try {
      const response = await channelsService.getMy();
      if (response) {
        channels.value = response;
      }
    } catch (e) {
      useShowError(e);
    }
  };

  async function check(name: string) {
    try {
      const response = await channelsService.check(name);
      if (!response) return;

      initialChannelData.value = response;
      await navigateTo("/personal/telegram/edit");
    } catch (e) {
      useShowError(e);
    }
  }

  async function create(
    mainData: IMyChannel,
    dates: Map<string, ISlotsItem[]>
  ) {
    try {
      const data = getCreationData(mainData, dates);

      const response = await channelsService.register(data);
      if (!response) return;
      await navigateTo("/personal/telegram");
    } catch (e) {
      useShowError(e);
    }
  }

  async function update(
    mainData: IMyChannel,
    dates: Map<string, ISlotsItem[]>
  ) {
    try {
      const data = getCreationData(mainData, dates);

      const response = await channelsService.update(data);
      if (!response) return;
      await navigateTo("/personal/telegram");
    } catch (e) {
      useShowError(e);
    }
  }

  /** Удалить канал **/
  async function remove(channelId: number) {
    try {
      if (!channelId) return useShowError({ title: 'Отсутствует id канала' })
      await channelsService.remove(channelId);
      channels.value = channels.value.filter(channel => channel.id !== channelId)
    } catch (e) {
      useShowError(e);
    }
  }

  const getCreationData = (
    mainData: IMyChannel,
    dates: Map<string, ISlotsItem[]>
  ) => {
    const channelDates = [];

    for (const [key, value] of dates) {
      channelDates.push({
        date: key,
        slots: value.map((slot) => ({
          time: slot.time,
          formatChannel: slot.intervalId!,
          price: slot.price!,
        })),
      });
    }

    return {
      id: mainData.id || undefined,
      name: mainData.title,
      link: mainData.url,
      conditionCheck: mainData.conditionCheck,
      categoriesId: [mainData.categoryId],
      channelDates,
    };
  };

  return {
    remove,
    channels,
    selectedChannel,
    initialChannelData,
    fetch,
    create,
    check,
    update,
  };
});
