import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Breadcrumb } from '@shared/modules/breadcrumb/types/breadcrumb';
import { BreadcrumbService } from '@shared/modules/breadcrumb/services/breadcrumb.service';

@Component({
    selector: 'breadcrumb',
    template: `
        <ol class="breadcrumb">
            <li *ngFor="let breadcrumb of breadcrumbs$ | async; let last = last; let i = index"
                class="breadcrumb-item" [ngClass]="{active: last}">
                <i *ngIf="i !== 0" class="fas fa-angle-right"></i>
                <a *ngIf="!last && breadcrumb.url !== null" (click)="navigated(breadcrumb.url)">{{breadcrumb.title}}</a>
                <span *ngIf="last || breadcrumb.url === null">{{breadcrumb.title}}</span>
            </li>
        </ol>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
    public breadcrumbs$: Observable<Breadcrumb[]>;

    constructor(service: BreadcrumbService, private router: Router) {
        this.breadcrumbs$ = service.breadcrumbs$;
    }

    public navigated(url: string): void {
        this.router.navigateByUrl(url);
    }
}
