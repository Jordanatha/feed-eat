import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'feedeat-what-to-eat-grid',
    templateUrl: './what-to-eat.grid.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./what-to-eat.grid.scss'],
})
export class WhatToEatGrid {
    @Input() public isHomePage: boolean;
}
