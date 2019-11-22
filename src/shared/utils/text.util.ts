export namespace TextUtil {
    export function toLiteral(data: any): any {
        return toSnake(data).replace(/_/g, ' ');
    }

    export function toSnake(data: string): string {
        return data.replace(/([A-Z])/g, (m: string) => '_' + m.toLowerCase());
    }

    export function toKebab(data: string): string {
        return data.replace(/([A-Z])/g, (m: string) => '-' + m.toLowerCase());
    }

    export function fromKebabToSnake(data: string): string {
        return data.replace(/-/g, '_');
    }

    export function fromSnakeToKebab(data: string): string {
        return data.replace(/_/g, '-');
    }

    export function validateOrEmpty(data: string): string {
        if (data === 'null') {
            return ' ';
        }

        if (data === 'undefined') {
            return ' ';
        }

        if (!data) {
            return ' ';
        }

        return data;
    }
}
