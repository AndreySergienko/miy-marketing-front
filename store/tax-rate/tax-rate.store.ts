import { defineStore } from "pinia";
import type { ITaxRate } from "./tax-rate.types";

export const useTaxRateStore = defineStore("tax-rate", () => {
  // Локальный массив вариантов налогового режима
  const taxRates = ref<ITaxRate[]>([
    { id: 1, value: "6%" },
    { id: 2, value: "15%" },
    { id: 3, value: "иной" },
  ]);

  return {
    taxRates,
  };
});