import { EProfileChannelsItemTypes } from "~/components/ProfileChannelsItem/ProfileChannelsItem.types";

export interface IChannelsRegistrationBody {
  categoriesId: number[];
  description: string;
  link: string;
  name: string;
  day: number; // timestamp
  slots: string[];
  price: number;
  formatChannel: number;
  conditionCheck: string;
}

export interface IInitialChannelData {
  avatar: string;
  description: string;
  link: string;
  name: string;
  subscribers: number;
}

export interface IApiChannelsListItem extends IInitialChannelData {
  categories: number[];
  chatId: string;
  conditionCheck: string;
  day: string;
  formatChannelId: number;
  id: number;
  isCanPostMessage: boolean;
  price: number;
  statusId: number;
}

export interface IChannelsListItem extends IInitialChannelData {
  id: number;
  categories: number[];
  status: EProfileChannelsItemTypes;
  conditionCheck: string;
  day: Date;
  formatChannelId: number;
  price: number;
}
