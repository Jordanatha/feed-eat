import { Injectable } from '@angular/core';
import { KbjiResourceInputService } from '@shared/modules/kbji/inputs/resource-input.service';
import { Position } from '@shared/modules/kbji/models/position';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';

@Injectable()
export class PositionInputService extends KbjiResourceInputService<Position> {
    protected path: string = 'positions';

    public constructor(client: KbjiApiClient) {
        super(client);
    }

    protected map(item: Position): any {
        item['text'] = item.name + '(' + item.code + ')';
        return item;
    }

    protected type(): any {
        return Position;
    }
}
