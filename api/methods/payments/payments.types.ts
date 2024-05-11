export interface IPaymentsApiItemChannel {
  name: string;
}

export interface IPaymentsApiItem {
  statusId: number;
  price: number;
  datetime: string;
  channel: IPaymentsApiItemChannel;
}

export type TPaymentsApiResponse = IPaymentsApiItem[];

export enum EPaymentsItemStatuses {
  CREATE = 1,
  AWAIT = 2,
  PUBLIC = 3,
  FINISH = 4,
  CANCEL = 5,
  PROCESS = 6,
}

export interface IPaymentsItem {
  status: string;
  price: number;
  datetime: string;
  name: string;
}
