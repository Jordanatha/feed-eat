import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RegisterForm } from '@feedeat/web/src/modules/auth/components/forms/register.form';
import { Form, FormValue } from '@ubud/form';
import { RegisterFormFactory } from '@feedeat/auth/factories/register-form.factory';
import { Subscriber } from '@ubud/sate';
import { AuthService } from '@feedeat/auth/services/auth.service';
import { RouterRedirector } from '@shared/modules/router-redirector/services/router-redirector';
import { Notificator } from '@shared/modules/notificator/notificator';
import { UserDto } from '@feedeat/auth/dtos/user';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthRepository } from '@feedeat/auth/repositories/auth.repository';
import { Observable } from 'rxjs';
import { User } from '@feedeat/auth/models/user';
import { Customer } from '@feedeat/auth/models/customer';

@Component({
    selector: 'feedeat-register-form-container',
    templateUrl: './register-form.container.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./register-form.container.scss'],
    providers: [RegisterFormFactory],
})
export class RegisterFormContainer {
    @ViewChild('formTpl', { static: false })
    public formTpl: RegisterForm;

    public registerForm: Form;
    public readyForSubmit: boolean = false;
    public submitting$: Observable<boolean>;

    public constructor(
        private registerFormFactory: RegisterFormFactory,
        private subscriber: Subscriber,
        private service: AuthService,
        private redirector: RouterRedirector,
        private notificator: Notificator,
        private activatedRoute: ActivatedRoute,
        private repository: AuthRepository,
    ) {
        this.registerForm = this.registerFormFactory.create();
        this.submitting$ = this.repository.isManagementLoading$();
    }
    public register(payload: FormValue<UserDto>) {
        if ('VALID' === payload.status) {
            payload.data.phone = `+62${payload.data.phone.toString()}`;

            const date = new Date(payload.data.birthDate);
            payload.data.birthDate =
                date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

            this.subscriber.subscribe(
                this,
                this.service.registerCustomer(payload.data).pipe(
                    tap((response: any) => {
                        if (response instanceof Customer) {
                            this.notificator.success('Berhasil menambah pengguna');
                            this.redirector.redirect('/auth/login', this.activatedRoute);
                        }
                    }),
                ),
            );
        }
    }
}
