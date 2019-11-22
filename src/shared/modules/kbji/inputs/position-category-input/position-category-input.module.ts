import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { PositionCategoryInput } from '@shared/modules/kbji/inputs/position-category-input/components/position-category.input';

@NgModule({
    imports: [CommonModule, ComboBoxModule],
    declarations: [PositionCategoryInput],
    exports: [PositionCategoryInput],
})
export class PositionCategoryInputModule {}
