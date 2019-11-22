import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCommonModule } from '@shared/modules/common/common.module';
import { ButtonModule, ButtonsModule, DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { DROPDOWN_ACTION_COMPONENTS } from '@shared/modules/dropdown-action/components';

const MODULES: any[] = [CommonModule, SharedCommonModule, ButtonModule, ButtonsModule, DropDownButtonModule];

@NgModule({
    imports: [...MODULES],
    declarations: [...DROPDOWN_ACTION_COMPONENTS],
    exports: [...DROPDOWN_ACTION_COMPONENTS],
})
export class DropdownActionModule {}
