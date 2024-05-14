import type {IVariantNotification} from "~/modules/pages/registration/registration.types";

export const radios: IVariantNotification[] = [
  {
    value: 'false',
    text: 'В автоматическом порядке',
    checked: false,
  },
  {
    value: 'true',
    text: 'В уведомительном порядке',
    checked: true
  }]
