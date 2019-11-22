import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Nav } from '@shared/modules/nav/models/nav.model';

@Component({
    selector: 'tab-item',
    template: `
        <a [ngClass]="{'tab-active': i == currentIndex}"
           class="tab-item"
           (click)="changeIndex(i)"
           [routerLink]="item.link"
           *ngFor="let item of tabs; let i = index">
            {{ item.title }}
        </a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./tab-item.component.scss'],
})
export class TabItemComponent {
    @Input() public currentIndex: number = 0;

    @Input() public tabs: Nav[] = [];

    @Output() public tabChanged: EventEmitter<number> = new EventEmitter();

    public changeIndex(index: number): void {
        this.tabChanged.emit(index);
    }
}
