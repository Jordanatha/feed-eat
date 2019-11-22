import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
} from '@angular/core';
import { WizardContentDirective } from '@shared/modules/wizard/wizard-content.directive';

@Component({
    selector: 'wizard',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardComponent implements AfterContentInit, OnChanges {
    @Input() public currentStep: number = 1;

    @Output() public stepChanges: EventEmitter<number> = new EventEmitter();

    @ContentChildren(WizardContentDirective) private wizardSteps: QueryList<WizardContentDirective>;

    private activeStep: number;

    public ngAfterContentInit(): void {
        this.setActiveStep(this.currentStep);
    }

    public ngOnChanges(): void {
        if (this.currentStep !== this.activeStep) {
            this.setActiveStep(this.currentStep);
        }
    }

    public setActiveStep(step: number): void {
        const index = step - 1;

        this.activeStep = step;
        this.stepChanges.emit(step);

        if (this.wizardSteps) {
            this.wizardSteps.forEach((wizard: WizardContentDirective, i: number) => {
                if (index === i) {
                    wizard.show();
                } else {
                    wizard.hide();
                }
            });
        }
    }
}
