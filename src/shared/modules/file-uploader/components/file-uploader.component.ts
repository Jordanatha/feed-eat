import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'file-uploader',
    templateUrl: './file-uploader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileUploaderComponent),
            multi: true,
        },
    ],
    styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements ControlValueAccessor {
    @Output() public changed: EventEmitter<File>;

    @Input() public hideFile: boolean;
    @Input() public accept: any;

    @ViewChildren('imageFileInput') public imageFileInput: ElementRef;

    public imageFile: any;

    public constructor() {
        this.changed = new EventEmitter<File>();
    }

    public propagateChange = (_: any) => {};

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public setDisabledState(isDisabled: boolean): void {}

    public writeValue(obj: any): void {
        if (obj instanceof File) {
            this.changed.emit(obj);
            this.propagateChange(obj);
        }
    }

    public change(event: any): void {
        const { files } = event.target;

        if (files.length > 0) {
            const file = files[0];

            this.imageFile = file;
            this.writeValue(file);
        }
    }

    public openFile(): void {
        this.imageFileInput.nativeElement.click();
    }
}
