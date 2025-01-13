import type {
  IChannelsListItem,
  IInitialChannelData,
  IGetAll,
  IFormat,
} from "~/api/methods/channels/channels.types";
import ChannelsService from "~/api/methods/channels/ChannelsService";
import { useAlertStore } from "~/store/alert/alert.store";
import type { IFilterValues } from "~/types/filters";

export const useChannelStore = defineStore("global/channel", () => {
  const alertStore = useAlertStore();

  const channelsService = new ChannelsService();

  /** Список каналов **/
  const channels = ref<IChannelsListItem[]>([]);
  const channelsAll = ref<IGetAll[]>([]);
  const initialChannelData = ref<IInitialChannelData | null>(null);
  const isLoading = ref<boolean>(false);

  /** Формат */
  const formatAll = ref<IFormat[]>([]);

  /** Получение списка интервалов */
  async function getAllFormat() {
    try {
      const response = await channelsService.getFormat();
      if (response) {
        formatAll.value = response;
      }
    } catch (e) {
      useShowError(e);
    }
  }

  /** Получение всего списка каналов **/
  async function getAll({
    dates,
    filterValues,
    paginationQuery,
    getQueryCategories,
    isMounted,
  }: {
    dates: Date[];
    filterValues?: IFilterValues;
    paginationQuery?: string;
    getQueryCategories?: string | null;
    isMounted?: boolean;
  }) {
    try {
      const channelList = await channelsService.getAll(
        dates,
        filterValues,
        paginationQuery,
        getQueryCategories
      );
      if (isMounted) {
        channelsAll.value = channelList;
      } else {
        // Добавляем только уникальные элементы
        const existingChannelIds = new Set(channelsAll.value.map((channel) => channel.id));
        const uniqueChannels = channelList.filter(
          (channel) => !existingChannelIds.has(channel.id)
        );
        channelsAll.value.push(...uniqueChannels);
      }
    } catch (e) {
      useShowError(e);
    }
  }

  /** Купить канал **/
  async function buy(slotId: number, dateIdx: number) {
    try {
      isLoading.value = true;
      const response = await channelsService.buy(slotId, dateIdx);
      if (!response) return;
      alertStore.show({ type: "success", title: response.message });
    } catch (e) {
      useShowError(e);
    } finally {
      isLoading.value = false;
    }
  }

  /** Проверить канал **/
  async function check(channelName: string) {
    try {
      const response = await channelsService.check(channelName);
      if (!response) return;
      initialChannelData.value = response;
      await navigateTo("/personal/telegram/edit");
    } catch (e) {
      useShowError(e);
    }
  }

  return {
    channels,
    channelsAll,
    check,
    initialChannelData,
    buy,
    getAll,
    formatAll,
    getAllFormat,
    isLoading,
  };
});
