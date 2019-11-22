import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[tabContent]',
})
export class TabContentDirective {
    public constructor(private el: ElementRef) {
        this.el.nativeElement.style.display = 'none';
    }

    public show(): void {
        this.el.nativeElement.style.display = 'block';
    }

    public hide(): void {
        this.el.nativeElement.style.display = 'none';
    }
}
