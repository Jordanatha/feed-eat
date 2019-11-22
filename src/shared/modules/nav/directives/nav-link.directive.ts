import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[navLink]',
})
export class NavLinkDirective {
    @HostBinding('class.active') private active: boolean;

    @Input()
    public set isActive(active: boolean) {
        this.active = active;
    }

    public constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.classList.add('nav-link');
    }
}
