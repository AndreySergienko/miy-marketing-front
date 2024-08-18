import type { ISlot } from '~/api/methods/channels/channels.types'
import type { ISharedSelectOption } from '~/components/SharedSelect/SharedSelect.types'
import { convertUtcDateToTime } from '~/utils/date'

export function useBuyChannel() {
  const activeSlots = ref<ISlot[]>([])
  const activeDays = ref<string[]>([])
  const slotId = ref<string>('')
  const dateIdx = ref<string>('')

  const setInfoChannel = (slots: ISlot[], days: string[]) => {
    activeSlots.value = slots
    activeDays.value = days
  }

  const times = computed<ISharedSelectOption[]>(() => {
    return activeSlots.value.map((slot) => {
      return {
        title: String(convertUtcDateToTime(+slot.timestamp)),
        value: String(slot.id),
      }
    })
  })

  const days = computed<ISharedSelectOption[]>(() => {
    return activeDays.value.map((day, idx) => {
      return {
        title: day,
        value: String(idx),
      }
    })
  })

  const clearInfoChannel = () => (activeSlots.value = [])

  return {
    dateIdx,
    activeSlots,
    slotId,
    setInfoChannel,
    times,
    days,
    clearInfoChannel,
  }
}
