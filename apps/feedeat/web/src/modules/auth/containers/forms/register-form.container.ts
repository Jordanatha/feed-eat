import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RegisterForm } from '@feedeat/web/src/modules/auth/components/forms/register.form';
import { Form } from '@ubud/form';
import { RegisterFormFactory } from '@feedeat/auth/factories/register-form.factory';
import { Subscriber } from '@ubud/sate';
import { AuthService } from '@feedeat/auth/services/auth.service';
import { RouterRedirector } from '@shared/modules/router-redirector/services/router-redirector';
import { Notificator } from '@shared/modules/notificator/notificator';

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

    public constructor(
        private registerFormFactory: RegisterFormFactory,
        private subscriber: Subscriber,
        private service: AuthService,
        private redirector: RouterRedirector,
        private notificator: Notificator,
    ) {
        this.registerForm = this.registerFormFactory.create();
    }
}
