import ApiService from "~/api/core/ApiService";

export default class CategoriesService extends ApiService {
    async getAll() {
        return await this.$api('categories')
    }
}