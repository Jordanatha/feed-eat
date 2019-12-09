import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { NavbarCollapseDirective } from '@shared/modules/navbar/directives/navbar-collapse.directive';
import union from 'lodash-es/union';
import xor from 'lodash-es/xor';
import { HorizontalAlignment } from '@shared/enums/alignment';
import { NavbarTogglerDirective } from '@shared/modules/navbar/directives/navbar-toggler.directive';

@Component({
    selector: 'navbar',
    template: `
        <nav [id]="id" [ngClass]="classes" navbar>
            <div class="container-fluid">
                <ng-content select=".navbar-brand"></ng-content>
                <button type="button"
                        (toggleNav)="onToggleNav()"
                        navbarToggler>
                    <span class="navbar-toggler-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                <div id="navbar-collapse" navbarCollapse>
                    <ng-content select=".menu-navbar"></ng-content>
                    <ng-content select=".control-navbar"></ng-content>
                </div>
            </div>
        </nav>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    @Input()
    public set navClasses(navClasses: string) {
        this.classes = union(this.classes, navClasses.split(' '));
    }
    @Input() public id: string = '';

    @ViewChild(NavbarCollapseDirective, { static: false })
    private navbarCollapse: NavbarCollapseDirective;
    @ViewChild(NavbarTogglerDirective, { static: false })
    private navbarToggler: NavbarTogglerDirective;

    public classes: string[] = ['navbar', 'navbar-expand-lg'];
    public HorizontalAlignment: any = HorizontalAlignment;

    public constructor(private cdRef: ChangeDetectorRef) {}

    public onToggleNav(): void {
        this.classes = xor(this.classes, ['expanded']);
        this.navbarCollapse.toggleCollapse();
        const find = this.classes.find(item => item === 'expanded');
        if (!find) {
            this.navbarToggler.toggleCollapse();
        }
        this.cdRef.markForCheck();
    }
}
