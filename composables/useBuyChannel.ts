import type {
  IGetAll,
  IGetAllDate,
  IGetAllDateSlot,
} from "~/api/methods/channels/channels.types";
import type { ISharedSelectOption } from "~/components/SharedSelect/SharedSelect.types";

export function useBuyChannel() {
  const activeSlots = ref<IGetAllDateSlot[]>([]);
  const activeDays = ref<IGetAllDate[]>([]);
  const activeChannel = ref<IGetAll | null>(null)

  const setInfoChannel = (channel: IGetAll) => {
    activeChannel.value = channel
  };

  const times = computed<ISharedSelectOption[]>(() => {
    return activeSlots.value.map((slot) => {
      return {
        title: slot.timestamp,
        value: String(slot.id),
      };
    });
  });

  const days = computed<ISharedSelectOption[]>(() => {
    return activeDays.value.map((day) => {
      return {
        title: day.date,
        value: String(day.id),
      };
    });
  });

  const clearInfoChannel = () => (activeChannel.value = null);

  return {
    activeSlots,
    setInfoChannel,
    times,
    days,
    clearInfoChannel,
    activeChannel,
  };
}
