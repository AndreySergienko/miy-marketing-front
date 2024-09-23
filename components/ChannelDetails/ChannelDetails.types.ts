export interface IChannelDetailsDateSlot {
  time: string;
  format: string;
  price: number;
}

export interface IChannelDetailsDate {
  date: string;
  slots: IChannelDetailsDateSlot[];
}

export interface IChannelDetailsProps {
  image: string;
  title: string;
  category: string;
  url: string;
  dates: IChannelDetailsDate[];
}
