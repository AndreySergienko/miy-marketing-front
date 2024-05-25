import ApiService from "~/api/core/ApiService";
import type { TPaymentsApiResponse } from "./payments.types";

export default class PaymentsService extends ApiService {
  async getAll() {
    return await this.$authApi<TPaymentsApiResponse>("payments/all");
  }
}
