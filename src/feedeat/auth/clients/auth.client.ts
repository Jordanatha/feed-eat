import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedeatApiClient } from '@feedeat/api/clients/api.client';
import { Credential } from '@feedeat/auth/dtos/credential';
import { Signature } from '@feedeat/auth/values/signature';
import { mapToClass, mapToData } from '@feedeat/api/transformers/responses.transformer';
import { User } from '@feedeat/auth/models/user';
import { UserDto } from '@feedeat/auth/dtos/user';
import { Customer } from '@feedeat/auth/models/customer';

@Injectable()
export class AuthClient {
    public constructor(private client: FeedeatApiClient) {}

    public authenticate(credential: Credential): Observable<Signature> {
        return this.client.post('auth/tokens', credential).pipe(
            mapToData(),
            mapToClass(Signature),
        );
    }

    public getUser(): Observable<User> {
        return this.client.get<any>(`auth/me`).pipe(
            mapToData(),
            mapToClass(User),
        );
    }

    public registerCustomer(payload: UserDto): Observable<Customer> {
        return this.client.post(`customers/register`, payload).pipe(
            mapToData(),
            mapToClass(Customer),
        );
    }
}
