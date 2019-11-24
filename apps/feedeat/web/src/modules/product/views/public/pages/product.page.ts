import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-product-page',
    templateUrl: './product.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./product.page.scss'],
})
export class ProductPage {
    public selectedMealFilter: string = 'mealbox';

    public setSelectedMealFilter(target: string): void {
        this.selectedMealFilter = target;
    }
}
