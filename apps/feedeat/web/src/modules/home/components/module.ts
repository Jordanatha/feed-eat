import { NgModule } from '@angular/core';
import { HOME_COMPONENTS } from '@feedeat/web/src/modules/home/components/index';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const MODULES: any[] = [CommonModule, SlickCarouselModule];

@NgModule({
    declarations: [...HOME_COMPONENTS],
    imports: [...MODULES],
    exports: [...HOME_COMPONENTS],
})
export class FeedeatHomeComponentModule {}
