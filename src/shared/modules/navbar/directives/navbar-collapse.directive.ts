import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[navbarCollapse]',
})
export class NavbarCollapseDirective {
    @HostBinding('class.show') private show: boolean = false;

    public constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.className = 'collapse navbar-collapse';
    }

    public toggleCollapse(): void {
        this.show = !this.show;
    }
}
