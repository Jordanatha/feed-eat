import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownActionComponent } from '@shared/modules/dropdown-action/components/dropdown-action.component';

@Component({
    selector: 'dropdown-action-default',
    template: `
        <kendo-dropdownbutton class="k-bare" [icon]="'more-vertical'"
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
export class DropdownActionDefaultComponent extends DropdownActionComponent {}
