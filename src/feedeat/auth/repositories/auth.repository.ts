import { Injectable } from '@angular/core';
import { Repository } from '@ubud/sate';
import { Observable } from 'rxjs';
import { FormState } from '@ubud/form';
import { AuthState } from '@feedeat/auth/stores/states';
import { AuthStore } from '@feedeat/auth/stores/auth.store';
import { Signature } from '@feedeat/auth/values/signature';
import { User } from '@feedeat/auth/models/user';
import { Credential } from '@feedeat/auth/dtos/credential';

@Injectable({ providedIn: 'root' })
export class AuthRepository extends Repository<AuthState> {
    public constructor(store: AuthStore) {
        super(store);
    }

    public isLoading$(): Observable<boolean> {
        return this.select(state => state.loading);
    }

    public getErrorMessage$(): Observable<string> {
        return this.select(state => state.errorMessage);
    }

    public getSignature$(): Observable<Signature | null> {
        return this.select(state => state.data.signature);
    }

    public getUser$(): Observable<User | null> {
        return this.select(state => state.data.user);
    }

    public isManagementLoading$(): Observable<boolean> {
        return this.select(state => state.management.loading);
    }

    public getManagementErrorMessage$(): Observable<string> {
        return this.select(state => state.management.errorMessage);
    }

    public getManagementFormState$(): Observable<FormState<Credential>> {
        return this.select(state => state.management.formState);
    }
}
