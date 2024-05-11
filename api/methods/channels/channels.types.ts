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
