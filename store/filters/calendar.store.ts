export interface ICalendarRange {
  start: Date;
  end: Date | null;
}

export const useCalendarStore = defineStore("filters/calendar", () => {
  const ranges = ref<ICalendarRange[]>([]);

  const selectDate = (date: Date): void => {
    console.log(date);

    const notFullRange = ranges.value.find((range) => range.end === null);

    if (!notFullRange) {
      ranges.value.push({
        start: date,
        end: null,
      });
      return;
    }

    if (date.getTime() < notFullRange.start.getTime()) {
      notFullRange.end = notFullRange.start;
      notFullRange.start = date;
      return;
    }

    notFullRange.end = date;
  };

  const reset = (): void => {
    ranges.value = [];
  };

  watch(
    ranges,
    () => {
      // TODO: вызвать получение новых данных с бэка, с передачей массива с датами
    },
    {
      deep: true,
    }
  );

  return {
    ranges,
    selectDate,
    reset,
  };
});
