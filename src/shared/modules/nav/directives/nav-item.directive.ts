import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[navItem]',
})
export class NavItemDirective {
    @HostBinding('class.active') private active: boolean;

    @Input()
    public set isActive(active: boolean) {
        this.active = active;
    }

    public constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.className = 'nav-item';
    }
}
