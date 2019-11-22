import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@shared/modules/card/card.module';
import { HOME_PUBLIC_ROUTES } from '@feedeat/web/src/modules/home/views/public/home-public.routes';
import { HOME_PUBLIC_PAGES } from '@feedeat/web/src/modules/home/views/public/pages';
import { FeedeatHomeContainerModule } from '@feedeat/web/src/modules/home/containers/module';

const MODULES: any[] = [CommonModule, CardModule, HOME_PUBLIC_ROUTES, FeedeatHomeContainerModule];

@NgModule({
    declarations: [...HOME_PUBLIC_PAGES],
    imports: [...MODULES],
})
export class FeedeatHomePublicModule {}
