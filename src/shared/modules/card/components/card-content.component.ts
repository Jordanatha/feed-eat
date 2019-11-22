import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'card-content',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContentComponent {}
