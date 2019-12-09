import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavComponent } from '@shared/modules/nav/components/nav.component';
import { NavItemDirective } from '@shared/modules/nav/directives/nav-item.directive';
import { NavLinkDirective } from '@shared/modules/nav/directives/nav-link.directive';
import { NavDropdownDirective } from '@shared/modules/nav/directives/nav-dropdown.directive';
import { NavTogglerDirective } from '@shared/modules/nav/directives/nav-toggler.directive';

const COMPONENTS = [NavComponent];
const DIRECTIVES = [NavItemDirective, NavLinkDirective, NavDropdownDirective, NavTogglerDirective];

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [...COMPONENTS, ...DIRECTIVES],
})
export class NavModule {}
