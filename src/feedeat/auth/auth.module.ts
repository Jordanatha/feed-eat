import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticatedGuard } from '@naker/naco';
import { AuthClient } from '@feedeat/auth/clients/auth.client';
import { AuthService } from '@feedeat/auth/services/auth.service';
import { AuthInterceptor } from '@feedeat/auth/interceptors/auth.interceptor';

@NgModule({
    providers: [
        AuthClient,
        AuthService,
        AuthenticatedGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class FeedeatAuthDomainModule {}
