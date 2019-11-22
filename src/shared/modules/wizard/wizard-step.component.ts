import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface WizardStep {
    label: string;
    icon?: string;
}

@Component({
    selector: 'wizard-step',
    template: `
        <a
            [ngClass]="{ 'step-done': i + 1 < currentStep, 'step-active': i + 1 == currentStep }"
            class="wizard-step-item"
            *ngFor="let step of steps; let i = index"
            (click)="handleUpdateStep(i + 1)"
        >
            <span class="wizard-step-number">
                <span class="wizard-step-number-value k-icon k-i-check" *ngIf="i + 1 < currentStep; else showNumber"></span>
                <ng-template #showNumber>
                    <span class="wizard-step-number-value">{{ i + 1 }}</span>
                </ng-template>
            </span>

            <label class="wizard-step-label">{{ step }}</label>
        </a>
    `,
    styleUrls: ['./wizard-step.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardStepComponent {
    @Input() public currentStep: number = 1;

    @Input() public steps: String[] = [];

    @Output() public stepUpdated: EventEmitter<number> = new EventEmitter();

    public handleUpdateStep(step: number): void {
        if (step !== this.currentStep) {
            this.stepUpdated.emit(step);
        }
    }
}
