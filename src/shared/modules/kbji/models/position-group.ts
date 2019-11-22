import { UUIDModel } from '@shared/models/uuid-model';
import { Type } from 'class-transformer';
import { forwardRef } from '@angular/core';
import { PositionSubPrincipal } from '@shared/modules/kbji/models/position-sub-principal';

export class PositionGroup extends UUIDModel<PositionGroup> {
    public positionSubPrincipalId: string;
    public code: string;
    public name: string;

    @Type(forwardRef(() => PositionSubPrincipal) as any)
    public positionSubPrincipal: PositionSubPrincipal;
}
