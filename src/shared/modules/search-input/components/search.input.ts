import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'search-input',
    templateUrl: './search.input.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchInput),
            multi: true,
        },
    ],
    styleUrls: ['./search.input.scss'],
})
export class SearchInput implements ControlValueAccessor {
    @ViewChildren('keyword') public keyword: FormControl;

    @Input() public nativeClass: any;

    @Input() public width: number;

    @Input() public placeholder: string;

    @Output() public canceled: EventEmitter<any> = new EventEmitter();

    private readonly valueSubject: BehaviorSubject<string> = new BehaviorSubject('');

    public get value$(): Observable<string> {
        return this.valueSubject.asObservable();
    }

    public propagateChange = (_: any) => {};

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public setDisabledState(isDisabled: boolean): void {}

    public writeValue(obj: any): void {
        this.propagateChange(obj);
        this.valueSubject.next(obj);
    }
}
