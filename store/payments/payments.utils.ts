import {
  EPaymentsItemStatuses,
  type IPaymentsItem,
  type TPaymentsApiResponse,
} from "~/api/methods/payments/payments.types";

const STATUSES = {
  [EPaymentsItemStatuses.CREATE]: "Создан",
  [EPaymentsItemStatuses.AWAIT]: "Ожидание",
  [EPaymentsItemStatuses.PUBLIC]: "Доступен пользователям",
  [EPaymentsItemStatuses.FINISH]: "Рекламная интеграция выполнена",
  [EPaymentsItemStatuses.CANCEL]: "Не пройдена валидация",
  [EPaymentsItemStatuses.PROCESS]: "В очереди на выполнение",
};

export const transform = (data: TPaymentsApiResponse): IPaymentsItem[] => {
  const result: IPaymentsItem[] = [];

  for (const item of data) {
    result.push({
      price: item.price,
      datetime: item.datetime,
      name: item.channel.name,
      status: STATUSES[item.statusId as EPaymentsItemStatuses],
    });
  }

  return result;
};
