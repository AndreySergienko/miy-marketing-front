export interface ISharedCardProps {
  price: number;
  subscribers: number;
  date: string;
  avatar: string;
  isDisabledBuy: boolean;
}
export interface ISharedCardEmits {
  (event: 'buy'): unknown
}
