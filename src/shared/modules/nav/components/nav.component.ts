import { Component, Input, OnInit } from '@angular/core';
import { HorizontalAlignment, VerticalAlignment } from '@shared/enums/alignment';

@Component({
    selector: 'naker-nav',
    template: `
        <div [id]="id" [ngClass]="classes">
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }
        `,
    ],
})
export class NavComponent implements OnInit {
    @Input()
    public set navClasses(navClasses: string) {
        this.classes = [...this.classes, ...navClasses.split(' ')];
    }

    @Input() public hAlign: HorizontalAlignment = HorizontalAlignment.LEFT;
    @Input() public id: string = '';
    @Input() public vAlign: VerticalAlignment = VerticalAlignment.ROW;

    public classes: string[] = ['nav'];

    public ngOnInit(): void {
        if (this.hAlign === HorizontalAlignment.CENTER) {
            this.classes.push('justify-content-center');
        } else if (this.hAlign === HorizontalAlignment.RIGHT) {
            this.classes.push('justify-content-end');
        }

        if (this.vAlign === VerticalAlignment.COLUMN) {
            this.classes.push('flex-column');
        }
    }
}
