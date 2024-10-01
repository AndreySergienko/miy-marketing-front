import { EProfileChannelsItemTypes } from "~/components/ProfileChannelsItem/ProfileChannelsItem.types";

export interface IChannelsRegistrationDateSlot {
  time: string;
  formatChannel: number;
  price: number;
}

export interface IChannelsRegistrationDate {
  date: string;
  slots: IChannelsRegistrationDateSlot[];
}

export interface IChannelsRegistrationBody {
  id?: number;
  name: string;
  link: string;
  categoriesId: number[];
  channelDates: IChannelsRegistrationDate[];
}

export interface IInitialChannelData {
  avatar: string;
  description: string;
  link: string;
  name: string;
  subscribers: number;
}

export interface IChannelGetAll extends IInitialChannelData {
  conditionCheck: string;
  days: string[];
  formatChannelId: number;
  id: number;
  price: number;
}

export interface ISlot {
  channelId: number;
  id: Number;
  timestamp: string;
}

export interface IGetAll {
  channel: IChannelGetAll;
  slots: ISlot[];
}

export interface IFormat {
  id: number;
  value: string;
}

export interface IApiSlot {
  price: number;
  timestamp: string;
  formatChannelId: number;
}

export interface IApiChannelsListItemDates {
  date: string;
  slots: IApiSlot[];
}

export interface IApiChannelsListItem extends IInitialChannelData {
  categories: number[];
  channelDates: IApiChannelsListItemDates[];
  chatId: string;
  conditionCheck: string;
  days: string[];
  formatChannelId: number;
  id: number;
  isCanPostMessage: boolean;
  price: number;
  slots: ISlot[];
  statusId: number;
}

export interface IChannelsListItem extends IInitialChannelData {
  id: number;
  categories: number[];
  status: EProfileChannelsItemTypes;
  conditionCheck: string;
  days: string[];
  formatChannelId: number;
  price: number;
  slots: ISlot[];
}
