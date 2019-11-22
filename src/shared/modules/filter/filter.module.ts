import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbudDropdownModule } from '@ubud/dropdown';
import { FILTER_COMPONENTS } from '@shared/modules/filter/components';
import { FILTER_DIRECTIVES } from '@shared/modules/filter/directives';

const MODULES: any[] = [CommonModule, UbudDropdownModule];

@NgModule({
    imports: [...MODULES],
    declarations: [...FILTER_COMPONENTS, ...FILTER_DIRECTIVES],
    exports: [...FILTER_COMPONENTS, ...FILTER_DIRECTIVES],
})
export class FilterModule {}
