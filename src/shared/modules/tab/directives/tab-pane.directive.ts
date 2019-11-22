import { Directive, ElementRef, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[tabPane]',
})
export class TabPaneDirective {
    @Input()
    public set isActive(active: boolean) {
        this.active = active;
        this.show = active;
    }
    @Output() public tabActivated: EventEmitter<any> = new EventEmitter<any>();

    @HostBinding('class.active') private active: boolean;
    @HostBinding('class.show') private show: boolean;

    public constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.className = 'tab-pane';
    }
}
