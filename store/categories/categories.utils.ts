import type {
  TCategoriesApiResponse,
  ICategoriesItem,
} from "~/api/methods/categories/categories.types";

export const transform = (data: TCategoriesApiResponse): ICategoriesItem[] => {
  return data.map((item) => ({
    id: item.id,
    title: item.description,
    value: item.value,
  }));
};
