import { useCategoriesStore } from "../categories/categories.store";

export interface ICalendarRange {
  start: Date;
  end: Date | null;
}

export const useCalendarStore = defineStore("filters/calendar", () => {
  const categoriesStore = useCategoriesStore();

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
    (newRanges) => {
      const rangesWithTimestamps = newRanges.map((range) => ({
        start: range.start.getTime(),
        end: range.end?.getTime() || null,
      }));

      const strigifiedRanges = JSON.stringify(rangesWithTimestamps);
      categoriesStore.getAll(btoa(strigifiedRanges));
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
