import { Injectable } from '@angular/core';
import { Form, FormFactory } from '@ubud/form';
import { FormBuilder } from '@angular/forms';
import { SearchRule } from '@shared/modules/data-grid/rules/search.rule';

@Injectable()
export class SearchFormFactory implements FormFactory {
    public constructor(private fb: FormBuilder) {}

    public create(): Form {
        const formRule = new SearchRule();

        return {
            formGroup: this.fb.group(formRule.getFormControls()),
            rules: [formRule],
        };
    }
}
