import { UUIDModel } from '@shared/models/uuid-model';
import { Type } from 'class-transformer';
import { forwardRef } from '@angular/core';
import { PositionPrincipal } from '@shared/modules/kbji/models/position-principal';

export class PositionSubPrincipal extends UUIDModel<PositionSubPrincipal> {
    public positionPrincipalId: string;
    public code: string;
    public name: string;

    @Type(forwardRef(() => PositionPrincipal) as any)
    public positionPrincipal: PositionPrincipal;
}
