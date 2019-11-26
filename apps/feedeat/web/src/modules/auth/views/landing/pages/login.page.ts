import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-login-page',
    templateUrl: './login.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {}
