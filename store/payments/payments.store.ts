import PaymentsService from "~/api/methods/payments/PaymentsService";
import type { IPaymentsItem } from "~/api/methods/payments/payments.types";
import { transform } from "./payments.utils";

export const usePaymentsStore = defineStore("global/payments", () => {
  const paymentsService = new PaymentsService();

  /** Список платежей **/
  const payments = ref<IPaymentsItem[]>([]);

  const pages = ref<number | null>(null);

  /** Получить список платежей **/
  async function getAll() {
    try {
      const data = await paymentsService.getAll();
      payments.value = transform(data);
      payments.value.push({
        price: 2345,
        datetime: "",
        name: "Тест",
        status: "PAID",
      });
    } catch (e) {
      console.error(e);
    }
  }

  return { payments, pages, getAll };
});
