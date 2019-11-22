import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-testimony-grid',
    templateUrl: './testimony.grid.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./testimony.grid.scss'],
})
export class TestimonyGrid {}
