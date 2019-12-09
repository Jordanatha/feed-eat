import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AuthService } from '@feedeat/auth/services/auth.service';
import { User } from '@feedeat/auth/models/user';

@Injectable()
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
    public constructor(private service: AuthService, private router: Router, private storage: Storage) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.service.getAuthenticatedUser().pipe(
            first(),
            map((user: User | null) => {
                return !!user;
            }),
        );
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }
}
