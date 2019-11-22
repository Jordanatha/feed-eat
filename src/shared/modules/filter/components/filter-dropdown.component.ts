import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'filter-dropdown',
    templateUrl: './filter-dropdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./filter-dropdown.component.scss'],
})
export class FilterDropdownComponent {
    @Input() public rtl: boolean;

    @Input() public compact: boolean;

    public show: boolean = false;
}
