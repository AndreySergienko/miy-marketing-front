import DefaultSampleHttp from "~/api/core/samples/DefaultSampleHttp";
import AuthorizationSampleHttp from "~/api/core/samples/AuthorizationSampleHttp";

export default class ApiService {
  constructor() {
    this.$api = DefaultSampleHttp.create()
    this.$authApi = AuthorizationSampleHttp.create()
  }
}
