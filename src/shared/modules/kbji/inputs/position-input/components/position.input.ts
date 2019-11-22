import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscriber } from '@ubud/sate';
import { BehaviorSubject, forkJoin, Observable, Subscription } from 'rxjs';
import { KbjiResourceInput } from '@shared/modules/kbji/inputs/resource.input';
import { PositionInputService } from '@shared/modules/kbji/inputs/position-input/services/position-input.service';
import { Position } from '@shared/modules/kbji/models/position';
import { PositionDialogService } from '@shared/modules/kbji/services/position-dialog.service';
import { filter, tap } from 'rxjs/operators';

@Component({
    selector: 'position-input',
    templateUrl: './position.input.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PositionInput),
            multi: true,
        },
        PositionInputService,
    ],
    styleUrls: ['./position.input.scss'],
})
export class PositionInput extends KbjiResourceInput<Position> implements OnInit, OnDestroy {
    protected searchField: string = 'name';
    protected valueField: string = 'id';

    private readonly valueSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    public constructor(private subscriber: Subscriber, service: PositionInputService, private dialogService: PositionDialogService) {
        super(service);
    }

    public get value$(): Observable<any> {
        return this.valueSubject.asObservable();
    }

    public toggle(open: boolean): void {
        if (!this.disabled) {
            this.dialogService.toggle(open);
        }
    }

    protected checking(obj: any): boolean {
        return obj && obj instanceof Position;
    }

    protected subscribe(project: Observable<any>): Subscription {
        return this.subscriber.subscribe(this, project);
    }

    public writeValue(obj: any): void {
        this.valueSubject.next(null);

        if (this.checking(obj)) {
            this.value = obj;
            this.valueSubject.next(obj);

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

    public ngOnInit(): void {
        this.valueSubject.next(null);

        this.subscriber.subscribe(
            this,
            this.dialogService.selected$.pipe(
                tap((data: Position) => {
                    if (data && data instanceof Position) {
                        this.handleChange(data);
                    }
                }),
            ),
        );
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
