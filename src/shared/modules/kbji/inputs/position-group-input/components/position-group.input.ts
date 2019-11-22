import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscriber } from '@ubud/sate';
import { Observable, Subscription } from 'rxjs';
import { KbjiResourceInput } from '@shared/modules/kbji/inputs/resource.input';
import { PositionGroupInputService } from '@shared/modules/kbji/inputs/position-group-input/services/position-group-input.service';
import { PositionGroup } from '@shared/modules/kbji/models/position-group';

@Component({
    selector: 'position-group-input',
    templateUrl: './position-group.input.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PositionGroupInput),
            multi: true,
        },
        PositionGroupInputService,
    ],
})
export class PositionGroupInput extends KbjiResourceInput<PositionGroup> implements OnDestroy {
    protected searchField: string = 'name';
    protected valueField: string = 'id';

    @Input()
    public set subPrincipal(subPrincipal: string) {
        if (subPrincipal) {
            this.service.changeQueries({ position_sub_principal: subPrincipal });
        }
    }

    public constructor(private subscriber: Subscriber, service: PositionGroupInputService) {
        super(service);
    }

    protected checking(obj: any): boolean {
        return obj && obj instanceof PositionGroup;
    }

    protected subscribe(project: Observable<any>): Subscription {
        return this.subscriber.subscribe(this, project);
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
