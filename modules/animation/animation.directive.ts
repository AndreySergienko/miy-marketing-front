import {useCreateDirective} from "~/modules/directives/useCreateDirective";
import {useAnimation} from "./useAnimation";

const directive =  useCreateDirective({
    name: 'animate',
    directive: {
        beforeMount($el: HTMLElement) {
            useAnimation($el)
        },
    }
})

export default directive;