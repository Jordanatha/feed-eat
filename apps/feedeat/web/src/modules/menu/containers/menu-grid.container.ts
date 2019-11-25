import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-menu-grid-container',
    templateUrl: './menu-grid.container.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuGridContainer {
    public menus: any[] = [
        {
            link: 'assets/images/product-image.jpg',
            day: 'Senin, 26 November 2019',
            title: 'Nasi Rendang Super',
            description: 'Nasi putih dengan rendang dan bumbunya super gurih cocok untuk menemani siang anda :)',
        },
        {
            link: 'assets/images/bakmi.jpg',
            day: 'Selasa, 27 November 2019',
            title: 'Bakmi Ayam Enak',
            description: 'Bakmi Ayam super dengan ayam kampung yang segar',
        },
        {
            link: 'assets/images/nasi-rames.jpg',
            day: 'Rabu, 28 November 2019',
            title: 'Nasi Rames Super',
            description: 'Nasi Rames super dengan keasinan yang pas untuk dirimu',
        },
        {
            link: 'assets/images/bento-box.jpg',
            day: 'Kamis, 29 November 2019',
            title: 'Bento Box Super',
            description: 'Bento box dengan ayam katsu favoritmu',
        },
        {
            link: 'assets/images/bihun.jpg',
            day: 'Jumat, 30 November 2019',
            title: 'Bihun Super',
            description: 'Bihun goreng super untuk temani siangmu',
        },
    ];
}
