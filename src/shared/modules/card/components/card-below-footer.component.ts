import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'card-below-footer',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBelowFooterComponent {}
