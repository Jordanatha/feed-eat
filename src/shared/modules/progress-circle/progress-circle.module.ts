import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROGRESS_CIRCLE_COMPONENTS } from '@shared/modules/progress-circle/components';

@NgModule({
    imports: [CommonModule],
    declarations: [...PROGRESS_CIRCLE_COMPONENTS],
    exports: [...PROGRESS_CIRCLE_COMPONENTS],
})
export class ProgressCircleModule {}
