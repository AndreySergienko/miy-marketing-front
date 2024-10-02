import { useAlertStore } from "~/store/alert/alert.store";
import type { TNewError, TPossibleError } from "~/types/api.types";

export function useShowError(e: TPossibleError) {
  const alertStore = useAlertStore();

  const errorData = (e as { data: TNewError })?.data;

  if ("message" in errorData) {
    alertStore.showError({ title: errorData.message });
    return;
  }

  const values = Object.values(errorData?.[0]) ?? [];
  const title = values?.[0]?.[0] ?? "Что-то пошло не так";

  alertStore.showError({ title });
}
