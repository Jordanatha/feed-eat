import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nullStrip',
})
export class NullStripPipe implements PipeTransform {
    public transform(value: any, fallback?: string): string {
        if (null === value || '' === value || undefined === value || !value) {
            return fallback || '-';
        }

        return value;
    }
}
