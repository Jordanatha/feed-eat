import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { retryWhen, switchMap } from 'rxjs/operators';
import { Storage } from '@ubud/storage';
import { Signature } from '@feedeat/auth/values/signature';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public constructor(private storage: Storage) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let needRetry = true;

        return from(this.storage.get(Signature.STORAGE_KEY)).pipe(
            switchMap((signature: Signature | null) => {
                if (!signature) {
                    needRetry = false;
                    return next.handle(req);
                }

                return next.handle(
                    req.clone({
                        setHeaders: {
                            Authorization: `${signature.type} ${signature.token}`,
                        },
                    }),
                );
            }),
            retryWhen((error: Observable<HttpErrorResponse>) => {
                return error.pipe(
                    switchMap((err: HttpErrorResponse) => {
                        if (401 !== err.status || !needRetry) {
                            return throwError(err);
                        }

                        needRetry = false;
                        return throwError(err);
                    }),
                );
            }),
        );
    }
}
