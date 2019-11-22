import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { PositionInputModule } from '@shared/modules/kbji/inputs/position-input/position-input.module';
import { KBJI_COMPONENTS } from '@shared/modules/kbji/components';
import { PositionDialogService } from '@shared/modules/kbji/services/position-dialog.service';
import { PositionPrincipalInputModule } from '@shared/modules/kbji/inputs/position-principal-input/position-principal-input.module';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '@shared/modules/filter/filter.module';
import { HTTP_INTERCEPTORS, HttpHandler } from '@angular/common/http';
import { CamelResponseTransformerInterceptor, SnakeRequestTransformerInterceptor } from '@ubud/http';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';
import { KbjiApiClientFactory } from '@shared/modules/kbji/clients/api-client.factory';
import { KbjiApiConfig } from '@shared/modules/kbji/clients/config';
import { GridModule } from '@progress/kendo-angular-grid';
import { PositionSubPrincipalInputModule } from '@shared/modules/kbji/inputs/position-sub-principal-input/position-sub-principal-input.module';
import { PositionGroupInputModule } from '@shared/modules/kbji/inputs/position-group-input/position-group-input.module';
import { PositionCategoryInputModule } from '@shared/modules/kbji/inputs/position-category-input/position-category-input.module';

const MODULES: any[] = [
    CommonModule,
    DialogModule,
    SearchInputModule,
    FormsModule,
    FilterModule,
    PositionInputModule,
    PositionPrincipalInputModule,
    GridModule,
    PositionSubPrincipalInputModule,
    PositionGroupInputModule,
    PositionCategoryInputModule,
];

@NgModule({
    declarations: [...KBJI_COMPONENTS],
    imports: [...MODULES],
    exports: [PositionInputModule, PositionPrincipalInputModule, ...KBJI_COMPONENTS],
    providers: [PositionDialogService],
})
export class KbjiModule {
    public static forRoot(endpoint: string): ModuleWithProviders {
        return {
            ngModule: KbjiModule,
            providers: [
                {
                    provide: KbjiApiConfig,
                    useValue: {
                        endpoint: endpoint,
                    },
                },
                {
                    provide: KbjiApiClient,
                    useFactory: KbjiApiClientFactory,
                    deps: [HttpHandler, KbjiApiConfig],
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: SnakeRequestTransformerInterceptor,
                    multi: true,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: CamelResponseTransformerInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
