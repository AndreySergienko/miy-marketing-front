import type { IFormat } from "~/api/methods/channels/channels.types";
import ChannelsService from "~/api/methods/channels/ChannelsService";

export const useFormatsStore = defineStore("channels/formats", () => {
  const channelsService = new ChannelsService();

  const formats = ref<IFormat[]>([]);

  async function fetch() {
    try {
      const response = await channelsService.getFormat();
      if (response) {
        formats.value = response;
      }
    } catch (e) {
      useShowError(e);
    }
  }

  return {
    formats,
    fetch,
  };
});
