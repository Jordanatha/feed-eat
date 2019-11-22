import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

/* tslint:disable */
@Directive({
    selector: '[disableControl]',
})
export class DisableControlDirective {
    public constructor(private ngControl: NgControl) {}

    @Input()
    public set disableControl(condition: boolean) {
        const action = condition ? 'disable' : 'enable';
        this.ngControl.control![action]();
    }
}
