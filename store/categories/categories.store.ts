import CategoriesService from "~/api/methods/categories/CategoriesService";
import type { ICategoriesItem } from "~/api/methods/categories/categories.types";
import { transform } from "./categories.utils";

export const useCategoriesStore = defineStore("global/categories", () => {
  const categoriesService = new CategoriesService();

  /** Список категорий **/
  const categories = ref<ICategoriesItem[]>([]);

  /** Получить список категорий **/
  const getAll = async () => {
    try {
      const data = await categoriesService.getAll();
      categories.value = transform(data);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    categories,
    getAll,
  };
});
