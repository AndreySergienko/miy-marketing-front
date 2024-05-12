import {Directive} from "vue";

export interface ICreateDirectiveArgs<El, Binding> {
    // Название директивы
    name: string;
    // Инстанс директвы
    directive: Directive<El, Binding>;
}
