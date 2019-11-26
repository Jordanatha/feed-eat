import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginPage } from '@feedeat/web/src/modules/auth/views/landing/pages/login.page';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPage,
    },
];

export const AUTH_LANDING_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
