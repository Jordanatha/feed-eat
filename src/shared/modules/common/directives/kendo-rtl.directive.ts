import { AfterViewInit, Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[kendoRtl]',
})
export class KendoRtlDirective implements AfterViewInit {
    public constructor(private _view: ViewContainerRef) {}

    public ngAfterViewInit(): void {
        setTimeout(() => {
            const component: any = (<any>this._view)._data.componentView.component;

            if (component.hasOwnProperty('direction')) {
                component.direction = 'rtl';
            }
        }, 1);
    }
}
