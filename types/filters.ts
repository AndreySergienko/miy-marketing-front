export interface IFilter {
  key: string;
  title: string;
  type?: string;
}

export interface IFilterValues {
  price: { from: string; to: string};
  time: { from: string; to: string};
  interval: string;
  subscribers: { from: string; to: string};
}