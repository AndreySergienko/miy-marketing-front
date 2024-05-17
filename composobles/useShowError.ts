import {useAlertStore} from "~/store/alert/alert.store";
import type {TPossibleError} from "~/types/api.types";

export function useShowError(e: TPossibleError) {
  const alertStore = useAlertStore()

  // @ts-ignore
  if (e?.response?._data?.message) {
    alertStore.showError({
      // @ts-ignore
      title: e.response._data.message
    })
  } else {
    alertStore.showError({
      title: 'Что-то пошло не так'
    })
  }
}
