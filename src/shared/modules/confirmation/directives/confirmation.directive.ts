import { Directive, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { Subscriber } from '@ubud/sate';
import { tap } from 'rxjs/operators';
import { ConfirmationService } from '@shared/modules/confirmation/services/confirmation.service';

@Directive({
    selector: '[confirmation]',
})
export class ConfirmationDirective implements OnDestroy {
    @Output() public confirmed: EventEmitter<any>;

    @Input() public confirmationTitle: string;

    public constructor(private subscriber: Subscriber, private service: ConfirmationService) {
        this.confirmed = new EventEmitter<any>();
    }

    @HostListener('click', ['$event'])
    public onClick(event: any): any {
        this.service.confirming(true, this.confirmationTitle);
        this.service.confirmed(false);
        this.subscriber.subscribe(
            this,
            this.service.confirmed$.pipe(
                tap((result: any) => {
                    if (result) {
                        this.confirmed.emit();
                    }
                    this.subscriber.flush(this);
                }),
            ),
        );
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
