import type {
  IGetAll,
  IGetAllDate,
  IGetAllDateSlot,
} from "~/api/methods/channels/channels.types";
import type { ISharedSelectOption } from "~/components/SharedSelect/SharedSelect.types";

export function useBuyChannel() {
  const activeSlots = ref<IGetAllDateSlot[]>([]);
  const activeDays = ref<IGetAllDate[]>([]);

  const slotId = ref<string>("");
  const dateIdx = ref<string>("");

  const setInfoChannel = (channel: IGetAll, date: IGetAllDate) => {
    activeSlots.value = date.slots;
    activeDays.value = channel.channelDates;
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

  const clearInfoChannel = () => (activeSlots.value = []);

  return {
    dateIdx,
    activeSlots,
    slotId,
    setInfoChannel,
    times,
    days,
    clearInfoChannel,
  };
}
