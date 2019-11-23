import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-product-grid-container',
    templateUrl: './product-grid.container.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGridContainer {}
