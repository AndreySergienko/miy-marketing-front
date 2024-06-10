export interface INewChannel {
  categoriesId: number[];
  name: string;
  description: string;
  link: string;
  
  slots: string[];
  price: string;
  formatChannel: number;
  conditionCheck: string;
}
