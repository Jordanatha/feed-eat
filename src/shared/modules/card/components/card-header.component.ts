import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'card-header',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent {}
