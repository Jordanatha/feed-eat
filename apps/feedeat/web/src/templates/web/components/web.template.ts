import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@feedeat/auth/models/user';
import { Router } from '@angular/router';
import { AuthRepository } from '@feedeat/auth/repositories/auth.repository';
import { NavbarComponent } from '@shared/modules/navbar/components/navbar.component';
import { HorizontalAlignment } from '@shared/enums/alignment';
import { Subscriber } from '@ubud/sate';
import { AuthService } from '@feedeat/auth/services/auth.service';
import { AuthClient } from '@feedeat/auth/clients/auth.client';

@Component({
    selector: 'feedeat-web-template',
    templateUrl: './web.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./web.template.scss'],
    providers: [AuthService, AuthClient],
})
export class WebTemplate implements OnInit, OnDestroy {
    public user$: Observable<User | null>;
    public horizontalAlignment: any = HorizontalAlignment;
    @ViewChild('navbarTpl', { static: true })
    public navbarTpl: NavbarComponent;

    public constructor(
        private router: Router,
        private authRepository: AuthRepository,
        private subscriber: Subscriber,
        private authService: AuthService,
    ) {
        this.user$ = this.authRepository.getUser$();
    }

    public toggleNavbar(): void {
        this.navbarTpl.onToggleNav();
    }

    public ngOnInit(): void {
        this.subscriber.subscribe(this, this.authService.getAuthenticatedUser());
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
