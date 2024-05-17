export type TTypeAlert = 'success' | 'error';

export interface IAlert {
  isDelay?: boolean;
  message?: string;
  title: string;
  type: TTypeAlert;
}

export interface IAlertIdentify extends IAlert {
  id: string;
}
