import { NgModule } from '@angular/core';
import { MENU_CONTAINERS } from '@feedeat/web/src/modules/menu/containers/index';
import { CommonModule } from '@angular/common';
import { FeedeatMenuComponentModule } from '@feedeat/web/src/modules/menu/components/module';

const MODULES: any[] = [CommonModule, FeedeatMenuComponentModule];

@NgModule({
    declarations: [...MENU_CONTAINERS],
    imports: [...MODULES],
    exports: [...MENU_CONTAINERS, FeedeatMenuComponentModule],
})
export class FeedeatMenuContainerModule {}
