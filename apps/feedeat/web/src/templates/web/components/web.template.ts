import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@feedeat/auth/models/user';
import { Router } from '@angular/router';
import { AuthRepository } from '@feedeat/auth/repositories/auth.repository';
import { NavbarComponent } from '@shared/modules/navbar/components/navbar.component';
import { HorizontalAlignment } from '@shared/enums/alignment';

@Component({
    selector: 'feedeat-web-template',
    templateUrl: './web.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./web.template.scss'],
})
export class WebTemplate {
    public user$: Observable<User | null>;
    public horizontalAlignment: any = HorizontalAlignment;
    @ViewChild('navbarTpl', { static: true })
    public navbarTpl: NavbarComponent;

    public constructor(private router: Router, private authRepository: AuthRepository) {
        this.user$ = this.authRepository.getUser$();
    }

    public toggleNavbar(): void {
        console.log('jalan');
        this.navbarTpl.onToggleNav();
    }
}
