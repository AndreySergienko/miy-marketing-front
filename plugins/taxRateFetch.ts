import { defineNuxtPlugin } from "#app";
import { useTaxRateStore } from "~/store/tax-rate/tax-rate.store";

export default defineNuxtPlugin(() => {
  const taxRateStore = useTaxRateStore();
  taxRateStore.fetchTaxRates();
});