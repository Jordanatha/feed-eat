import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PositionDialogService } from '@shared/modules/kbji/services/position-dialog.service';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { PositionPrincipal } from '@shared/modules/kbji/models/position-principal';
import { Subscriber } from '@ubud/sate';
import { catchError, filter, first, map, mergeMap, tap } from 'rxjs/operators';
import { Position } from '@shared/modules/kbji/models/position';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';
import { HttpUtil } from '@shared/utils/http.util';
import { RouterUtil } from '@shared/utils/router.util';
import { mapToArrayClass, mapToData } from '@feedeat/api/transformers/responses.transformer';
import { HttpErrorResponse } from '@angular/common/http';
import { PositionSubPrincipal } from '@shared/modules/kbji/models/position-sub-principal';
import { PositionGroup } from '@shared/modules/kbji/models/position-group';
import { PositionCategory } from '@shared/modules/kbji/models/position-category';
import { DataResult, process } from '@progress/kendo-data-query';

@Component({
    selector: 'position-dialog',
    templateUrl: './position.dialog.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionDialog implements OnInit, OnDestroy {
    public keyword: string = '';

    private readonly principalSubject: BehaviorSubject<PositionPrincipal | null> = new BehaviorSubject(null);
    private readonly subPrincipalSubject: BehaviorSubject<PositionSubPrincipal | null> = new BehaviorSubject(null);
    private readonly groupSubject: BehaviorSubject<PositionGroup | null> = new BehaviorSubject(null);
    private readonly categorySubject: BehaviorSubject<PositionCategory | null> = new BehaviorSubject(null);

    private readonly loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private readonly positionsSubject: BehaviorSubject<Position[]> = new BehaviorSubject([]);

    public constructor(public service: PositionDialogService, private subscriber: Subscriber, private client: KbjiApiClient) {}

    public get principal$(): Observable<PositionPrincipal | null> {
        return this.principalSubject.asObservable();
    }

    public set principal(principal: PositionPrincipal) {
        this.principalSubject.next(principal);
    }

    public get subPrincipal$(): Observable<PositionSubPrincipal | null> {
        return this.subPrincipalSubject.asObservable();
    }

    public set subPrincipal(subPrincipal: PositionSubPrincipal) {
        this.subPrincipalSubject.next(subPrincipal);
    }

    public get group$(): Observable<PositionGroup | null> {
        return this.groupSubject.asObservable();
    }

    public set group(group: PositionGroup) {
        this.groupSubject.next(group);
    }

    public get category$(): Observable<PositionCategory | null> {
        return this.categorySubject.asObservable();
    }

    public set category(category: PositionCategory) {
        this.categorySubject.next(category);
    }

    public get loading$(): Observable<boolean> {
        return this.loadingSubject.asObservable();
    }

    public get positions$(): Observable<Position[]> {
        return this.positionsSubject.asObservable();
    }

    public get collection$(): Observable<DataResult> {
        return this.positions$.pipe(
            map(positions => {
                return process(positions, { group: [{ field: 'positionCategory.id' }] });
            }),
        );
    }

    public search(value: string): void {
        this.subscriber.subscribe(
            this,
            combineLatest(this.principal$, this.subPrincipal$, this.group$, this.category$).pipe(
                first(),
                mergeMap(([principal, subPrincipal, group, category]) => {
                    const queries: any = {
                        limit: 20,
                    };

                    if (principal instanceof PositionPrincipal) {
                        queries['positionPrincipal'] = principal.id;
                    }

                    if (subPrincipal instanceof PositionSubPrincipal) {
                        queries['positionSubPrincipal'] = subPrincipal.id;
                    }

                    if (group instanceof PositionGroup) {
                        queries['positionGroup'] = group.id;
                    }

                    if (category instanceof PositionCategory) {
                        queries['positionCategory'] = category.id;
                    }

                    queries['keyword'] = value;

                    this.loadingSubject.next(true);

                    return this.client
                        .get(`positions`, { params: HttpUtil.queryParamsExtractor(RouterUtil.queryParamsExtractor(queries)) })
                        .pipe(
                            mapToData(),
                            mapToArrayClass(Position),
                        );
                }),
                tap((positions: Position[]) => {
                    this.positionsSubject.next(positions);
                    this.loadingSubject.next(false);
                }),
                catchError((e: HttpErrorResponse) => {
                    return of(null).pipe(tap(() => this.loadingSubject.next(false)));
                }),
            ),
        );
    }

    public bindFilter(): void {
        this.subscriber.subscribe(
            this,
            combineLatest(this.principal$, this.subPrincipal$, this.group$, this.category$).pipe(
                first(),
                mergeMap(([principal, subPrincipal, group, category]) => {
                    const queries: any = {
                        limit: 20,
                    };

                    if (principal instanceof PositionPrincipal) {
                        queries['positionPrincipal'] = principal.id;
                    }

                    if (subPrincipal instanceof PositionSubPrincipal) {
                        queries['positionSubPrincipal'] = subPrincipal.id;
                    }

                    if (group instanceof PositionGroup) {
                        queries['positionGroup'] = group.id;
                    }

                    if (category instanceof PositionCategory) {
                        queries['positionCategory'] = category.id;
                    }

                    if (
                        principal instanceof PositionPrincipal ||
                        subPrincipal instanceof PositionSubPrincipal ||
                        group instanceof PositionGroup ||
                        category instanceof PositionCategory
                    ) {
                        this.loadingSubject.next(true);

                        return this.client
                            .get(`positions`, { params: HttpUtil.queryParamsExtractor(RouterUtil.queryParamsExtractor(queries)) })
                            .pipe(
                                mapToData(),
                                mapToArrayClass(Position),
                            );
                    }

                    return of(null);
                }),
                filter(response => !!response),
                tap((positions: Position[]) => {
                    this.positionsSubject.next(positions);
                    this.loadingSubject.next(false);
                }),
                catchError((e: HttpErrorResponse) => {
                    return of(null).pipe(tap(() => this.loadingSubject.next(false)));
                }),
            ),
        );
    }

    public select(position: Position): void {
        this.service.select(position);
    }

    public ngOnInit(): void {
        this.subscriber.subscribe(
            this,
            this.service.open$.pipe(
                tap((open: boolean) => {
                    if (open) {
                        this.loadingSubject.next(false);
                        this.positionsSubject.next([]);
                        this.principalSubject.next(null);
                        this.subPrincipalSubject.next(null);
                        this.groupSubject.next(null);
                        this.categorySubject.next(null);
                    }
                }),
                mergeMap(open => {
                    this.loadingSubject.next(true);

                    if (open) {
                        const queries = { limit: 20 };
                        return this.client
                            .get(`positions`, { params: HttpUtil.queryParamsExtractor(RouterUtil.queryParamsExtractor(queries)) })
                            .pipe(
                                mapToData(),
                                mapToArrayClass(Position),
                            );
                    }

                    return of(null);
                }),
                filter(response => !!response),
                tap((positions: Position[]) => {
                    this.positionsSubject.next(positions);
                    this.loadingSubject.next(false);
                }),
                catchError((e: HttpErrorResponse) => {
                    return of(null).pipe(tap(() => this.loadingSubject.next(false)));
                }),
            ),
        );
    }

    public ngOnDestroy(): void {
        this.subscriber.flush(this);
    }
}
