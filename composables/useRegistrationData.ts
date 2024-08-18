import { useAlertStore } from '~/store/alert/alert.store'
import type { INewChannel } from '~/store/channel/channel.types'

export function useRegistrationData() {
  const alertStore = useAlertStore()

  const newChannel = reactive<INewChannel>({
    categoriesId: [],
    description: '',
    link: '',
    name: '',
    slots: [],
    days: [],
    price: '',
    formatChannel: 0,
    conditionCheck: '',
  })

  const addDate = (date: Date) => {
    if (!newChannel.days) return
    const transformDayWithoutTime = date.setHours(0, 0, 0, 0)
    const index = newChannel.days.findIndex(
      (el) => +el === transformDayWithoutTime,
    )
    if (index !== -1) {
      newChannel.days.splice(index, 1)
    } else {
      if (newChannel.days.length > 6) {
        alertStore.showError({
          title: 'Выбрано слишком много дат, максимальное допустимое кол-во 7',
        })
        return
      }
      newChannel.days.push(new Date(transformDayWithoutTime))
    }
  }

  const totalPrice = computed(() => {
    const price = Number(newChannel.price);
    return Math.floor(price * 1.15)
  });

  const formattedPrice = computed(() => {
    const currencyFormatter = new Intl.NumberFormat('ru-RU', {
        style: "currency",
        currency: 'RUB',
    });
    return currencyFormatter.format(totalPrice.value);
});

  const createApiData = () => {
    return {
      categoriesId: newChannel.categoriesId,
      description: newChannel.description,
      link: newChannel.link,
      name: newChannel.name,
      days: newChannel.days?.map((day) => String(+day)),
      slots: newChannel.slots,
      price: totalPrice.value,
      formatChannel: newChannel.formatChannel,
      conditionCheck: newChannel.conditionCheck,
    }
  }

  return { createApiData, addDate, newChannel, formattedPrice }
}
