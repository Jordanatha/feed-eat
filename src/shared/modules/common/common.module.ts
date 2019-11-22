import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_COMMON_DIRECTIVES } from '@shared/modules/common/directives';
import { SHARED_COMMON_PIPES } from '@shared/modules/common/pipes';

@NgModule({
    imports: [CommonModule],
    declarations: [...SHARED_COMMON_DIRECTIVES, ...SHARED_COMMON_PIPES],
    exports: [CommonModule, ...SHARED_COMMON_DIRECTIVES, ...SHARED_COMMON_PIPES],
})
export class SharedCommonModule {}
