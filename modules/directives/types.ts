import {Directive} from "vue";

export interface ICreateDirectiveArgs {
    // Название директивы
    name: string;
    // Инстанс директвы
    directive: Directive;
}