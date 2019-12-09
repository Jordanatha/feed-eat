import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormComponent } from '@ubud/form';
import { UserDto } from '@feedeat/auth/dtos/user';

@Component({
    selector: 'feedeat-register-form',
    templateUrl: './register.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./register.form.scss'],
})
export class RegisterForm extends FormComponent<UserDto> {}
