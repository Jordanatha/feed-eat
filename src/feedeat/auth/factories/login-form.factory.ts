import { Injectable } from '@angular/core';
import { Form, FormFactory } from '@ubud/form';
import { FormBuilder } from '@angular/forms';
import { LoginRule } from '@feedeat/auth/rules/login.rule';

@Injectable()
export class LoginFormFactory implements FormFactory {
    public constructor(private fb: FormBuilder) {}

    public create(): Form {
        const formRule = new LoginRule();

        return {
            formGroup: this.fb.group(formRule.getFormControls()),
            rules: [formRule],
        };
    }
}
