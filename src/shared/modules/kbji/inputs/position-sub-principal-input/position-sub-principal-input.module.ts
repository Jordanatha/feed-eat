import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { PositionSubPrincipalInput } from './components/position-sub-principal.input';

@NgModule({
    imports: [CommonModule, ComboBoxModule],
    declarations: [PositionSubPrincipalInput],
    exports: [PositionSubPrincipalInput],
})
export class PositionSubPrincipalInputModule {}
