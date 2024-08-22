export interface ICalendarRange {
  start: Date;
  end: Date | null;
}

export const useCalendarStore = defineStore("filters/calendar", () => {
  const range = ref<ICalendarRange | null>(null);

  const selectDate = (date: Date): void => {
    if (!range.value || (range.value.start && range.value.end)) {
      range.value = {
        start: date,
        end: null,
      };

      return;
    }

    if (date.getTime() < range.value.start.getTime()) {
      range.value.end = range.value.start;
      range.value.start = date;
      return;
    }

    range.value.end = date;
  };

  const reset = (): void => {
    range.value = null;
  };

  return {
    range,
    selectDate,
    reset,
  };
});
