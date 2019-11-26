import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpUtil } from '@shared/utils/http.util';
import { Storage } from '@ubud/storage';
import { AuthClient } from '@feedeat/auth/clients/auth.client';
import { AuthStore } from '@feedeat/auth/stores/auth.store';
import { Credential } from '@feedeat/auth/dtos/credential';
import { Signature } from '@feedeat/auth/values/signature';
import { User } from '@feedeat/auth/models/user';

@Injectable()
export class AuthService {
    public constructor(private client: AuthClient, private store: AuthStore, private storage: Storage) {}

    public authenticate(credential: Credential): Observable<any> {
        this.store.setManagementLoading(true);
        this.store.setManagementErrorMessage('');

        return this.client.authenticate(credential).pipe(
            tap((signature: Signature) => {
                this.storage.set(Signature.STORAGE_KEY, signature);
                this.store.setManagementLoading(false);
                this.store.setSignature(signature);
            }),
            catchError((e: HttpErrorResponse) => {
                return of(HttpUtil.errorExtractor(e)).pipe(
                    tap((message: string) => {
                        this.store.setManagementLoading(false);
                        this.store.setManagementErrorMessage(message);
                    }),
                );
            }),
        );
    }

    public getAuthenticatedUser(): Observable<User | null> {
        return from(this.storage.get(Signature.STORAGE_KEY)).pipe(
            switchMap((signature: Signature) => {
                if (!signature || null === signature.expiresIn) {
                    return this.resetUser();
                }

                return this.client.getUser().pipe(
                    tap((user: User) => {
                        this.store.setSignature(signature);
                        this.store.setUser(user);
                    }),
                    catchError((e: HttpErrorResponse) => {
                        return this.resetUser();
                    }),
                );
            }),
        );
    }

    public resetUser(): Observable<any> {
        return of(null).pipe(
            tap(() => {
                this.store.setSignature(null);
                this.store.setUser(null);
                this.storage.remove(Signature.STORAGE_KEY);
            }),
        );
    }
}
