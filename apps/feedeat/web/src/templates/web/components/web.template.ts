import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-web-template',
    templateUrl: './web.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./web.template.scss'],
})
export class WebTemplate {}
