import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbudFormModule } from '@ubud/form';
import { UbudLoaderModule } from '@ubud/loader';
import { RouterModule } from '@angular/router';
import { NotificatorModule } from '@shared/modules/notificator/notificator.module';
import { FeedeatAuthComponentModule } from '@feedeat/web/src/modules/auth/components/module';
import { AUTH_CONTAINERS } from '@feedeat/web/src/modules/auth/containers/index';
import { FeedeatAuthDomainModule } from '@feedeat/auth/auth.module';

const MODULES: any[] = [
    CommonModule,
    FeedeatAuthComponentModule,
    UbudFormModule,
    UbudLoaderModule,
    RouterModule,
    NotificatorModule,
    FeedeatAuthDomainModule,
];

@NgModule({
    declarations: [...AUTH_CONTAINERS],
    imports: [...MODULES],
    exports: [...AUTH_CONTAINERS, FeedeatAuthComponentModule],
})
export class FeedeatAuthContainerModule {}
