import { ContentChild, EventEmitter, Input, OnDestroy, Output, TemplateRef } from '@angular/core';
import { Subscriber } from '@ubud/sate';
import { Collection } from '@shared/types/collection';
import { DataGridItemActionDirective } from '@shared/modules/data-grid/directives/data-grid-item-action.directive';

export abstract class DataGridCollectionComponent<T> implements OnDestroy {
    @Input('collection') public collection: Collection<T>;

    @ContentChild(DataGridItemActionDirective, { read: TemplateRef, static: false })
    public itemActionTemplate;

    @Output() public detailClicked: EventEmitter<any>;

    protected constructor(protected subscriber: Subscriber) {
        this.detailClicked = new EventEmitter<any>();
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
