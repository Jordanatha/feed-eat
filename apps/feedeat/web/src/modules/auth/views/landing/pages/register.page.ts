import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'feedeat-register-page',
    templateUrl: './register.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage {}
