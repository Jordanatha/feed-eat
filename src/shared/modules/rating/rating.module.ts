import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '@shared/modules/rating/components/rating.component';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
    imports: [CommonModule, BarRatingModule],
    declarations: [RatingComponent],
    exports: [RatingComponent],
})
export class RatingModule {}
