import type { IMyChannelDate } from "~/store/myChannels/myChannels.types";
import type { IFormat } from "~/api/methods/channels/channels.types";

export function useDateFormatter(formats: Ref<IFormat[]>) {
  const getFormattedDates = computed(() => (dates: IMyChannelDate[]) => {
    const formattedDates = dates.map((date) => {
      const { slots } = date;

      const formattedSlots = slots.map((slot) => {
        const interval = formats.value.find(
          (format: IFormat) => format.id === slot.formatChannelId
        );
        const { timestamp, price, id } = slot;

        return {
          id,
          time: timestamp,
          price,
          interval: interval?.value
        };
      });

      return {
        ...date,
        slots: formattedSlots,
      };
    });

    return formattedDates;
  });

  return {
    getFormattedDates,
  };
}
