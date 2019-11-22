import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGINATION_COMPONENTS } from '@shared/modules/pagination/components';

@NgModule({
    imports: [CommonModule],
    declarations: [...PAGINATION_COMPONENTS],
    exports: [...PAGINATION_COMPONENTS],
})
export class PaginationModule {}
