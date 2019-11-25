import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
    selector: 'feedeat-product-detail-page',
    templateUrl: './product-detail.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage {
    public quantity: number = 0;
    public today: Date = new Date();

    public modifyQuantity(operation: string): void {
        if (operation === '+') {
            this.quantity++;
        } else if (operation === '-') {
            this.quantity--;
        }
    }
}
