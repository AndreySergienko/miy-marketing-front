import FetchMapper from "~/api/core/mapper/FetchMapper";
import {FetchOptions, FetchRequest, ofetch} from "ofetch";
import {$Fetch} from "nitropack";
import {useShowError} from "~/composobles/useShowError";

export default class ApiBuilder {
    private readonly mapper: FetchMapper;
    constructor() {
        this.mapper = new FetchMapper()
    }

  private createBaseUrl(): string {
    const config = useRuntimeConfig()
    let url = config.public.baseUrlApi

    if (url && url[url.length - 1] !== '/') {
      url += '/'
    }
    return url
  }

  private createDefaultInstanceApi(): $Fetch {
    return ofetch.create({ baseURL: this.createBaseUrl()})
  }

  public create(getHeaders: () => HeadersInit) {
      const mapper = this.mapper;
      const instance = this.createDefaultInstanceApi()
      return async <T>(request: FetchRequest, options: FetchOptions): Promise<T> => {
        // @ts-ignore
        return Promise.resolve(instance(request, {
          headers: getHeaders(),
          ...options,
        })).then(mapper.mapDataKeys).catch(useShowError)
      }
  }
}
