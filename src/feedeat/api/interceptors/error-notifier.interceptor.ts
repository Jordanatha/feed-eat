import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Notificator } from '@shared/modules/notificator/notificator';

@Injectable()
export class ErrorNotifierInterceptor implements HttpInterceptor {
    public constructor(private notificationService: Notificator, private router: Router) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                let message = '';

                if (!err.status) {
                    this.router.navigateByUrl('/');
                    throw err;
                }

                if (401 !== err.status && 403 !== err.status) {
                    if (err.error instanceof ProgressEvent) {
                        message = err.message;
                    } else {
                        message = err.error.message;
                    }

                    this.notificationService.error(message);
                }
                throw err;
            }),
        );
    }
}
