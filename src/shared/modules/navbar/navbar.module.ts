import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavModule } from '@shared/modules/nav/nav.module';
import { NavbarComponent } from '@shared/modules/navbar/components/navbar.component';
import { NavbarDirective } from '@shared/modules/navbar/directives/navbar.directive';
import { NavbarTogglerDirective } from '@shared/modules/navbar/directives/navbar-toggler.directive';
import { NavbarCollapseDirective } from '@shared/modules/navbar/directives/navbar-collapse.directive';

const COMPONENTS = [NavbarComponent];
const DIRECTIVES = [NavbarDirective, NavbarCollapseDirective, NavbarTogglerDirective];

@NgModule({
    imports: [CommonModule, NavModule],
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [...COMPONENTS, ...DIRECTIVES],
})
export class NavbarModule {}
