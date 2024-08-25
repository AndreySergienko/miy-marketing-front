export interface ICalendarRange {
  start: Date;
  end: Date | null;
}

export const useCalendarStore = defineStore("filters/calendar", () => {
  const dates = ref<Date[]>([]);

  const selectDate = (date: Date): void => {
    const foundIndex = dates.value.findIndex(
      (item) => item.getTime() === date.getTime()
    );

    if (foundIndex !== -1) {
      dates.value.splice(foundIndex, 1);
      return;
    }

    dates.value.push(date);
  };

  const reset = (): void => {
    dates.value = [];
  };

  return {
    dates,
    selectDate,
    reset,
  };
});
