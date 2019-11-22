import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./image-uploader.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ImageUploaderComponent),
            multi: true,
        },
    ],
})
export class ImageUploaderComponent implements ControlValueAccessor {
    @Input() public path: string;
    @Output() public changed: EventEmitter<File>;

    public pathSubject: BehaviorSubject<string>;
    public tempPathSubject: BehaviorSubject<string>;
    public tempPathLoadingSubject: BehaviorSubject<boolean>;
    public tempPathErrorSubject: BehaviorSubject<string>;

    public constructor() {
        this.changed = new EventEmitter<File>();
        this.pathSubject = new BehaviorSubject<string>('');
        this.tempPathSubject = new BehaviorSubject<string>('');
        this.tempPathLoadingSubject = new BehaviorSubject<boolean>(false);
        this.tempPathErrorSubject = new BehaviorSubject<string>('');
    }

    public get path$(): Observable<string> {
        return this.pathSubject.asObservable();
    }

    public get tempPath$(): Observable<string> {
        return this.tempPathSubject.asObservable();
    }

    public get tempPathLoading$(): Observable<boolean> {
        return this.tempPathLoadingSubject.asObservable();
    }

    public get tempPathError$(): Observable<string> {
        return this.tempPathErrorSubject.asObservable();
    }

    public propagateChange = (_: any) => {};

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public setDisabledState(isDisabled: boolean): void {}

    public writeValue(obj: any): void {
        if (obj !== '' && obj && typeof obj === 'string') {
            this.pathSubject.next(obj);
        } else if (obj instanceof File) {
            this.changed.emit(obj);
            this.propagateChange(obj);
        }
    }

    public change(event: any): void {
        const { files } = event.target;

        if (files.length > 0) {
            const file = files[0];

            this.writeValue(file);

            const read = new FileReader();
            this.tempPathLoadingSubject.next(true);
            this.tempPathErrorSubject.next('');
            read.onload = (res: any) => {
                this.tempPathLoadingSubject.next(false);
                this.tempPathSubject.next(res.target.result);
            };
            read.onerror = () => {
                this.tempPathLoadingSubject.next(false);
                this.tempPathErrorSubject.next('Tidak dapat mengunggah gambar');
            };
            read.readAsDataURL(file);
        }
    }
}
