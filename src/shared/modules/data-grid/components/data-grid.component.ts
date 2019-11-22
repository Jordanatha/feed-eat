import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { GridData } from '@shared/types/grid';
import { DataGridItemActionDirective } from '@shared/modules/data-grid/directives/data-grid-item-action.directive';
import { PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'data-grid',
    templateUrl: './data-grid.component.html',
    styleUrls: ['./data-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataGridComponent<T> {
    @Input('collection') public collection: GridData<T>;
    @Input('loading') public loading: boolean;

    @ContentChild(DataGridItemActionDirective, { read: TemplateRef, static: false })
    public itemActionTemplate;

    @Output() public detailClicked: EventEmitter<any> = new EventEmitter();

    @Output() public pageChanged: EventEmitter<any> = new EventEmitter();

    public onPageChange({ skip, take }: PageChangeEvent): void {
        this.pageChanged.emit(skip / take + 1);
    }
}
