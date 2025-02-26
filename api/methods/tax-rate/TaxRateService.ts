import ApiService from "~/api/core/ApiService";
import type { ITaxRate } from "~/store/tax-rate/tax-rate.types";

export default class TaxRateService extends ApiService {
  private readonly taxRateUrl: string;

  constructor() {
    super();
    this.taxRateUrl = "tax-rate";
  }

  async getAllTaxRates(): Promise<ITaxRate[]> {
    return await this.$api<ITaxRate[]>(this.taxRateUrl, {
      method: "get",
    });
  }
}