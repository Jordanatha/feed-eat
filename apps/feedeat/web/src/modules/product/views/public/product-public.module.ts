import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@shared/modules/card/card.module';
import { PRODUCT_PUBLIC_ROUTES } from '@feedeat/web/src/modules/product/views/public/product-public.routes';
import { PRODUCT_PUBLIC_PAGES } from '@feedeat/web/src/modules/product/views/public/pages';
import { FeedeatProductContainerModule } from '@feedeat/web/src/modules/product/containers/module';
import { FeedeatCommonComponentModule } from '@feedeat/web/src/modules/common/components/module';

const MODULES: any[] = [CommonModule, CardModule, PRODUCT_PUBLIC_ROUTES, FeedeatProductContainerModule, FeedeatCommonComponentModule];

@NgModule({
    declarations: [...PRODUCT_PUBLIC_PAGES],
    imports: [...MODULES],
})
export class FeedeatProductPublicModule {}
