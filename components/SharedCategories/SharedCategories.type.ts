import type {ICategoriesItem} from "~/api/methods/categories/categories.types";

export interface ISharedCategoriesProps {
  activeCategories: Record<string, string>;
  categoriesList: ICategoriesItem[]
}

export interface ISharedCategoriesEmits {
  (event: 'setCategory', id: number): unknown
}
