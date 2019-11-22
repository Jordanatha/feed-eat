import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Breadcrumb } from '@shared/modules/breadcrumb/types/breadcrumb';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BreadcrumbService {
    private readonly _breadcrumbs: BehaviorSubject<Breadcrumb[]>;

    public constructor() {
        this._breadcrumbs = new BehaviorSubject([]);
    }

    public get breadcrumbs$(): Observable<Breadcrumb[]> {
        return this._breadcrumbs.asObservable();
    }

    public updateBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
        this._breadcrumbs.next(breadcrumbs);
    }
}
