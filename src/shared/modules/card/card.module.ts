import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@shared/modules/card/components/card.component';
import { CardFooterComponent } from '@shared/modules/card/components/card-footer.component';
import { CardHeaderComponent } from '@shared/modules/card/components/card-header.component';
import { CardContentComponent } from '@shared/modules/card/components/card-content.component';
import { CardThumbnailComponent } from '@shared/modules/card/components/card-thumbnail.component';
import { CardBelowFooterComponent } from '@shared/modules/card/components/card-below-footer.component';

const COMPONENTS = [
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardThumbnailComponent,
    CardBelowFooterComponent,
];

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class CardModule {}
