export interface ISharedCardProps {
  price: number;
  subscribers: number;
  date: string;
  avatar: string;
}
export interface ISharedCardEmits {
  (event: 'buy'): unknown
}
