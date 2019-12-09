import { NgModule } from '@angular/core';
import { AUTH_COMPONENTS } from '@feedeat/web/src/modules/auth/components/index';
import { CommonModule } from '@angular/common';
import { UbudFormModule } from '@ubud/form';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';

const MODULES: any[] = [CommonModule, UbudFormModule, FormsModule, InputsModule, DatePickerModule];

@NgModule({
    declarations: [...AUTH_COMPONENTS],
    imports: [...MODULES],
    exports: [...AUTH_COMPONENTS],
})
export class FeedeatAuthComponentModule {}
