import { Injectable } from '@angular/core';
import { Store } from '@ubud/sate';
import { FormState } from '@ubud/form';
import { AuthState } from '@feedeat/auth/stores/states';
import { Signature } from '@feedeat/auth/values/signature';
import { User } from '@feedeat/auth/models/user';
import { Credential } from '@feedeat/auth/dtos/credential';

@Injectable({ providedIn: 'root' })
export class AuthStore extends Store<AuthState> {
    public constructor() {
        super({
            loading: false,
            errorMessage: '',
            data: {
                signature: null,
                user: null,
            },
            management: {
                loading: false,
                errorMessage: '',
                formState: {
                    data: {
                        username: '',
                        password: '',
                    },
                    pristine: false,
                },
            },
        });
    }

    public setLoading(loading: boolean): void {
        this.setState(state => {
            return { ...state, loading };
        });
    }

    public setErrorMessage(message: string): void {
        this.setState(state => {
            return { ...state, errorMessage: message };
        });
    }

    public setSignature(signature: Signature): void {
        this.setState(state => {
            return { ...state, data: { ...state.data, signature } };
        });
    }

    public setUser(user: User): void {
        this.setState(state => {
            return { ...state, data: { ...state.data, user } };
        });
    }

    public setManagementLoading(loading: boolean): void {
        this.setState(state => {
            return { ...state, management: { ...state.management, loading } };
        });
    }

    public setManagementErrorMessage(message: string): void {
        this.setState(state => {
            return { ...state, management: { ...state.management, errorMessage: message } };
        });
    }

    public setManagementFormState(formState: FormState<Credential>): void {
        this.setState(state => {
            return { ...state, management: { ...state.management, formState } };
        });
    }
}
