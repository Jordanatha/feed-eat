import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupSidebarComponent } from '@shared/modules/popup-sidebar/popup-sidebar.component';
import { PopupSidebarDirective } from '@shared/modules/popup-sidebar/popup-sidebar.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [PopupSidebarComponent, PopupSidebarDirective],
    exports: [PopupSidebarComponent, PopupSidebarDirective],
})
export class PopupSidebarModule {}
