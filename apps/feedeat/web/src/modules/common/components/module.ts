import { NgModule } from '@angular/core';
import { COMMON_COMPONENTS } from '@feedeat/web/src/modules/common/components/index';
import { CommonModule } from '@angular/common';

const MODULES: any[] = [CommonModule];

@NgModule({
    declarations: [...COMMON_COMPONENTS],
    imports: [...MODULES],
    exports: [...COMMON_COMPONENTS],
})
export class FeedeatCommonComponentModule {}
