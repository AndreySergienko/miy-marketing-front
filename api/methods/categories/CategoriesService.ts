import ApiService from "~/api/core/ApiService";
import type { TCategoriesApiResponse } from "./categories.types";

export default class CategoriesService extends ApiService {
  async getAll(dates: string) {
    return await this.$authApi<TCategoriesApiResponse>("categories/all", {
      params: {
        dates,
      },
      onResponse(context) {
        return context.response._data;
      },
    });
  }
}
