import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-product-detail-page',
    templateUrl: './product-detail.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage {}
