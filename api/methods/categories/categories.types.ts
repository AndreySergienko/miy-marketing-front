export interface ICategoriesApiItem {
  id: number;
  value: string;
  description: string;
  count: number;
}

export type TCategoriesApiResponse = ICategoriesApiItem[];

export interface ICategoriesItem {
  id: number;
  title: string;
  value: string;
  count: number;

}
