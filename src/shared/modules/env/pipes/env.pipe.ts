import { Pipe, PipeTransform } from '@angular/core';
import { EnvConfig } from '@shared/modules/env/env.config';

@Pipe({
    name: 'env',
})
export class EnvPipe implements PipeTransform {
    public constructor(private config: EnvConfig) {}

    public transform(key: string): any {
        return this.config.environment[key];
    }
}
