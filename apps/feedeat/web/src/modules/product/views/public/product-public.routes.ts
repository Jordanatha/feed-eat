import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductPage } from '@feedeat/web/src/modules/product/views/public/pages/product.page';
import { ProductDetailPage } from '@feedeat/web/src/modules/product/views/public/pages/product-detail.page';

const routes: Routes = [
    {
        path: '',
        component: ProductPage,
    },
    {
        path: ':product',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'detail',
            },
            {
                path: 'detail',
                component: ProductDetailPage,
            },
        ],
    },
];

export const PRODUCT_PUBLIC_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
