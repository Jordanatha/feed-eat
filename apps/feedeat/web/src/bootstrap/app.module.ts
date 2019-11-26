import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ServicePickerModule } from '@naker/service-picker';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { IonicStorageAdapter, UbudStorageModule } from '@ubud/storage';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NotificatorModule } from '@shared/modules/notificator/notificator.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { EnvModule } from '@shared/modules/env/env.module';
import { RouterRedirectorModule } from '@shared/modules/router-redirector/redirector.module';
import { ImageAsyncModule } from '@shared/modules/image-async/image-async.module';
import { ConfirmationModule } from '@shared/modules/confirmation/confirmation.module';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import '@progress/kendo-angular-intl/locales/id/all';
import { PaginationModule } from '@shared/modules/pagination/pagination.module';
import { FEEDEAT_APP_INITIALIZER } from './app.initializer';
import { APP_ROUTES } from './app.routes';
import { FeedeatWebTemplateModule } from '@feedeat/web/src/templates/web/web-template.module';
import { FeedeatApiModule } from '@feedeat/api/api.module';

registerLocaleData(localeId, 'id');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicStorageModule.forRoot(),
        UbudStorageModule.forRoot(IonicStorageAdapter),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument(<any>{
            maxAgent: 25,
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule,
        HttpClientModule,
        ServicePickerModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

        FeedeatWebTemplateModule,

        DialogsModule,
        NotificatorModule.forRoot(),
        PaginationModule,
        LoadingBarRouterModule,
        LoadingBarHttpClientModule,
        EnvModule.forRoot({ environment: environment }),
        RouterRedirectorModule.forRoot(),
        ImageAsyncModule.forRoot(),
        ConfirmationModule,

        FeedeatApiModule.forRoot(environment.feedeat_api + environment.api_version),

        APP_ROUTES,
    ],
    providers: [
        FEEDEAT_APP_INITIALIZER,
        {
            provide: LOCALE_ID,
            useValue: 'id',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
