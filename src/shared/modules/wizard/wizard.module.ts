import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepComponent } from '@shared/modules/wizard/wizard-step.component';
import { WizardContentDirective } from '@shared/modules/wizard/wizard-content.directive';
import { WizardComponent } from '@shared/modules/wizard/wizard.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WizardStepComponent, WizardContentDirective, WizardComponent],
    exports: [WizardStepComponent, WizardContentDirective, WizardComponent],
})
export class WizardModule {}
