import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
    selector: 'clipboard',
    templateUrl: './clipboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./clipboard.component.scss'],
})
export class ClipboardComponent {
    @Input() public content: string;
    @Input() public color: string = 'primary';
    @Input() public big: string;

    public isCopied$: Observable<boolean>;

    public constructor() {
        this.isCopied$ = of(false);
    }

    public onCopied(): void {
        this.isCopied$ = merge(
            this.isCopied$.pipe(map(_ => true)),
            this.isCopied$.pipe(
                delay(1000),
                map(_ => false),
            ),
        );
    }
}
