import { HttpHandler } from '@angular/common/http';
import { ubudHttpHandlerFactory } from '@ubud/http';
import { ApiConfig } from '@feedeat/api/clients/config';
import { FeedeatApiClient } from '@feedeat/api/clients/api.client';

export function ApiClientFactory(handler: HttpHandler, config: ApiConfig) {
    return new FeedeatApiClient(ubudHttpHandlerFactory(handler, config.interceptors, { url: config.endpoint }));
}
