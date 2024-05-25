import ApiBuilder from "~/api/core/ApiBuilder";
import { authHeaders, defaultHeaders } from "~/api/core/headers/headers";
import {FetchOptions, FetchRequest} from "ofetch";

type TApi = <T>(request: FetchRequest, options: FetchOptions) => Promise<T>

export default class ApiService {
  private readonly apiBuilder: ApiBuilder;
  protected readonly $api: TApi
  protected readonly $authApi: TApi

  constructor() {
    this.apiBuilder = new ApiBuilder();
    this.$api = this.apiBuilder.create(defaultHeaders);
    this.$authApi = this.apiBuilder.create(authHeaders);
  }
}
