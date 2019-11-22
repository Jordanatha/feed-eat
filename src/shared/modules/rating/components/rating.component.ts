import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
    selector: 'rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RatingComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => RatingComponent),
            multi: true,
        },
    ],
})
export class RatingComponent implements ControlValueAccessor, Validator {
    @Input() rating: number;
    @Input() readOnly: boolean = false;
    @Input() showText: boolean = true;
    private data: any = null;

    public onChange(e): void {
        this.propagateChange(e);
    }

    public validate(c: FormControl) {
        return this.data != null
            ? null
            : {
                  required: {
                      valid: false,
                  },
              };
    }

    private propagateChange = (_: any) => {};

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public writeValue(obj: any): void {
        this.data = obj;
    }
}
