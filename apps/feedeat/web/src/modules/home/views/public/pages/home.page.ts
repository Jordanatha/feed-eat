import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-home-page',
    templateUrl: './home.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./home.page.scss'],
})
export class HomePage {}
