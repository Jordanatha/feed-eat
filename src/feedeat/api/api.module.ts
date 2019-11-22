import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpHandler } from '@angular/common/http';
import { CamelResponseTransformerInterceptor, SnakeRequestTransformerInterceptor } from '@ubud/http';
import { ApiConfig } from '@feedeat/api/clients/config';
import { FeedeatApiClient } from '@feedeat/api/clients/api.client';
import { ApiClientFactory } from '@feedeat/api/clients/api-client.factory';
import { ErrorNotifierInterceptor } from '@feedeat/api/interceptors/error-notifier.interceptor';

@NgModule()
export class NinjaApiModule {
    public static forRoot(endpoint: string): ModuleWithProviders {
        return {
            ngModule: NinjaApiModule,
            providers: [
                {
                    provide: ApiConfig,
                    useValue: {
                        endpoint: endpoint,
                    },
                },
                {
                    provide: FeedeatApiClient,
                    useFactory: ApiClientFactory,
                    deps: [HttpHandler, ApiConfig],
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: SnakeRequestTransformerInterceptor,
                    multi: true,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: CamelResponseTransformerInterceptor,
                    multi: true,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorNotifierInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
