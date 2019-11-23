import { NgModule } from '@angular/core';
import { PRODUCT_COMPONENTS } from '@feedeat/web/src/modules/product/components/index';
import { CommonModule } from '@angular/common';
import { FeedeatCommonComponentModule } from '@feedeat/web/src/modules/common/components/module';

const MODULES: any[] = [CommonModule, FeedeatCommonComponentModule];

@NgModule({
    declarations: [...PRODUCT_COMPONENTS],
    imports: [...MODULES],
    exports: [...PRODUCT_COMPONENTS],
})
export class FeedeatProductComponentModule {}
