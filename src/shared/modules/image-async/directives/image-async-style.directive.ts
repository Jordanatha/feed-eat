import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[imageAsyncStyle]',
})
export class ImageAsyncStyleDirective {
    @Input() public imageAsyncStyle: any;

    public constructor(private el: ElementRef) {
        this.el.nativeElement.style = this.imageAsyncStyle;
    }
}
