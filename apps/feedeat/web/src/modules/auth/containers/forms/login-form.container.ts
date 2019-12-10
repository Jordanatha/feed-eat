import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormValue } from '@ubud/form';
import { Subscriber } from '@ubud/sate';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginFormFactory } from '@feedeat/auth/factories/login-form.factory';
import { AuthService } from '@feedeat/auth/services/auth.service';
import { AuthRepository } from '@feedeat/auth/repositories/auth.repository';
import { Credential } from '@feedeat/auth/dtos/credential';
import { Signature } from '@feedeat/auth/values/signature';

@Component({
    selector: 'feedeat-login-container',
    templateUrl: './login-form.container.html',
    providers: [LoginFormFactory],
    styleUrls: ['./login-form.container.scss'],
})
export class LoginFormContainer implements OnDestroy {
    public form: Form;
    public loading$: Observable<boolean>;

    public constructor(
        formFactory: LoginFormFactory,
        private service: AuthService,
        private router: Router,
        private subscriber: Subscriber,
        private authRepository: AuthRepository,
    ) {
        this.form = formFactory.create();
        this.loading$ = this.authRepository.isManagementLoading$();
    }

    public get errorMessage$(): Observable<string> {
        return this.authRepository.getManagementErrorMessage$();
    }

    public login(payload: FormValue<Credential>) {
        if ('VALID' === payload.status) {
            this.subscriber.subscribe(
                this,
                this.service.authenticate(payload.data).pipe(
                    tap((response: any) => {
                        if (response instanceof Signature) {
                            this.router.navigate(['/']);
                        }
                    }),
                ),
            );
        }
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
