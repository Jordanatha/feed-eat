import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-filter-card',
    templateUrl: './filter.card.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./filter.card.scss'],
})
export class FilterCard {}
