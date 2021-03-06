import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'feedeat-menu-grid',
    templateUrl: './menu.grid.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./menu.grid.scss'],
})
export class MenuGrid {
    @Input() collection: any[];
}
