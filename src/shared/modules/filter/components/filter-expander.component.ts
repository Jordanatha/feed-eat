import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { FilterExpanderSubtitleDirective } from '@shared/modules/filter/directives/filter-expander-subtitle.directive';

@Component({
    selector: 'filter-expander',
    templateUrl: './filter-expander.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./filter-expander.component.scss'],
})
export class FilterExpanderComponent {
    @Input() public label: string;

    @Input() public subtitle: string;

    @Output() public resetClicked: EventEmitter<any> = new EventEmitter();

    @ContentChild(FilterExpanderSubtitleDirective, { static: false })
    public subtitleDirective: FilterExpanderSubtitleDirective;

    public show: boolean = false;

    public checkSubtitle(subtitle: any): boolean {
        return typeof subtitle !== 'undefined';
    }
}
