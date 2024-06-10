import FetchMapper from '~/api/core/mapper/FetchMapper'
import { FetchOptions, FetchRequest } from 'ofetch'
import { useShowError } from '~/composobles/useShowError'

export default class ApiBuilder {
  private readonly mapper: FetchMapper
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

  public create(getHeaders: () => HeadersInit) {
    const domain = this.createBaseUrl()
    return async <T>(
      request: FetchRequest,
      options?: FetchOptions,
    ): Promise<T> => {
      const url = domain + request
      // @ts-ignore
      return $fetch(url, {
        headers: getHeaders(),
        ...options,
      }).catch(useShowError)
    }
  }
}
