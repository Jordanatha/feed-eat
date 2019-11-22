import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfirmationService } from '@shared/modules/confirmation/services/confirmation.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'confirmation-dialog',
    template: `
        <kendo-dialog title="Konfirmasi" *ngIf="(confirming$ | async)" [minWidth]="250" [width]="400">
            <div class="px-4 pt-2 pb-4">
                <div class="d-flex align-items-center">
                    <i class="fa fa-exclamation-triangle text-warning font-size-34 mr-4"></i>
                    <p class="font-size-14 font-weight-500">
                        {{ title$ | async }}
                    </p>
                </div>
            </div>

            <kendo-dialog-actions>
                <button type="button" class="btn btn-primary" (click)="confirmed()">
                    Lanjutkan
                </button>
                <a class="btn btn-bare ml-2" (click)="close()">Batal</a>
            </kendo-dialog-actions>
        </kendo-dialog>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
    public confirming$: Observable<boolean>;
    public title$: Observable<string>;

    public constructor(private service: ConfirmationService) {
        this.confirming$ = this.service.confirming$;
        this.title$ = this.service.title$;
    }

    public confirmed(): void {
        this.service.confirmed(true);
        this.service.confirming(false);
    }

    public close(): void {
        this.service.confirmed(false);
        this.service.confirming(false);
    }
}
