import { Directive, HostBinding, HostListener } from '@angular/core';

const FIXED_NAVBAR_Y_OFFSET = 90;

@Directive({
    selector: '[navbar]',
})
export class NavbarDirective {
    @HostBinding('class.active') private active: boolean;

    @HostListener('window:scroll', ['$event'])
    private navbarScroll($event: any): void {
        if (!this.active && window.scrollY > FIXED_NAVBAR_Y_OFFSET) {
            this.active = true;
        } else if (this.active && window.scrollY <= FIXED_NAVBAR_Y_OFFSET) {
            this.active = false;
        }
    }
}
