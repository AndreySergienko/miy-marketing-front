import FetchMapper from "~/api/core/mapper/FetchMapper";
import {ofetch} from "ofetch";

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

    public async create(headers: HeadersInit) {
      // const api = (method, body) => {
      //   const bodyToJson = JSON.stringify(body)
      //   return await $fetch(this.createBaseUrl(), {
      //     method,
      //     bodyToJson,
      //     headers: headers()
      //   })
      // }
      // return api
        return ofetch.create({ baseURL: this.createBaseUrl(), headers})
    }
}
