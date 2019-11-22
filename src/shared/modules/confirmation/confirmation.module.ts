import { NgModule } from '@angular/core';
import { CONFIRMATION_DIRECTIVES } from '@shared/modules/confirmation/directives';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { CONFIRMATION_COMPONENTS } from '@shared/modules/confirmation/components';

const MODULES: any[] = [CommonModule, DialogModule];

@NgModule({
    imports: [...MODULES],
    declarations: [...CONFIRMATION_DIRECTIVES, ...CONFIRMATION_COMPONENTS],
    exports: [DialogModule, ...CONFIRMATION_DIRECTIVES, ...CONFIRMATION_COMPONENTS],
})
export class ConfirmationModule {}
