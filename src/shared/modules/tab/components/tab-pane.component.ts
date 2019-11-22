import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
} from '@angular/core';
import { TabContentDirective } from '@shared/modules/tab/directives/tab-content.directive';

@Component({
    selector: 'tab-pane',
    template: '<ng-content></ng-content>',
    styles: [
        `
            :host {
                width: 100%;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabPaneComponent implements AfterContentInit, OnChanges {
    @Input() public currentIndex: number = 0;

    @Output() public tabChanged: EventEmitter<number> = new EventEmitter();

    @ContentChildren(TabContentDirective) private tabContents: QueryList<TabContentDirective>;

    private activeIndex: number;

    public ngAfterContentInit(): void {
        this.setActiveIndex(this.currentIndex);
    }

    public ngOnChanges(): void {
        if (this.currentIndex !== this.activeIndex) {
            this.setActiveIndex(this.currentIndex);
        }
    }

    public setActiveIndex(index: number): void {
        this.tabChanged.emit(index);
        this.activeIndex = index;

        if (this.tabContents) {
            this.tabContents.forEach((tabContent: TabContentDirective, i: number) => {
                if (index === i) {
                    tabContent.show();
                } else {
                    tabContent.hide();
                }
            });
        }
    }
}
