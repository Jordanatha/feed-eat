import { Directive, Input } from '@angular/core';
import { RouterRedirector } from '@shared/modules/router-redirector/services/router-redirector';
import { RouterLink } from '@angular/router';

@Directive({
    selector: '[routerRedirectorLink]',
})
export class RouterRedirectorLinkDirective {
    @Input('routerRedirectorLink') public previousUrl: string;

    public constructor(private redirector: RouterRedirector, private element: RouterLink) {
        this.element.queryParams = {
            previousUrl: this.previousUrl ? this.previousUrl : this.redirector.previousUrl,
        };
    }
}
