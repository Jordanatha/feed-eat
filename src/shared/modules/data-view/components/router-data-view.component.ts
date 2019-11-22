import { Router } from '@angular/router';
import { FormValue } from '@ubud/form';
import { DataView } from '@shared/modules/data-view/types/data-view';
import { RouterUtil } from '@shared/utils/router.util';

export abstract class RouterDataViewComponent implements DataView {
    protected field: string;

    protected constructor(protected router: Router) {
        this.field = 'keyword';
    }

    public reload(): void {
        this.router.navigate([], { queryParams: { timestamps: Math.random() }, queryParamsHandling: 'merge' });
    }

    public refresh(): void {
        this.router.navigate([]);
    }

    public onSearch(dto: FormValue<any>): void {
        if ('VALID' === dto.status) {
            const { keyword } = dto.data;

            const obj = {
                [this.field]: keyword,
            };

            if (keyword !== null && keyword !== undefined) {
                this.router.navigate([], { queryParams: obj, queryParamsHandling: 'merge' });
            }
        }
    }

    public onFilter(queries: any): void {
        const params = RouterUtil.queryParamsExtractor(queries);

        this.router.navigate([], { queryParams: params, queryParamsHandling: 'merge' });
    }

    public onPageChange(event: any): void {
        const { page } = event;

        if (page) {
            this.router.navigate([], { queryParams: { page }, queryParamsHandling: 'merge' });
        }
    }
}
