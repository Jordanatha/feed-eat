import { EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { catchError, filter, first, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpUtil } from '@shared/utils/http.util';
import { KbjiResourceInputService } from '@shared/modules/kbji/inputs/resource-input.service';

export abstract class KbjiResourceInput<T> implements ControlValueAccessor {
    @Input()
    public set queries(params: any) {
        if (params) {
            this.service.changeQueries(params);
        }
    }

    @Input() public nativeClass: any;

    @Input() public cancelable: boolean;

    @Input() public placeholder: string;

    @Input('readonly')
    public set _readonly(readonly: boolean) {
        this.disabled = readonly;
    }

    @Output() public changed: EventEmitter<T>;

    public data$: Observable<any>;
    public value: any;
    public disabled: boolean;
    public readonly: boolean;

    protected abstract searchField: string;
    protected abstract valueField: string;

    protected constructor(public service: KbjiResourceInputService<T>) {
        this.changed = new EventEmitter<T>();
        this.disabled = false;
        this.data$ = this.service.asObservable();
        this.cancelable = true;
    }

    public propagateChange = (_: any) => {};

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public writeValue(obj: any): void {
        if (this.checking(obj)) {
            this.value = obj;

            if (Array.isArray(obj)) {
                const data = obj.map((item: any) => this.parseValueField(item));
                this.propagateChange(data);
                this.changed.emit(this.value);
            } else {
                let value = this.value;

                if (this.parseValueField(this.value)) {
                    value = this.parseValueField(this.value);
                }

                this.propagateChange(value);
                this.changed.emit(this.value);
            }
        } else {
            if (obj && '' !== obj && !Array.isArray(obj)) {
                this.subscribe(
                    this.service.fetchById(obj).pipe(
                        filter(data => data && null !== data['id']),
                        tap(x => {
                            this.handleFilter(this.parseSearchField(x));
                            this.handleChange(x);
                        }),
                    ),
                );
            } else if (Array.isArray(obj)) {
                const projects: any[] = obj.map((item: any) => {
                    return this.service.fetchById(item).pipe(filter(data => data && null !== data['id']));
                });
                this.subscribe(
                    forkJoin(projects).pipe(
                        tap(results => {
                            results.forEach((item: any) => {
                                this.handleFilter(this.parseSearchField(item));
                            });
                            this.handleChange(results);
                        }),
                    ),
                );
            } else {
                this.value = undefined;
                this.propagateChange('');
                this.changed.emit(null);
            }
        }
    }

    public handleFilter(value: any): void {
        this.service._loading.next(true);

        this.subscribe(
            this.service.fetch(value).pipe(
                first(),
                tap(x => {
                    this.service.next(x);
                    this.service._loading.next(false);
                }),
                catchError((e: HttpErrorResponse) => {
                    return of(HttpUtil.errorExtractor(e)).pipe(
                        tap((message: string) => {
                            this.service._loading.next(false);
                        }),
                    );
                }),
            ),
        );
    }

    public handleChange(event: any): void {
        this.writeValue(event);
    }

    protected abstract checking(obj: any): boolean;

    protected abstract subscribe(project: Observable<any>): Subscription;

    protected parseSearchField(data: any): any {
        return this.searchField.split('.').reduce((acc, cur) => acc[cur], data) || '';
    }

    protected parseValueField(data: any): any {
        return this.valueField.split('.').reduce((acc, cur) => acc[cur], data) || '';
    }
}
