import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[filterExpanderSubtitle]',
})
export class FilterExpanderSubtitleDirective {
    @ContentChild(TemplateRef, { static: false })
    public tpl: TemplateRef<any>;
}
