import { Directive, ElementRef, OnInit } from '@angular/core';

/* tslint:disable */
@Directive({
    selector: '[replaceHost]',
})
export class ReplaceHostDirective implements OnInit {
    public constructor(private el: ElementRef) {}

    public ngOnInit(): void {
        const nativeElement: HTMLElement = this.el.nativeElement;
        const parentElement: HTMLElement = nativeElement.parentElement!;
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        parentElement.removeChild(nativeElement);
    }
}
