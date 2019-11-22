import { FormValue } from '@ubud/form';

export interface DataView {
    reload(): void;
    refresh(): void;
    onSearch(dto: FormValue<any>): void;
    onPageChange(event: any): void;
}
