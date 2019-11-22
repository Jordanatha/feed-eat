import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscriber } from '@ubud/sate';
import { Observable, Subscription } from 'rxjs';
import { KbjiResourceInput } from '@shared/modules/kbji/inputs/resource.input';
import { PositionSubPrincipal } from '@shared/modules/kbji/models/position-sub-principal';
import { PositionSubPrincipalInputService } from '@shared/modules/kbji/inputs/position-sub-principal-input/services/position-sub-principal-input.service';

@Component({
    selector: 'position-sub-principal-input',
    templateUrl: './position-sub-principal.input.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PositionSubPrincipalInput),
            multi: true,
        },
        PositionSubPrincipalInputService,
    ],
})
export class PositionSubPrincipalInput extends KbjiResourceInput<PositionSubPrincipal> implements OnDestroy {
    protected searchField: string = 'name';
    protected valueField: string = 'id';

    @Input()
    public set principal(positionPrincipal: string) {
        if (positionPrincipal) {
            this.service.changeQueries({ position_principal: positionPrincipal });
        }
    }

    public constructor(private subscriber: Subscriber, service: PositionSubPrincipalInputService) {
        super(service);
    }

    protected checking(obj: any): boolean {
        return obj && obj instanceof PositionSubPrincipal;
    }

    protected subscribe(project: Observable<any>): Subscription {
        return this.subscriber.subscribe(this, project);
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
