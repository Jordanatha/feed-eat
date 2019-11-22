import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatus } from '@shared/enums/marital-status';

@Pipe({
    name: 'maritalStatus',
})
export class MaritalStatusPipe implements PipeTransform {
    public transform(value: MaritalStatus, key: string): any {
        return MaritalStatus.find(value)[key];
    }
}
