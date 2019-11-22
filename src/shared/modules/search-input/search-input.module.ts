import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInput } from '@shared/modules/search-input/components/search.input';

@NgModule({
    declarations: [SearchInput],
    imports: [CommonModule],
    exports: [SearchInput],
})
export class SearchInputModule {}
