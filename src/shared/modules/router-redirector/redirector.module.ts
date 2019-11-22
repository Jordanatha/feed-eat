import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterRedirectorConfig } from '@shared/modules/router-redirector/common/router-redirector.config';
import { CommonModule } from '@angular/common';
import { RouterRedirectorLinkDirective } from '@shared/modules/router-redirector/directives/router-redirector-link.directive';
import { RouterRedirectorDirective } from '@shared/modules/router-redirector/directives/router-redirector.directive';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [RouterRedirectorLinkDirective, RouterRedirectorDirective],
    exports: [RouterRedirectorLinkDirective, RouterRedirectorDirective],
})
export class RouterRedirectorModule {
    public static forRoot(config: Partial<RouterRedirectorConfig> = {}): ModuleWithProviders {
        return {
            ngModule: RouterRedirectorModule,
            providers: [
                {
                    provide: RouterRedirectorConfig,
                    useValue: {
                        redirectKey: config.redirectKey || 'previousUrl',
                    },
                },
            ],
        };
    }
}
