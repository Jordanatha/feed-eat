import { HttpInterceptor } from '@angular/common/http';

export class KbjiApiConfig {
    endpoint: string;
    interceptors?: HttpInterceptor[];
}
