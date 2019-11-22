import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbService } from './services/breadcrumb.service';
import { BreadcrumbComponent } from '@shared/modules/breadcrumb/components/breadcrumb.component';

const COMPONENTS = [BreadcrumbComponent];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [...COMPONENTS],
    providers: [BreadcrumbService],
    exports: [...COMPONENTS],
})
export class BreadcrumbModule {}
