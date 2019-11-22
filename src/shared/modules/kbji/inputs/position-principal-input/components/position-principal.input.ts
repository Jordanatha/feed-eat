import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscriber } from '@ubud/sate';
import { Observable, Subscription } from 'rxjs';
import { KbjiResourceInput } from '@shared/modules/kbji/inputs/resource.input';
import { PositionPrincipalInputService } from '@shared/modules/kbji/inputs/position-principal-input/services/position-principal-input.service';
import { PositionPrincipal } from '@shared/modules/kbji/models/position-principal';

@Component({
    selector: 'position-principal-input',
    templateUrl: './position-principal.input.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PositionPrincipalInput),
            multi: true,
        },
        PositionPrincipalInputService,
    ],
})
export class PositionPrincipalInput extends KbjiResourceInput<PositionPrincipal> implements OnDestroy {
    protected searchField: string = 'name';
    protected valueField: string = 'id';

    public constructor(private subscriber: Subscriber, service: PositionPrincipalInputService) {
        super(service);
    }

    protected checking(obj: any): boolean {
        return obj && obj instanceof PositionPrincipal;
    }

    protected subscribe(project: Observable<any>): Subscription {
        return this.subscriber.subscribe(this, project);
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
