import { Injectable } from '@angular/core';
import { Form, FormFactory } from '@ubud/form';
import { FormBuilder } from '@angular/forms';
import { RegisterRule } from '@feedeat/auth/rules/register.rule';

@Injectable()
export class RegisterFormFactory implements FormFactory {
    public constructor(private fb: FormBuilder) {}

    public create(): Form {
        const formRule = new RegisterRule();

        return {
            formGroup: this.fb.group(formRule.getFormControls()),
            rules: [formRule],
        };
    }
}
