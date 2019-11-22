import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { PositionGroupInput } from '@shared/modules/kbji/inputs/position-group-input/components/position-group.input';

@NgModule({
    imports: [CommonModule, ComboBoxModule],
    declarations: [PositionGroupInput],
    exports: [PositionGroupInput],
})
export class PositionGroupInputModule {}
