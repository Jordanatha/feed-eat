import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchFormFactory } from '@shared/modules/data-grid/factories/search-form.factory';
import { Form, FormValue } from '@ubud/form';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchDto } from '@shared/modules/data-grid/models/search-dto';

@Component({
    selector: 'data-grid-search-container',
    templateUrl: './data-grid-search.container.html',
    providers: [SearchFormFactory],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataGridSearchContainer {
    @Input() public placeholder: string;

    @Output() public submitted: EventEmitter<FormValue<SearchDto>>;

    public form: Form;

    public constructor(factory: SearchFormFactory, private activatedRoute: ActivatedRoute) {
        this.form = factory.create();
        this.submitted = new EventEmitter<FormValue<SearchDto>>();

        this.activatedRoute.queryParams
            .pipe(
                switchMap(query => of(query.keyword)),
                tap((keyword: string) => {
                    this.form.formGroup.reset({ keyword });
                }),
            )
            .subscribe();
    }

    public onSubmit(dto: FormValue<SearchDto>): void {
        if ('VALID' === dto.status) {
            this.submitted.emit(dto);
        }
    }
}
