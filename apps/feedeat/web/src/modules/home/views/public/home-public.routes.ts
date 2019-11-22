import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePage } from '@feedeat/web/src/modules/home/views/public/pages/home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
];

export const HOME_PUBLIC_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
