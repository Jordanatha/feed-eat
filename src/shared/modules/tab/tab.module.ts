import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabPaneComponent } from '@shared/modules/tab/components/tab-pane.component';
import { TabItemComponent } from '@shared/modules/tab/components/tab-item.component';
import { TabContentDirective } from '@shared/modules/tab/directives/tab-content.directive';
import { TabComponent } from '@shared/modules/tab/components/tab.component';
import { TabPaneDirective } from '@shared/modules/tab/directives/tab-pane.directive';
import { NavModule } from '@shared/modules/nav/nav.module';

const COMPONENTS = [TabComponent, TabPaneComponent, TabItemComponent];
const DIRECTIVES = [TabPaneDirective, TabContentDirective];

@NgModule({
    imports: [CommonModule, NavModule, RouterModule],
    declarations: [...COMPONENTS, ...DIRECTIVES],
    exports: [...COMPONENTS, ...DIRECTIVES],
})
export class TabModule {}
