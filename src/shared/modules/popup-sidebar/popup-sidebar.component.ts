import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'popup-sidebar',
    templateUrl: './popup-sidebar.component.html',
    styleUrls: ['./popup-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupSidebarComponent {
    @Input() public width: number;
    @Output() public closePopupSidebar: EventEmitter<any> = new EventEmitter<any>();

    public constructor() {
        this.width = 700;
    }
}
