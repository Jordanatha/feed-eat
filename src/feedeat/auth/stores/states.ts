import { FormState } from '@ubud/form';
import { Signature } from '@feedeat/auth/values/signature';
import { User } from '@feedeat/auth/models/user';
import { Credential } from '@feedeat/auth/dtos/credential';

export interface AuthState {
    loading: boolean;
    errorMessage: string;
    data: {
        signature: Signature | null;
        user: User | null;
    };
    management: {
        loading: boolean;
        errorMessage: string;
        formState: FormState<Credential>;
    };
}
