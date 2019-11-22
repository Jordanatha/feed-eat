import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownActionComponent } from '@shared/modules/dropdown-action/components/dropdown-action.component';

@Component({
    selector: 'dropdown-action-rtl',
    template: `
        <kendo-dropdownbutton class="k-bare float-right" [icon]="'more-vertical'"
                              kendo-rtl
                              (itemClick)="changed.emit($event)"
                              [data]="actions">
            <ng-template kendoDropDownButtonItemTemplate let-item>
                <span><i *ngIf="item.icon" [class]="'mr-1 fas fa-' + item.icon"></i>{{ item.label }}</span>
            </ng-template>
        </kendo-dropdownbutton>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownActionRtlComponent extends DropdownActionComponent {}
