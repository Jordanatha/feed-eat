import { Directive } from '@angular/core';
import { RouterRedirector } from '@shared/modules/router-redirector/services/router-redirector';

@Directive({
    selector: '[routerRedirector]',
    exportAs: 'routerRedirector',
})
export class RouterRedirectorDirective {
    public constructor(private redirector: RouterRedirector) {}

    public get url(): string {
        return this.redirector.currentPreviousUrl;
    }
}
