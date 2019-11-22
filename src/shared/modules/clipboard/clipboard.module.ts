import { NgModule } from '@angular/core';
import { ClipboardModule as NgxClipboardModule } from 'ngx-clipboard';
import { ClipboardComponent } from '@shared/modules/clipboard/components/clipboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ClipboardComponent],
    imports: [NgxClipboardModule, CommonModule],
    exports: [ClipboardComponent, NgxClipboardModule],
})
export class ClipboardModule {}
