import { Component, forwardRef, Input, ViewChild, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'otp-input',
    templateUrl: './otp-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => OtpInputComponent),
            multi: true,
        },
    ],
    styleUrls: ['./otp-input.component.scss'],
})
export class OtpInputComponent implements ControlValueAccessor {
    @ViewChildren('firstInput') public firstInput: any;
    @ViewChildren('secondInput') public secondInput: any;
    @ViewChildren('thirdInput') public thirdInput: any;
    @ViewChildren('fourthInput') public fourthInput: any;
    @ViewChildren('fifthInput') public fifthInput: any;
    @ViewChildren('sixthInput') public sixthInput: any;

    @Input() public disabled: boolean;

    public currIndex: number;
    public value: any;

    public constructor() {
        this.currIndex = 0;
        this.value = '';
    }

    public propagateChange = (_: any) => {};

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public setDisabledState(isDisabled: boolean): void {}

    public writeValue(obj: any): void {
        if (obj !== '' && obj) {
            this.propagateChange(obj);
            this.value = obj;
        }
    }

    public updateValue(index: number, event: any): void {
        if (event.inputType === 'deleteContentBackward') {
            return;
        }

        if (event.inputType === 'insertFromPaste') {
            this.currIndex = 0;
            this.writeValue(event.target.value);
            const val = event.target.value.split('');
            val.forEach((item: any, i: number) => {
                this.currIndex = i;
                switch (i) {
                    case 0:
                        this.firstInput.nativeElement.value = item;
                        break;
                    case 1:
                        this.secondInput.nativeElement.value = item;
                        break;
                    case 2:
                        this.thirdInput.nativeElement.value = item;
                        break;
                    case 3:
                        this.fourthInput.nativeElement.value = item;
                        break;
                    case 4:
                        this.fifthInput.nativeElement.value = item;
                        break;
                    case 5:
                        this.sixthInput.nativeElement.value = item;
                        break;
                }
            });

            this.handleFocus();

            return;
        }

        if (event.target.value.length > 1) {
            event.target.value = '';
            return;
        }

        const code = this.value.split('');
        code[index] = event.target.value;

        this.currIndex = index;

        if (this.currIndex < 5) {
            this.currIndex += 1;
        }

        this.handleFocus();

        this.writeValue(code.join(''));
    }

    public deleteValue(index: number, event: any): void {
        this.currIndex = index;

        if (event.code === 'Backspace') {
            const code = this.value.split('');
            code[index] = '';

            event.target.value = '';
            if (this.currIndex > 0) {
                this.currIndex -= 1;
            }

            this.writeValue(code.join(''));
        }

        this.handleFocus();
    }

    public handleFocus(): void {
        switch (this.currIndex) {
            case 0:
                this.firstInput.nativeElement.focus();
                break;
            case 1:
                this.secondInput.nativeElement.focus();
                break;
            case 2:
                this.thirdInput.nativeElement.focus();
                break;
            case 3:
                this.fourthInput.nativeElement.focus();
                break;
            case 4:
                this.fifthInput.nativeElement.focus();
                break;
            case 5:
                this.sixthInput.nativeElement.focus();
                break;
        }
    }
}
