import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@shared/modules/card/card.module';
import { AUTH_LANDING_ROUTES } from '@feedeat/web/src/modules/auth/views/landing/auth-landing.routes';
import { AUTH_LANDING_PAGES } from '@feedeat/web/src/modules/auth/views/landing/pages';
import { FeedeatAuthContainerModule } from '@feedeat/web/src/modules/auth/containers/module';

const MODULES: any[] = [CommonModule, CardModule, AUTH_LANDING_ROUTES, FeedeatAuthContainerModule];

@NgModule({
    declarations: [...AUTH_LANDING_PAGES],
    imports: [...MODULES],
})
export class FeedeatAuthLandingModule {}
