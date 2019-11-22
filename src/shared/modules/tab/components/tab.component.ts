import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Input,
    OnDestroy,
    OnInit,
    QueryList,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TabPaneDirective } from '@shared/modules/tab/directives/tab-pane.directive';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Nav } from '@shared/modules/nav/models/nav.model';

@Component({
    selector: 'tab',
    template: `
        <naker-nav [navClasses]="navClasses">
            <ng-container *ngFor="let nav of navigations; let i = index">
                <a [id]="nav.id"
                   [isActive]="isActive(i, nav.link)"
                   (click)="redirect(nav.link); changeActiveIndex(i)"
                   [ngStyle]="nav.style"
                   navItem
                   navLink>
                   {{nav.title}}
                </a>
            </ng-container>
        </naker-nav>
        <div class="tab-content" [id]="id">
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements AfterViewInit, OnDestroy, OnInit {
    @Input() public id = '';
    @Input() public navigations: Nav[] = [];
    @Input() public tabClasses = '';
    @ContentChildren(TabPaneDirective) private queryPanes: QueryList<TabPaneDirective>;
    private tabPanes: TabPaneDirective[] = [];

    private internalActiveIndex = 0;
    private destroyed$: Subject<any> = new Subject<any>();

    public constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router) {}

    public ngOnInit(): void {
        this.router.events.pipe(takeUntil(this.destroyed$.asObservable())).subscribe(evt => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }

            this.changeDetectorRef.markForCheck();
        });
    }

    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    public ngAfterViewInit(): void {
        this.tabPanes = this.queryPanes.toArray();
    }

    public isActive(index: number, navLink?: string): boolean {
        if (navLink) {
            return this.router.url.split('?')[0] === navLink.split('?')[0];
        }
        return this.activeIndex === index;
    }

    public changeActiveIndex(index: number): void {
        this.activeIndex = index;

        if (this.tabPanes.length > 0) {
            this.changeActiveTabPane(index);
        }
    }

    public changeActiveTabPane(index: number): void {
        this.tabPanes.forEach(tabPane => (tabPane.isActive = false));
        this.tabPanes[index].isActive = true;
        this.tabPanes[index].tabActivated.emit();
        this.changeDetectorRef.markForCheck();
    }

    public get navClasses(): string {
        return `nav-tabs ${this.tabClasses}`;
    }

    public get activeIndex(): number {
        return this.internalActiveIndex;
    }

    public set activeIndex(index: number) {
        this.internalActiveIndex = index;
    }

    public redirect(url: string): void {
        this.router.navigateByUrl(url);
    }
}
