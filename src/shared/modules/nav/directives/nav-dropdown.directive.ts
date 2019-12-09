import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[navDropdown]',
})
export class NavDropdownDirective {
    @Output() public documentClicked: EventEmitter<any> = new EventEmitter();

    public constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event'])
    public onDocumentClick(e: any): void {
        if (!this.elementRef.nativeElement.contains(e.target)) {
            this.documentClicked.emit(true);
        }
    }
}
