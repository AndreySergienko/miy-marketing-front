import ApiService from "~/api/core/ApiService";
import type { TCategoriesApiResponse } from "./categories.types";
import { ICalendarRange } from "~/store/filters/calendar.store";

export default class CategoriesService extends ApiService {
  async getAll(dates: ICalendarRange | null) {
    let parsedDates = !dates ? undefined : `${dates.start.getTime()}`;
    if (dates && dates.end) {
      parsedDates = `${parsedDates},${dates.end.getTime()}`;
    }

    return await this.$authApi<TCategoriesApiResponse>("categories/all", {
      params: {
        dates: parsedDates,
      },
      onResponse(context) {
        return context.response._data;
      },
    });
  }
}
