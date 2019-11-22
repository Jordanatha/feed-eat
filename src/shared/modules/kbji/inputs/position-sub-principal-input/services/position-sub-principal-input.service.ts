import { Injectable } from '@angular/core';
import { KbjiResourceInputService } from '@shared/modules/kbji/inputs/resource-input.service';
import { PositionSubPrincipal } from '@shared/modules/kbji/models/position-sub-principal';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';

@Injectable()
export class PositionSubPrincipalInputService extends KbjiResourceInputService<PositionSubPrincipal> {
    protected path: string = 'position-sub-principals';

    public constructor(client: KbjiApiClient) {
        super(client);
    }

    protected map(item: PositionSubPrincipal): any {
        item['text'] = item.name + ' (' + item.code + ')';
        return item;
    }

    protected type(): any {
        return PositionSubPrincipal;
    }
}
