import { Injectable } from '@angular/core';
import { KbjiResourceInputService } from '@shared/modules/kbji/inputs/resource-input.service';
import { KbjiApiClient } from '@shared/modules/kbji/clients/api.client';
import { PositionCategory } from '@shared/modules/kbji/models/position-category';

@Injectable()
export class PositionCategoryInputService extends KbjiResourceInputService<PositionCategory> {
    protected path: string = 'position-categories';

    public constructor(client: KbjiApiClient) {
        super(client);
    }

    protected map(item: PositionCategory): any {
        item['text'] = item.name + ' (' + item.code + ')';
        return item;
    }

    protected type(): any {
        return PositionCategory;
    }
}
