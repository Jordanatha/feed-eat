import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection } from '@shared/types/collection';

@Component({
    selector: 'paginator',
    templateUrl: './pagination.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
    @Input('collection')
    public set _collection(val: Collection<any>) {
        this.collection = val;

        this.page = this.collection.page;
        this.count = this.collection.total;
        this.perPage = this.collection.limit;
    }

    @Output() public changed: EventEmitter<any> = new EventEmitter();

    public collection: Collection<any>;
    public page: number;
    public count: number;
    public perPage: number;
    public pagesToShow: number = 5;

    public get min(): number {
        return this.perPage * this.page - this.perPage + 1;
    }

    public get max(): number {
        let max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    }

    public get lastPage(): boolean {
        return this.page === this.collection.lastPage;
    }

    public get getPages(): number[] {
        const c = Math.ceil(this.count / this.perPage);
        const p = this.page || 1;
        const pagesToShow = this.pagesToShow || 9;
        const pages: number[] = [];
        pages.push(p);
        const times = pagesToShow - 1;
        for (let i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort((a, b) => a - b);
        return pages;
    }

    public onPage(n: number): void {
        this.changed.emit({ page: n });
    }

    public onPrev(): void {
        this.page--;

        this.changed.emit({ page: this.page });
    }

    public onNext(): void {
        this.page++;

        this.changed.emit({ page: this.page });
    }

    public onFirst(): void {
        this.page = 1;

        this.changed.emit({ page: this.page });
    }

    public onLast(): void {
        this.page = this.collection.lastPage;

        this.changed.emit({ page: this.page });
    }
}
