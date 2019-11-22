import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WebTemplate } from '@feedeat/web/src/templates/web/components/web.template';

const routes: Routes = [
    {
        path: '',
        component: WebTemplate,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('@feedeat/web/src/modules/home/views/public/home-public.module').then(m => m.FeedeatHomePublicModule),
            },
        ],
    },
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
