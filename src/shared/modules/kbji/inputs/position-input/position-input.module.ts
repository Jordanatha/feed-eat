import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionInput } from '@shared/modules/kbji/inputs/position-input/components/position.input';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [PositionInput],
    exports: [PositionInput],
})
export class PositionInputModule {}
