import { Injectable } from '@angular/core';
import { KbjiResourceInputService } from '@shared/modules/kbji/inputs/resource-input.service';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';
import { PositionGroup } from '@shared/modules/kbji/models/position-group';

@Injectable()
export class PositionGroupInputService extends KbjiResourceInputService<PositionGroup> {
    protected path: string = 'position-groups';

    public constructor(client: KbjiApiClient) {
        super(client);
    }

    protected map(item: PositionGroup): any {
        item['text'] = item.name + ' (' + item.code + ')';
        return item;
    }

    protected type(): any {
        return PositionGroup;
    }
}
