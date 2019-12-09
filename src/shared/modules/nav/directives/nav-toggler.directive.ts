import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[navToggler]',
})
export class NavTogglerDirective {
    @Output() public onClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    @HostListener('click')
    public onClick(): void {
        this.onClicked.emit(true);
    }
}
