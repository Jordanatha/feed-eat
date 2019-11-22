import { EventEmitter, Input, Output } from '@angular/core';
import { DropdownAction } from '@shared/modules/dropdown-action/models/dropdown-action';

export class DropdownActionComponent {
    @Input() public actions: DropdownAction[];

    @Output() public changed: EventEmitter<DropdownAction>;

    public constructor() {
        this.changed = new EventEmitter<DropdownAction>();
    }
}
