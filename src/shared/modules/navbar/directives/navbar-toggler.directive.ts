import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[navbarToggler]',
})
export class NavbarTogglerDirective {
    @Output() private toggleNav: EventEmitter<any> = new EventEmitter<any>();

    @HostBinding('class.collapsed') private collapsed: boolean = true;

    @HostListener('click', ['$event'])
    public toggleClick($event: any): void {
        $event.preventDefault();
        this.collapsed = !this.collapsed;
        this.toggleNav.emit();
    }

    public toggleCollapse(): void {
        this.collapsed = true;
    }

    public constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.className = 'navbar-toggler';
    }
}
