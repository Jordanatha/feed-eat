import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'card-footer',
    template: `<ng-content></ng-content>`,
    styles: [
        `
            :host {
                margin-top: auto;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {}
