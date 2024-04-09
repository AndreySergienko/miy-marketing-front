/**
 * Преобразует ключ вида snake_case в ключ вида camelCase
 * @param str - Ключ для преобразования вида snake_case
 * @returns - Ключ вида camelCase
 */
const snake2Camel = (str: string): string => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return str.replace(/_([a-z])/g, (_, letter) => {
        return letter.toUpperCase();
    });
};

/**
 * Преобразует ключ вида camelCase в ключ вида snake_case
 * @param str - Ключ для преобразования вида camelCase
 * @returns - Ключ вида snake_case
 */
const camel2Snake = (str: string) => {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};


export {
    camel2Snake,
    snake2Camel
}
