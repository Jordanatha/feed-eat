import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '@shared/enums/gender';

@Pipe({
    name: 'gender',
    pure: true,
})
export class GenderPipe implements PipeTransform {
    public transform(value: Gender, key: string): any {
        return Gender.find(value)[key];
    }
}
