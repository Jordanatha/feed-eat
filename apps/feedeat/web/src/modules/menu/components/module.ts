import { NgModule } from '@angular/core';
import { MENU_COMPONENTS } from '@feedeat/web/src/modules/menu/components/index';
import { CommonModule } from '@angular/common';

const MODULES: any[] = [CommonModule];

@NgModule({
    declarations: [...MENU_COMPONENTS],
    imports: [...MODULES],
    exports: [...MENU_COMPONENTS],
})
export class FeedeatMenuComponentModule {}
