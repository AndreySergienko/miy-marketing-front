import type {
  IChannelsListItem,
  IChannelsRegistrationBody,
  IInitialChannelData,
  IGetAll,
  IFormat,
} from '~/api/methods/channels/channels.types'
import ChannelsService from '~/api/methods/channels/ChannelsService'
import { useAlertStore } from '~/store/alert/alert.store'

export const useChannelStore = defineStore('global/channel', () => {
  const alertStore = useAlertStore()
  const channelsService = new ChannelsService()

  /** Список каналов **/
  const channels = ref<IChannelsListItem[]>([])
  const channelsAll = ref<IGetAll[]>([])
  const initialChannelData = ref<IInitialChannelData | null>(null)
  const isLoading = ref<boolean>(false)

  /** Формат */
const formatAll = ref<IFormat[]>([]);

/** Получение списка интервалов */
  async function getAllFormat() {
    try {
      formatAll.value = await channelsService.getFormat()
    } catch (e) {
      useShowError(e);
    }
  }

  /** Получение всего списка каналов **/
  async function getAll({
    url,
    isMounted,
  }: {
    url: string
    isMounted?: boolean
  }) {
    try {
      const channelList = await channelsService.getAll(url)
      if (isMounted) {
        channelsAll.value = channelList
      } else {
        channelsAll.value.push(...channelList)
      }
    } catch (e) {
      useShowError(e)
    }
  }

  /** Получить список каналов для текущего юзера **/
  async function getMy() {
    try {
      channels.value = await channelsService.getMy()
    } catch (e) {
      useShowError(e)
    }
  }

  /** Купить канал **/
  async function buy(slotId: number, dateIdx: number) {
    try {
      if (!dateIdx) return
      isLoading.value = true
      const response = await channelsService.buy(slotId, dateIdx)
      if (!response) return
      alertStore.show({ type: 'success', title: response.message })
    } catch (e) {
      useShowError(e)
    } finally {
      isLoading.value = false
    }
  }

  /** Проверить канал **/
  async function check(channelName: string) {
    try {
      const response = await channelsService.check(channelName)
      if (!response) return
      initialChannelData.value = response
      await navigateTo('/personal/location')
    } catch (e) {
      useShowError(e)
    }
  }

  /** Создать канал **/
  async function create(data: IChannelsRegistrationBody) {
    try {
      const response = await channelsService.register(data)
      if (!response) return
      await navigateTo('/personal/telegram')
    } catch (e) {
      useShowError(e)
    }
  }
  

  /** Обновить канал **/
  async function update() {}

  return {
    channels,
    channelsAll,
    check,
    initialChannelData,
    update,
    buy,
    create,
    getMy,
    getAll,
    formatAll,
    getAllFormat,
    isLoading,
  }
})
