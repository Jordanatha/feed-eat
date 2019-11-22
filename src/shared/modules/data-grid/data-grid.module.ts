import { NgModule } from '@angular/core';
import { CardModule } from '@shared/modules/card/card.module';
import { UbudFormModule } from '@ubud/form';
import { UbudLoaderModule } from '@ubud/loader';
import { RouterModule } from '@angular/router';
import { DATA_GRID_COMPONENTS } from '@shared/modules/data-grid/components';
import { DATA_GRID_CONTAINERS } from '@shared/modules/data-grid/containers';
import { DATA_GRID_DIRECTIVES } from '@shared/modules/data-grid/directives';

const MODULES: any[] = [CardModule, UbudFormModule, UbudLoaderModule, RouterModule];

@NgModule({
    declarations: [...DATA_GRID_COMPONENTS, ...DATA_GRID_CONTAINERS, ...DATA_GRID_DIRECTIVES],
    imports: [...MODULES],
    exports: [...DATA_GRID_COMPONENTS, ...DATA_GRID_CONTAINERS, ...DATA_GRID_DIRECTIVES],
})
export class DataGridModule {}
