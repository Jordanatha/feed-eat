import { HttpHandler } from '@angular/common/http';
import { ubudHttpHandlerFactory } from '@ubud/http';
import { ApiConfig } from '@feedeat/api/clients/config';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';

export function KbjiApiClientFactory(handler: HttpHandler, config: ApiConfig) {
    return new KbjiApiClient(ubudHttpHandlerFactory(handler, config.interceptors, { url: config.endpoint }));
}
