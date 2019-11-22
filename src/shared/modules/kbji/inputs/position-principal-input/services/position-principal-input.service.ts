import { Injectable } from '@angular/core';
import { KbjiResourceInputService } from '@shared/modules/kbji/inputs/resource-input.service';
import { PositionPrincipal } from '@shared/modules/kbji/models/position-principal';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';

@Injectable()
export class PositionPrincipalInputService extends KbjiResourceInputService<PositionPrincipal> {
    protected path: string = 'position-principals';

    public constructor(client: KbjiApiClient) {
        super(client);
    }

    protected map(item: PositionPrincipal): any {
        item['text'] = item.name + ' (' + item.code + ')';
        return item;
    }

    protected type(): any {
        return PositionPrincipal;
    }
}
