import ApiService from "~/api/core/ApiService";
import type { TCategoriesApiResponse } from "./categories.types";

export default class CategoriesService extends ApiService {
  async getAll() {
    return await this.$authApi<TCategoriesApiResponse>("categories/all", {
      onResponse(context) {
        return context.response._data;
      },
    });
  }
}
