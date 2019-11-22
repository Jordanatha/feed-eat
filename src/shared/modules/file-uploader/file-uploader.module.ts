import { NgModule } from '@angular/core';
import { FileUploaderComponent } from '@shared/modules/file-uploader/components/file-uploader.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [FileUploaderComponent],
    exports: [FileUploaderComponent],
})
export class FileUploaderModule {}
