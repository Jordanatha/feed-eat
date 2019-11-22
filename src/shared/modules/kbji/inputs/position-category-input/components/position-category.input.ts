import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscriber } from '@ubud/sate';
import { Observable, Subscription } from 'rxjs';
import { KbjiResourceInput } from '@shared/modules/kbji/inputs/resource.input';
import { PositionCategory } from '@shared/modules/kbji/models/position-category';
import { PositionCategoryInputService } from '@shared/modules/kbji/inputs/position-category-input/services/position-category-input.service';

@Component({
    selector: 'position-category-input',
    templateUrl: './position-category.input.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PositionCategoryInput),
            multi: true,
        },
        PositionCategoryInputService,
    ],
})
export class PositionCategoryInput extends KbjiResourceInput<PositionCategory> implements OnDestroy {
    protected searchField: string = 'name';
    protected valueField: string = 'id';

    @Input()
    public set group(group: string) {
        if (group) {
            this.service.changeQueries({ position_group: group });
        }
    }

    public constructor(private subscriber: Subscriber, service: PositionCategoryInputService) {
        super(service);
    }

    protected checking(obj: any): boolean {
        return obj && obj instanceof PositionCategory;
    }

    protected subscribe(project: Observable<any>): Subscription {
        return this.subscriber.subscribe(this, project);
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
