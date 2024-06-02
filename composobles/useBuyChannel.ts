import type {ISlot} from "~/api/methods/channels/channels.types";
import type {ISharedSelectOption} from "~/components/SharedSelect/SharedSelect.types";
import {convertUtcDateToTime} from "~/utils/date";

export function useBuyChannel() {
  const activeSlots = ref<ISlot[]>([])
  const slotId = ref<string>('')

  const setInfoChannel = (slots: ISlot[]) => {
    activeSlots.value = slots
  }

  const times = computed<ISharedSelectOption[]>(() => {
    return activeSlots.value.map((slot) => {
      return {
        title: String(convertUtcDateToTime(+slot.timestamp)),
        value: String(slot.id)

      }
    })
  })

  const clearInfoChannel = () => activeSlots.value = []

  return {
    activeSlots,
    slotId,
    setInfoChannel,
    times,
    clearInfoChannel
  }
}
