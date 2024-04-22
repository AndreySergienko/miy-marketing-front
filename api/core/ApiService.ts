import {$Fetch} from "nitropack";
import ApiBuilder from "~/api/core/ApiBuilder";
import {authHeaders, defaultHeaders} from "~/api/core/Headers/headers";

export default class ApiService {
  private readonly apiBuilder: ApiBuilder;
  protected readonly $api: $Fetch;
  protected readonly $authApi: $Fetch;


  constructor() {
    this.apiBuilder = new ApiBuilder();
    this.$api = this.apiBuilder.create(defaultHeaders)
    this.$authApi = this.apiBuilder.create(authHeaders)
  }
}
