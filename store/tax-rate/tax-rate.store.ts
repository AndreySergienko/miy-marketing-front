import { defineStore } from "pinia";
import TaxRateService from "~/api/methods/tax-rate/TaxRateService";
import type { ITaxRate } from "./tax-rate.types";

export const useTaxRateStore = defineStore("tax-rate", () => {
  const taxRateService = new TaxRateService();

  const taxRates = ref<ITaxRate[]>([]);

  const isLoading = ref(false);

  async function fetchTaxRates() {
    try {
      isLoading.value = true;
      const response = await taxRateService.getAllTaxRates();
      taxRates.value = response;
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    taxRates,
    isLoading,
    fetchTaxRates,
  };
});