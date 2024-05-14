import FetchMapper from "~/api/core/mapper/FetchMapper";
import {ofetch} from "ofetch";
import {$Fetch} from "nitropack";

export default class ApiBuilder {
    private readonly mapper: FetchMapper;
    constructor() {
        this.mapper = new FetchMapper()
    }

  private createBaseUrl() {
    const config = useRuntimeConfig()
    let url = config.public.baseUrlApi

    if (url && url[url.length - 1] !== '/') {
      url += '/'
    }
    return url
  }

    public create(headers: HeadersInit): $Fetch {
        return ofetch.create({ baseURL: this.createBaseUrl(), headers })
    }
}
