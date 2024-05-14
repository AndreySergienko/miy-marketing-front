import FetchMapper from "~/api/core/mapper/FetchMapper";
import {FetchContext, FetchResponse, ofetch} from "ofetch";
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

    private createOnResponse(context: FetchContext & {
        response: FetchResponse<ResponseType> }) {
          return this.mapper.mapDataKeys.call(this, context.response)
        }

    public create(headers: HeadersInit): $Fetch {
      const onResponse = this.createOnResponse
      // @ts-ignore
      return ofetch.create({ baseURL: this.createBaseUrl(), headers, onResponse(context: FetchContext & {
          response: FetchResponse<ResponseType>
        }): (FetchResponse<any> & FetchResponse<ResponseType>) | null {
          const mapper = new FetchMapper()
          return mapper.mapDataKeys(context.response)
        }})
    }
}
