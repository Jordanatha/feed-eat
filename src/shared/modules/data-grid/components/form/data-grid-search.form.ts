import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormComponent } from '@ubud/form';
import { SearchDto } from '@shared/modules/data-grid/models/search-dto';

@Component({
    selector: 'data-grid-search-form',
    templateUrl: './data-grid-search.form.html',
    styleUrls: ['./data-grid-search.form.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataGridSearchForm extends FormComponent<SearchDto> {
    @Input()
    public set placeholder(val: string) {
        if (val) {
            this._placeholder = val;
        } else {
            this._placeholder = 'Press ENTER to search data by keyword';
        }
    }

    public _placeholder: string;
}
