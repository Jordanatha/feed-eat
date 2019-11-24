import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterRedirector } from '@shared/modules/router-redirector/services/router-redirector';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'feedeat-product-grid-container',
    templateUrl: './product-grid.container.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGridContainer {
    public constructor(private redirector: RouterRedirector, private activatedRoute: ActivatedRoute) {}

    public redirectDetail(target: string) {
        this.redirector.redirectWithPrev(`./${target}`, this.activatedRoute);
    }
}
