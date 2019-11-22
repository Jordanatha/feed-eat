import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFileUploaderComponent } from '@shared/modules/button-file-uploader/components/button-file-uploader.component';

@NgModule({
    declarations: [ButtonFileUploaderComponent],
    imports: [CommonModule],
    exports: [ButtonFileUploaderComponent],
})
export class ButtonFileUploaderModule {}
