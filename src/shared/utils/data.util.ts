export namespace Datautil {
    export function groupedArray(objArray, property, nameField: string = 'name'): any {
        return objArray.reduce(function(total, obj) {
            const key = obj[property];
            const name = nameField.split('.').reduce((acc, cur) => acc[cur], obj) || '';
            const find = total.find(item => item.key === key);
            if (!find) {
                total.push({ key, name, data: [obj] });
            } else {
                find.key = key;
                find.name = name;
                find.data.push(obj);
            }
            return total;
        }, []);
    }
}
