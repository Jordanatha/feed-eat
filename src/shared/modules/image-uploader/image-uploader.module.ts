import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageAsyncModule } from '@shared/modules/image-async/image-async.module';
import { IMAGE_UPLOADER_COMPONENTS } from '@shared/modules/image-uploader/components';

@NgModule({
    imports: [CommonModule, ImageAsyncModule],
    declarations: [...IMAGE_UPLOADER_COMPONENTS],
    exports: [...IMAGE_UPLOADER_COMPONENTS],
})
export class ImageUploaderModule {}
