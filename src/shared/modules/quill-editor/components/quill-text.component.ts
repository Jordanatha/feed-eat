import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'quill-text',
    templateUrl: './quill-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => QuillTextComponent),
            multi: true,
        },
    ],
    styleUrls: ['./quill-text.component.scss'],
})
export class QuillTextComponent implements ControlValueAccessor {
    @Input() public placeholder: string;

    public quilEditorConfig: any = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],

            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],

            [{ color: [] }, { background: [] }],
            [{ align: [] }],

            ['link'],
        ],
    };

    public disabled: boolean;
    public value: any;

    public propagateChange = (_: any) => {};

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public writeValue(obj: any): void {
        if (obj !== '' && obj && obj.html) {
            this.propagateChange(obj.html);
            this.value = obj.html;
        } else if (typeof obj === 'string') {
            this.value = obj;
        }
    }
}
