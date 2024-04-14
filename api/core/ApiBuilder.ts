import FetchMapper from "~/api/core/mapper/FetchMapper";
import {FetchContext, FetchResponse, ofetch} from "ofetch";
import {$Fetch} from "nitropack";

export default class ApiBuilder {
    private readonly mapper: FetchMapper;
    constructor() {
        this.mapper = new FetchMapper()
    }

    private createOnResponse(context: FetchContext & {
        response: FetchResponse<ResponseType> }) {
        return this.mapper.mapDataKeys(context.response)
    }

    public create(headers: HeadersInit): $Fetch {
        const onResponse = this.createOnResponse
        // @ts-ignore
        return ofetch.create({ headers})
    }
}
