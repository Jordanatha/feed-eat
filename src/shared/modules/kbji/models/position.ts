import { UUIDModel } from '@shared/models/uuid-model';
import { Type } from 'class-transformer';
import { forwardRef } from '@angular/core';
import { PositionCategory } from '@shared/modules/kbji/models/position-category';

export class Position extends UUIDModel<Position> {
    public positionCategoryId: string;
    public code: string;
    public name: string;

    @Type(forwardRef(() => PositionCategory) as any)
    public positionCategory: PositionCategory;
}
