import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicePickerModule } from '@naker/service-picker';
import { CommonModule } from '@angular/common';
import { UserControlModule } from '@naker/user-control';
import { NavbarModule } from '@shared/modules/navbar/navbar.module';
import { WEB_TEMPLATE_COMPONENTS } from '@feedeat/web/src/templates/web/components';

@NgModule({
    imports: [CommonModule, RouterModule, ServicePickerModule, UserControlModule, NavbarModule],
    declarations: [...WEB_TEMPLATE_COMPONENTS],
    exports: [...WEB_TEMPLATE_COMPONENTS],
})
export class FeedeatWebTemplateModule {}
