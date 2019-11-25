import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataGridCollectionComponent } from '@shared/modules/data-grid/components/data-grid-collection.component';
import { Product } from '@feedeat/product/models/product';
import { Subscriber } from '@ubud/sate';

@Component({
    selector: 'feedeat-product-grid',
    templateUrl: './product.grid.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./product.grid.scss'],
})
export class ProductGrid extends DataGridCollectionComponent<Product> {
    @Input() public products: any;
    public constructor(subscriber: Subscriber) {
        super(subscriber);
    }
}
