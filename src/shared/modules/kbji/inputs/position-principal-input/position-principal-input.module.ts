import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { PositionPrincipalInput } from '@shared/modules/kbji/inputs/position-principal-input/components/position-principal.input';

@NgModule({
    imports: [CommonModule, ComboBoxModule],
    declarations: [PositionPrincipalInput],
    exports: [PositionPrincipalInput],
})
export class PositionPrincipalInputModule {}
