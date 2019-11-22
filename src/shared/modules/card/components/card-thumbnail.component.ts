import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'card-thumbnail',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardThumbnailComponent {}
