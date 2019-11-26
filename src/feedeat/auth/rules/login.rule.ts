import { ErrorMessages, Rule } from '@ubud/form';
import { Validators } from '@angular/forms';

export class LoginRule extends Rule {
    public get errorMessages(): ErrorMessages {
        return {
            username: {
                required: (params: any) => 'Username harus diisi',
            },
            password: {
                required: (params: any) => 'Password harus diisi',
            },
        };
    }

    public get username(): Function {
        return Validators.required;
    }

    public get password(): Function {
        return Validators.required;
    }

    public getFormControls(): { [p: string]: any } {
        return {
            username: ['', this.username],
            password: ['', this.password],
        };
    }
}
