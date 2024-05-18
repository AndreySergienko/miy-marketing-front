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

export interface IApiChannelsListItem {
  avatar: string;
  chatId: string;
  conditionCheck: string;
  day: string;
  description: string;
  formatChannelId: number;
  id: number;
  isCanPostMessage: boolean;
  link: string;
  name: string;
  price: number;
  statusId: number;
  subscribers: number;
}

export interface IChannelsListItem {
  id: number;
  name: string;
  link: string;
  status: EProfileChannelsItemTypes;
  conditionCheck: string;
  day: Date;
  formatChannelId: number;
  price: number;
}
