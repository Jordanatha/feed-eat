import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductPage } from '@feedeat/web/src/modules/product/views/public/pages/product.page';

const routes: Routes = [
    {
        path: '',
        component: ProductPage,
    },
];

export const PRODUCT_PUBLIC_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
