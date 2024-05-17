import { defineStore } from 'pinia';
import { IAlert, IAlertIdentify } from '~/store/alert/alert.types';
import {createUniqueId} from "~/utils/maths";

export const useAlertStore = defineStore('global/alert', () => {
  const DEFAULT_DELAY_ALERT = 3000;
  const alertList = ref<Record<string, IAlertIdentify>>({});

  const delayAnimation = computed(() => {
    return DEFAULT_DELAY_ALERT / 1000;
  });

  // Закрыть окно по idx
  const close = (id: string) => {
    if (alertList.value[id]) {
      delete alertList.value[id];
    }
  };

  // Добавить id каждому элементу
  const createAlert = (options: IAlert): IAlertIdentify => {
    return {
      ...options,
      id: createUniqueId(),
    };
  };

  // Скрыть алёрт по истечению времени
  const closeAfterDelay = (id: string) => {
    setTimeout(() => close(id), DEFAULT_DELAY_ALERT);
  };

  // Показать окно алёрта и скрыть через определённое/дефолтное время
  const show = (options: IAlert, isDelay?: boolean) => {
    const fullOptions = createAlert(options);
    const id = fullOptions.id;
    fullOptions.isDelay = isDelay || true;

    // Если оповещений вылезает больше 10 одновременно, ставить 11-е в низ списка
    if (Object.keys(alertList.value).length > 10) {
      alertList.value[Object.keys(alertList.value)[0]] = fullOptions;
    } else {
      alertList.value[id] = fullOptions;
    }

    if (fullOptions.isDelay) closeAfterDelay(id);
  };

  // Показать окно алёрта с ошибкой
  const showError = (options: Omit<IAlert, 'type'>, isDelay?: boolean) => {
    return show(
      {
        ...options,
        type: 'error',
      },
      isDelay,
    );
  };

  return {
    alertList,
    close,
    delayAnimation,
    show,
    showError,
  };
});
