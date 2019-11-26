import { NgModule } from '@angular/core';
import { AUTH_COMPONENTS } from '@feedeat/web/src/modules/auth/components/index';
import { CommonModule } from '@angular/common';
import { UbudFormModule } from '@ubud/form';
import { FormsModule } from '@angular/forms';

const MODULES: any[] = [CommonModule, UbudFormModule, FormsModule];

@NgModule({
    declarations: [...AUTH_COMPONENTS],
    imports: [...MODULES],
    exports: [...AUTH_COMPONENTS],
})
export class FeedeatAuthComponentModule {}
