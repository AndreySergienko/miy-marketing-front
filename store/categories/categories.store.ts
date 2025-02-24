import CategoriesService from "~/api/methods/categories/CategoriesService";
import type { ICategoriesItem } from "~/api/methods/categories/categories.types";
import { transform } from "./categories.utils";

export const useCategoriesStore = defineStore("global/categories", () => {
  const categoriesService = new CategoriesService();

  /** Список категорий **/
  const categories = ref<ICategoriesItem[]>([]);
  const activeCategories = ref<Record<string, string>>({});

  const getQueryCategories = computed<string>(() => {
    let query = "categories=";
    const activeCategoriesKeys = Object.keys(activeCategories.value);
    for (let i = 0; i < activeCategoriesKeys.length; i++) {
      const categoryId = String(activeCategoriesKeys[i]);
      if (query === "categories=") {
        query += categoryId;
      } else {
        query = query + "," + categoryId;
      }
    }

    return query;
  });

  /** Получить список категорий **/
  const getAll = async () => {
    try {
      if(categories.value.length) return;
      const data = await categoriesService.getAll();
      categories.value = transform(data);
    } catch (e) {
      console.error(e);
    }
  };

  /** Обновление списка категорий **/
  const updateActiveCategories = (categoryId: number) => {
    const id = String(categoryId);
    if (activeCategories.value[id]) {
      delete activeCategories.value[id];
    } else {
      activeCategories.value[id] = id;
    }
  };

  return {
    updateActiveCategories,
    activeCategories,
    categories,
    getAll,
    fetch: getAll,
    getQueryCategories,
  };
});
