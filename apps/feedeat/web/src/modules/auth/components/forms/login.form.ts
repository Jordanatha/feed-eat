import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormComponent } from '@ubud/form';
import { Credential } from '@feedeat/auth/dtos/credential';

@Component({
    selector: 'feedeat-login-form',
    templateUrl: './login.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./login.form.scss'],
})
export class LoginForm extends FormComponent<Credential> {}
