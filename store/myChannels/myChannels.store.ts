import ChannelsService from "~/api/methods/channels/ChannelsService";
import type { IMyChannel } from "./myChannels.types";

export const useMyChannelsStore = defineStore("global/my-channels", () => {
  const channelsService = new ChannelsService();

  const channels = ref<IMyChannel[]>([]);
  const selectedChannel = ref<IMyChannel | null>(null);

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

  return {
    channels,
    selectedChannel,
    fetch,
  };
});
