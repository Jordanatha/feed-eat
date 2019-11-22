import { UUIDModel } from '@shared/models/uuid-model';

export class PositionPrincipal extends UUIDModel<PositionPrincipal> {
    public code: string;
    public name: string;
}
