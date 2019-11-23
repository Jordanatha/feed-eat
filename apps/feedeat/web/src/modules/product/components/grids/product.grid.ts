import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-product-grid',
    templateUrl: './product.grid.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGrid {}
