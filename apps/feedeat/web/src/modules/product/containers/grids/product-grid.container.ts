import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterRedirector } from '@shared/modules/router-redirector/services/router-redirector';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'feedeat-product-grid-container',
    templateUrl: './product-grid.container.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGridContainer {
    public collection: any[] = [
        {
            link: 'assets/images/product-image.jpg',
            title: 'Paket Indonesia 1',
            merchant: 'Nanik Catering',
            price: 'Rp15.000/hari',
        },
        {
            link: 'assets/images/bakmi.jpg',
            title: 'Paket Bakmi Setiap Hari',
            merchant: 'Budi Catering',
            price: 'Rp15.000/hari',
        },
        {
            link: 'assets/images/nasi-rames.jpg',
            title: 'Paket Nasi Setiap Hari',
            merchant: 'Nenek Catering',
            price: 'Rp15.000/hari',
        },
        {
            link: 'assets/images/bento-box.jpg',
            title: 'Paket Japanese',
            merchant: 'Bubu Catering',
            price: 'Rp15.000/hari',
        },
        {
            link: 'assets/images/bihun.jpg',
            title: 'Paket Bihun Setiap Hari',
            merchant: 'Super Biihun',
            price: 'Rp15.000/hari',
        },
    ];

    public constructor(private redirector: RouterRedirector, private activatedRoute: ActivatedRoute) {}

    public redirectDetail(target: string) {
        this.redirector.redirectWithPrev(`./${target}`, this.activatedRoute);
    }
}
