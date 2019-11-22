import { ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { DataGridItemActionDirective } from '@shared/modules/data-grid/directives/data-grid-item-action.directive';

export class DataGridArrayComponent<T> {
    @Input('collection') public collection: T[];
    @Input('loading') public loading: boolean;

    @ContentChild(DataGridItemActionDirective, { read: TemplateRef, static: false })
    public itemActionTemplate;

    @Output() public detailClicked: EventEmitter<any> = new EventEmitter();
}
