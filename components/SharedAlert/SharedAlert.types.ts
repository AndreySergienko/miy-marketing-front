import type {IAlertIdentify} from "~/store/alert/alert.types";

export interface ISharedAlertProps extends IAlertIdentify {
  delay: number;
}

export interface ISharedAlertEmits {
  (event: 'close'): void
}
