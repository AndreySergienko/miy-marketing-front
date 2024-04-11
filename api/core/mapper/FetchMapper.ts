import type {TObjectWithStringKey} from "~/types";
import {camel2Snake, snake2Camel} from "~/utils/text";

export default class FetchMapper {
    public mapDataKeys<T>(data: T): T | null {
        const convertedObj: TObjectWithStringKey = {};
        if (!data) return null;
        for (const key in data) {
            const valueByKey = data[key];
            if (valueByKey && typeof valueByKey === 'object' && !Array.isArray(valueByKey)) {
                convertedObj[snake2Camel(key)] = this.mapDataKeys(valueByKey);
            } else if (Array.isArray(valueByKey)) {
                convertedObj[snake2Camel(key)] = valueByKey.map((item) => {
                    if (typeof item === 'object') return this.mapDataKeys(item);
                    return item;
                });
            } else {
                convertedObj[snake2Camel(key)] = valueByKey;
            }
        }

        if (typeof data === 'number' || typeof data === 'string') {
            return data;
        }

        return convertedObj as T;
    }

    public reverseMapDataKeys<T extends Record<string, unknown>>(data: T) {
        const convertedObj: TObjectWithStringKey = {};

        if (!data) return;

        Object.keys(data).forEach((key) => {
            const valueByKey = data[key];
            const snakeCaseKey = camel2Snake(key);
            if (valueByKey && typeof valueByKey === 'object' && !Array.isArray(valueByKey)) {
                convertedObj[snakeCaseKey] = this.reverseMapDataKeys(valueByKey as T);
            } else if (Array.isArray(valueByKey)) {
                if (valueByKey.every((value) => typeof value === 'string' || typeof value === 'number')) {
                    convertedObj[snakeCaseKey] = valueByKey.join(',');
                } else {
                    convertedObj[snakeCaseKey] = valueByKey.map((item) => this.reverseMapDataKeys(item));
                }
            } else {
                convertedObj[snakeCaseKey] = valueByKey;
            }
        });

        return convertedObj;
    }
}
