export interface INewChannel {
  categoriesId: number[];
  name: string;
  description: string;
  link: string;
  day: Date | null;
  slots: string[];
  price: string;
  formatChannel: number;
  conditionCheck: string;
}
