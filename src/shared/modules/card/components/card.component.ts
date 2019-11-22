import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'card',
    template: `
        <ng-content select=".service-overlay-link"></ng-content>
        <ng-content select="card-thumbnail"></ng-content>
        <ng-content select="card-header"></ng-content>
        <ng-content select="card-content"></ng-content>
        <ng-content select="card-footer"></ng-content>
        <ng-content select="card-below-footer"></ng-content>
    `,
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
