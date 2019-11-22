import { NgModule } from '@angular/core';
import { QUILL_EDITOR_COMPONENTS } from '@shared/modules/quill-editor/components';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [QuillModule, FormsModule],
    declarations: [...QUILL_EDITOR_COMPONENTS],
    exports: [...QUILL_EDITOR_COMPONENTS, QuillModule],
    entryComponents: [...QUILL_EDITOR_COMPONENTS],
})
export class QuillEditorModule {}
