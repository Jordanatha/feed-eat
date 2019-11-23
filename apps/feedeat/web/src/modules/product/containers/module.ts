import { NgModule } from '@angular/core';
import { PRODUCT_CONTAINERS } from '@feedeat/web/src/modules/product/containers/index';
import { CommonModule } from '@angular/common';
import { FeedeatProductComponentModule } from '@feedeat/web/src/modules/product/components/module';

const MODULES: any[] = [CommonModule, FeedeatProductComponentModule];

@NgModule({
    declarations: [...PRODUCT_CONTAINERS],
    imports: [...MODULES],
    exports: [...PRODUCT_CONTAINERS, FeedeatProductComponentModule],
})
export class FeedeatProductContainerModule {}
