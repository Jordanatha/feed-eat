import { ChangeDetectionStrategy, Component, Input, ViewChildren } from '@angular/core';
import { NavbarCollapseDirective } from '@shared/modules/navbar/directives/navbar-collapse.directive';
import union from 'lodash-es/union';
import xor from 'lodash-es/xor';
import { HorizontalAlignment } from '@shared/enums/alignment';

@Component({
    selector: 'navbar',
    template: `
        <nav [id]="id" [ngClass]="classes" navbar>
            <div class="container">
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
                    <naker-nav navClasses="navbar-nav" [hAlign]="HorizontalAlignment.RIGHT">
                        <ng-content select="[navItem], kemnaker-dropdown"></ng-content>
                    </naker-nav>
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

    @ViewChildren(NavbarCollapseDirective) private navbarCollapse: NavbarCollapseDirective;

    public classes: string[] = ['navbar', 'navbar-expand-lg'];
    public HorizontalAlignment: any = HorizontalAlignment;

    public onToggleNav(): void {
        this.classes = xor(this.classes, ['expanded']);
        this.navbarCollapse.toggleCollapse();
    }
}
