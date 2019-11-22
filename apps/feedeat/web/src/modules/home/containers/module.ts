import { NgModule } from '@angular/core';
import { HOME_CONTAINERS } from '@feedeat/web/src/modules/home/containers/index';
import { FeedeatHomeComponentModule } from '@feedeat/web/src/modules/home/components/module';
import { CommonModule } from '@angular/common';

const MODULES: any[] = [CommonModule, FeedeatHomeComponentModule];

@NgModule({
    declarations: [...HOME_CONTAINERS],
    exports: [...HOME_CONTAINERS, FeedeatHomeComponentModule],
    imports: [...MODULES],
})
export class FeedeatHomeContainerModule {}
