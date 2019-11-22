import { UUIDModel } from '@shared/models/uuid-model';
import { Type } from 'class-transformer';
import { forwardRef } from '@angular/core';
import { PositionGroup } from '@shared/modules/kbji/models/position-group';

export class PositionCategory extends UUIDModel<PositionCategory> {
    public positionGroupId: string;
    public code: string;
    public name: string;

    @Type(forwardRef(() => PositionGroup) as any)
    public positionGroup: PositionGroup;
}
