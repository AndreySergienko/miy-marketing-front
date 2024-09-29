export interface IMyChannelDateSlot {
  time: string;
  formatId: number;
  price: number;
}

export interface IMyChannelDate {
  date: string;
  slots: IMyChannelDateSlot[];
}

export interface IMyChannel {
  id: number;
  image: string;
  title: string;
  categoryId: number;
  subscribers: number;
  isActive: boolean;
  url: string;
  dates: IMyChannelDate[];
}
